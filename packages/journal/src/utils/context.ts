import path from "node:path"

import { JournalError } from "./errors"
import { pathExists } from "./files"

export interface JournalContext {
  siteRoot: string
  contentRoot: string
  notesRoot: string
  postsRoot: string
  draftsRoot: string
  draftsImagesRoot: string
}

export async function resolveJournalContext(cwd = process.cwd()): Promise<JournalContext> {
  const siteRoot = await findJournalRoot(cwd)
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

async function findJournalRoot(start = process.cwd()): Promise<string> {
  let current = path.resolve(start)

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

  throw new JournalError("Could not find a journal content root from the current directory. Run the command from a website directory that contains `content/notes` and `content/posts`.")
}

async function hasJournalStructure(siteRoot: string): Promise<boolean> {
  const contentRoot = path.join(siteRoot, "content")

  return await pathExists(path.join(contentRoot, "notes"))
    && await pathExists(path.join(contentRoot, "posts"))
}
