import fs from "node:fs/promises"
import path from "node:path"
import { convertPathToPattern, globby, isDynamicPattern } from "globby"
import prettyBytes from "pretty-bytes"
import sharp from "sharp"

import { handleCommand } from "../utils/command"
import { JournalError } from "../utils/errors"
import { ensurePathExists } from "../utils/files"

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
  displayPath: string
  absolutePath: string
  codec: Codec
}

interface OptimizationStats {
  optimized: string[]
  skipped: string[]
  failed: string[]
}

interface OptimizeImageCommandOptions {
  dir?: string
}

export function registerOptimizeImageCommand(cli: CAC) {
  cli
    .command("optimize-image [...targets]", "Optimize images under the given paths or the current directory")
    .example("journal optimize-image")
    .example("journal --dir websites/muse optimize-image")
    .example("journal optimize-image content/posts")
    .example("journal --dir websites/muse optimize-image content/posts")
    .example('journal optimize-image "content/posts/**/*.{jpg,png}"')
    .example("journal optimize-image image-1.png image-2.webp")
    .action((targets: string[] = [], options: OptimizeImageCommandOptions) => {
      void handleCommand(async () => {
        const candidates = await collectCandidates(targets, options.dir)
        if (candidates.length === 0) {
          process.stdout.write("No images to optimize.\n")
          return
        }

        const stats = await optimizeCandidates(candidates)
        process.stdout.write(`Processed ${candidates.length} ${candidates.length === 1 ? "image" : "images"}: optimized ${stats.optimized.length}, skipped ${stats.skipped.length}, failed ${stats.failed.length}.\n`)
        if (stats.failed.length > 0) {
          throw new JournalError(`Image optimization failed for ${stats.failed.length} file(s).`)
        }
      })
    })
}

async function collectCandidates(targets: string[], dir?: string): Promise<OptimizationCandidate[]> {
  const baseDir = path.resolve(dir ?? process.cwd())
  await ensurePathExists(baseDir, dir ?? process.cwd())

  const patterns = await Promise.all((targets.length > 0 ? targets : [baseDir]).map((target) => resolvePattern(target, baseDir)))
  const extensions = CODECS.flatMap((codec) => codec.extensions.map((extension) => extension.slice(1)))
  const discovered = await globby(patterns, {
    absolute: true,
    cwd: baseDir,
    expandDirectories: { extensions },
    followSymbolicLinks: false,
    gitignore: true,
    onlyFiles: true,
  })

  return [...new Set(discovered)].sort((a, b) => a.localeCompare(b))
    .map((absolutePath) => {
      const codec = resolveCodec(absolutePath)
      return codec ? { displayPath: toDisplayPath(absolutePath), absolutePath, codec } : undefined
    })
    .filter((candidate): candidate is OptimizationCandidate => candidate !== undefined)
}

async function resolvePattern(target: string, baseDir: string): Promise<string> {
  if (isDynamicPattern(target)) {
    return target
  }

  const absolutePath = path.resolve(baseDir, target)
  await ensurePathExists(absolutePath, target)

  return convertPathToPattern(absolutePath)
}

function resolveCodec(filePath: string): Codec | undefined {
  const extension = path.extname(filePath).toLowerCase()
  return CODECS.find((codec) => codec.extensions.includes(extension))
}

function toDisplayPath(absolutePath: string): string {
  const relativePath = path.relative(process.cwd(), absolutePath)
  return relativePath.length > 0 ? relativePath : absolutePath
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
        stats.optimized.push(candidate.displayPath)
      } else {
        stats.skipped.push(candidate.displayPath)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      process.stderr.write(`Error optimizing ${candidate.displayPath}: ${message}\n`)
      stats.failed.push(candidate.displayPath)
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

  process.stdout.write(`Optimized ${candidate.displayPath} (${prettyBytes(input.byteLength)} -> ${prettyBytes(output.byteLength)})\n`)
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
