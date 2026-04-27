import path from "node:path"

import { CliError } from "./errors"
import { ensurePathExists, pathExists } from "./files"

export interface Structure {
  sitePath: string
  contentPath: string
  notesPath: string
  postsPath: string
  draftsPath: string
  draftsImagesPath: string
}

export async function resolveStructure(startPath = process.cwd()): Promise<Structure> {
  const resolvedPath = path.resolve(startPath)
  await ensurePathExists(resolvedPath, startPath)

  const sitePath = await findSitePath(resolvedPath)
  const contentPath = path.join(sitePath, "content")
  const notesPath = path.join(contentPath, "notes")
  const postsPath = path.join(contentPath, "posts")
  const draftsPath = path.join(postsPath, "drafts")
  const draftsImagesPath = path.join(draftsPath, "images")

  return {
    sitePath,
    contentPath,
    notesPath,
    postsPath,
    draftsPath,
    draftsImagesPath,
  }
}

async function findSitePath(startPath: string) {
  let current = startPath

  while (true) {
    if (await hasSiteStructure(current)) return current

    const parent = path.dirname(current)
    if (parent === current) break

    current = parent
  }

  throw new CliError(`Could not find a site content root from ${startPath}. Pass a path that contains \`content/notes\` and \`content/posts\`, or run the command from that directory.`)
}

async function hasSiteStructure(sitePath: string) {
  const contentPath = path.join(sitePath, "content")

  return await pathExists(path.join(contentPath, "notes")) && await pathExists(path.join(contentPath, "posts"))
}
