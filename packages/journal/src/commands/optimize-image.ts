import { execFileSync } from "node:child_process"
import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

import { handleCommand } from "../utils/command"
import { JournalError } from "../utils/errors"

import type { CAC } from "cac"
import type { Sharp } from "sharp"

const MAX_EDGE = 2560
const SKIP_BYTES = 800 * 1024
const TARGET_BYTES = 800 * 1024
const QUALITY_STEP = 2

interface Codec {
  extensions: readonly string[]
  initialQuality: number
  minQuality: number
  encode: (pipeline: Sharp, quality: number) => Promise<Buffer>
}

const CODECS: readonly Codec[] = [
  {
    extensions: [".jpg", ".jpeg"],
    initialQuality: 90,
    minQuality: 70,
    encode: (pipeline, quality) => pipeline.jpeg({ quality, mozjpeg: true, progressive: true }).toBuffer(),
  },
  {
    extensions: [".png"],
    initialQuality: 90,
    minQuality: 70,
    encode: (pipeline, quality) => pipeline.png({ quality, compressionLevel: 9, effort: 8 }).toBuffer(),
  },
  {
    extensions: [".webp"],
    initialQuality: 80,
    minQuality: 70,
    encode: (pipeline, quality) => pipeline.webp({ quality, effort: 5, smartSubsample: true }).toBuffer(),
  },
  {
    extensions: [".avif"],
    initialQuality: 50,
    minQuality: 40,
    encode: (pipeline, quality) => pipeline.avif({ quality, effort: 5 }).toBuffer(),
  },
]

interface OptimizationCandidate {
  repoPath: string
  absolutePath: string
  codec: Codec
}

interface OptimizationStats {
  optimized: string[]
  skipped: string[]
  failed: string[]
}

export function registerOptimizeImageCommand(cli: CAC) {
  cli
    .command("optimize-image", "Optimize staged changed images across the repository")
    .example("journal optimize-image")
    .action(() => {
      void handleCommand(async () => {
        const repoRoot = resolveRepoRoot()
        const candidates = collectCandidates(repoRoot)
        if (candidates.length === 0) {
          process.stdout.write("No staged changed images to optimize.\n")
          return
        }

        const stats = await optimizeCandidates(candidates)
        if (stats.optimized.length > 0) {
          restageFiles(repoRoot, stats.optimized)
        }

        process.stdout.write(`Processed ${candidates.length} staged image(s): optimized ${stats.optimized.length}, skipped ${stats.skipped.length}, failed ${stats.failed.length}.\n`)
        if (stats.failed.length > 0) {
          throw new JournalError(`Image optimization failed for ${stats.failed.length} file(s).`)
        }
      })
    })
}

function resolveRepoRoot(): string {
  try {
    return execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim()
  } catch {
    throw new JournalError("Could not locate the git repository root.")
  }
}

function collectCandidates(repoRoot: string): OptimizationCandidate[] {
  return stagedChangedFiles(repoRoot)
    .map((repoPath) => {
      const codec = resolveCodec(repoPath)
      return codec
        ? {
            repoPath,
            absolutePath: path.resolve(repoRoot, repoPath),
            codec,
          }
        : undefined
    })
    .filter((candidate): candidate is OptimizationCandidate => candidate !== undefined)
}

function stagedChangedFiles(repoRoot: string): string[] {
  return execFileSync("git", ["-C", repoRoot, "diff", "--cached", "--name-only", "--diff-filter=AMR", "-z"], { encoding: "utf8" })
    .split("\0").filter(Boolean)
}

function resolveCodec(filePath: string): Codec | undefined {
  const extension = path.extname(filePath).toLowerCase()
  return CODECS.find((codec) => codec.extensions.includes(extension))
}

async function optimizeCandidates(candidates: OptimizationCandidate[]): Promise<OptimizationStats> {
  const stats: OptimizationStats = {
    optimized: [],
    skipped: [],
    failed: [],
  }

  for (const candidate of candidates) {
    try {
      if (await optimize(candidate)) {
        stats.optimized.push(candidate.repoPath)
      } else {
        stats.skipped.push(candidate.repoPath)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      process.stderr.write(`Error optimizing ${candidate.repoPath}: ${message}\n`)
      stats.failed.push(candidate.repoPath)
    }
  }

  return stats
}

async function optimize(candidate: OptimizationCandidate): Promise<boolean> {
  const input = await fs.readFile(candidate.absolutePath)
  const metadata = await sharp(input, { failOn: "none" }).metadata()
  const longEdge = Math.max(metadata.width ?? 0, metadata.height ?? 0)
  const shouldResize = longEdge > MAX_EDGE

  if (!shouldResize && input.byteLength < SKIP_BYTES) {
    return false
  }

  let quality = candidate.codec.initialQuality
  let output = await encode(input, candidate.codec, shouldResize, quality)
  while (output.byteLength > TARGET_BYTES && quality - QUALITY_STEP >= candidate.codec.minQuality) {
    quality -= QUALITY_STEP
    output = await encode(input, candidate.codec, shouldResize, quality)
  }

  if (!shouldResize && output.byteLength >= input.byteLength) {
    return false
  }

  await fs.writeFile(candidate.absolutePath, output)

  process.stdout.write(`Optimized ${candidate.repoPath} (${input.byteLength} -> ${output.byteLength})\n`)
  return true
}

async function encode(input: Buffer, codec: Codec, shouldResize: boolean, quality: number): Promise<Buffer> {
  let pipeline = sharp(input, { failOn: "none" }).rotate()

  if (shouldResize) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3,
    })
  }

  return codec.encode(pipeline, quality)
}

function restageFiles(repoRoot: string, files: string[]) {
  execFileSync("git", ["-C", repoRoot, "add", "--", ...files], { stdio: "inherit" })
}
