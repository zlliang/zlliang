import fs from "node:fs/promises"
import path from "node:path"
import { convertPathToPattern, globby, isDynamicPattern } from "globby"

import { handleCommand } from "../utils/command"
import { ensurePathExists } from "../utils/files"
import { CliError } from "../utils/errors"

import type { CAC } from "cac"

const EXTENSIONS = [".astro", ".md", ".mdx"] as const
const REPLACEMENTS = [
  { source: " · ", target: "・" },
  { source: "·", target: "・" },
] as const

interface ReplacementRule {
  source: string
  target: string
}

interface ReplacementCandidate {
  displayPath: string
  absolutePath: string
}

interface ReplacementStats {
  updated: string[]
  skipped: string[]
  failed: string[]
}

interface ReplaceTextCommandOptions {
  dir?: string
}

export function registerReplaceTextCommand(cli: CAC) {
  cli
    .command("replace-text [...targets]", "Apply predefined text replacements to Astro and Markdown files")
    .example("toolkit replace-text")
    .example("toolkit replace-text content/posts")
    .example("toolkit --dir websites/muse replace-text")
    .example("toolkit --dir websites/muse replace-text content/posts")
    .example('toolkit replace-text "content/**/*.{astro,md,mdx}"')
    .example("toolkit replace-text note.md component.astro")
    .action((targets: string[] = [], options: ReplaceTextCommandOptions) => handleCommand(async () => {
      const candidates = await collectCandidates(targets, options.dir)
      if (candidates.length === 0) {
        process.stdout.write("No Astro or Markdown files to update.\n")
        return
      }

      const stats = await replaceInCandidates(candidates)
      process.stdout.write(`Processed ${candidates.length} ${candidates.length === 1 ? "file" : "files"}: updated ${stats.updated.length}, skipped ${stats.skipped.length}, failed ${stats.failed.length}.\n`)
      if (stats.failed.length > 0) {
        throw new CliError(`Text replacement failed for ${stats.failed.length} file(s).`)
      }
    }))
}

async function collectCandidates(targets: string[], dir?: string): Promise<ReplacementCandidate[]> {
  const baseDir = path.resolve(dir ?? process.cwd())
  await ensurePathExists(baseDir, dir ?? process.cwd())

  const patterns = await Promise.all((targets.length > 0 ? targets : [baseDir]).map((target) => resolvePattern(target, baseDir)))
  const discovered = await globby(patterns, {
    absolute: true,
    cwd: baseDir,
    expandDirectories: { extensions: EXTENSIONS.map((extension) => extension.slice(1)) },
    followSymbolicLinks: false,
    gitignore: true,
    onlyFiles: true,
  })

  return [...new Set(discovered)].sort((a, b) => a.localeCompare(b))
    .filter((absolutePath) => EXTENSIONS.includes(path.extname(absolutePath).toLowerCase() as typeof EXTENSIONS[number]))
    .map((absolutePath) => ({ displayPath: toDisplayPath(absolutePath), absolutePath }))
}

async function resolvePattern(target: string, baseDir: string): Promise<string> {
  if (isDynamicPattern(target)) {
    return target
  }

  const absolutePath = path.resolve(baseDir, target)
  await ensurePathExists(absolutePath, target)

  return convertPathToPattern(absolutePath)
}

function toDisplayPath(absolutePath: string): string {
  const relativePath = path.relative(process.cwd(), absolutePath)
  return relativePath.length > 0 ? relativePath : absolutePath
}

async function replaceInCandidates(candidates: ReplacementCandidate[]): Promise<ReplacementStats> {
  const stats: ReplacementStats = {
    updated: [],
    skipped: [],
    failed: [],
  }

  for (const candidate of candidates) {
    try {
      if (await replaceInFile(candidate)) {
        stats.updated.push(candidate.displayPath)
      } else {
        stats.skipped.push(candidate.displayPath)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      process.stderr.write(`Error updating ${candidate.displayPath}: ${message}\n`)
      stats.failed.push(candidate.displayPath)
    }
  }

  return stats
}

async function replaceInFile(candidate: ReplacementCandidate): Promise<boolean> {
  const input = await fs.readFile(candidate.absolutePath, "utf8")
  const output = applyReplacements(input, REPLACEMENTS)
  if (output === input) {
    return false
  }

  await fs.writeFile(candidate.absolutePath, output, "utf8")
  process.stdout.write(`Updated ${candidate.displayPath}\n`)
  return true
}

function applyReplacements(input: string, replacements: readonly ReplacementRule[]): string {
  return replacements.reduce((output, replacement) => output.replaceAll(replacement.source, replacement.target), input)
}
