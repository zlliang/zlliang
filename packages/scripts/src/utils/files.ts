import fs from "node:fs/promises"

import { CliError } from "./errors"

export async function pathExists(targetPath: string): Promise<boolean> {
  try {
    await fs.access(targetPath)
    return true
  } catch {
    return false
  }
}

export async function ensurePathExists(targetPath: string, displayPath = targetPath): Promise<void> {
  if (!await pathExists(targetPath)) {
    throw new CliError(`Path not found: ${displayPath}`)
  }
}
