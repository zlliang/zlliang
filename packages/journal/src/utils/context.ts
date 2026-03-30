import path from "node:path"

import { JournalError } from "./errors"
import { ensurePathExists, pathExists } from "./files"

export interface JournalContext {
  siteRoot: string
  contentRoot: string
  notesRoot: string
  postsRoot: string
  draftsRoot: string
  draftsImagesRoot: string
}

export async function resolveJournalContext(startPath = process.cwd()): Promise<JournalContext> {
  const resolvedPath = path.resolve(startPath)
  await ensurePathExists(resolvedPath, startPath)

  const siteRoot = await findJournalRoot(resolvedPath)
  const contentRoot = path.join(siteRoot, "content")
  const notesRoot = path.join(contentRoot, "notes")
  const postsRoot = path.join(contentRoot, "posts")
  const draftsRoot = path.join(postsRoot, "drafts")

  return {
    siteRoot,
    contentRoot,
    notesRoot,
    postsRoot,
    draftsRoot,
    draftsImagesRoot: path.join(draftsRoot, "images"),
  }
}

async function findJournalRoot(startPath: string): Promise<string> {
  let current = startPath

  while (true) {
    if (await hasJournalStructure(current)) {
      return current
    }

    const parent = path.dirname(current)
    if (parent === current) {
      break
    }

    current = parent
  }

  throw new JournalError(`Could not find a journal content root from ${startPath}. Pass a path that contains \`content/notes\` and \`content/posts\`, or run the command from that directory.`)
}

async function hasJournalStructure(siteRoot: string): Promise<boolean> {
  const contentRoot = path.join(siteRoot, "content")

  return await pathExists(path.join(contentRoot, "notes"))
    && await pathExists(path.join(contentRoot, "posts"))
}
