import fs from "node:fs/promises"
import path from "node:path"

import { CliError } from "./errors"

export async function pathExists(targetPath: string) {
  try {
    await fs.access(targetPath)
    return true
  } catch {
    return false
  }
}

export async function ensurePathExists(targetPath: string, displayPath = targetPath) {
  if (!await pathExists(targetPath)) {
    throw new CliError(`Path not found: ${displayPath}`)
  }
}

export async function writeFile(filePath: string, content: string) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.writeFile(filePath, content, "utf8")
}

export async function removePath(targetPath: string) {
  try {
    await fs.rm(targetPath, { force: true })
  } catch {
    try {
      await fs.rmdir(targetPath)
    } catch {
      // Leave missing paths and non-empty directories alone.
    }
  }
}
