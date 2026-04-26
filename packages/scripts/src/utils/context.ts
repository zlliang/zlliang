import path from "node:path"

import { CliError } from "./errors"
import { ensurePathExists, pathExists } from "./files"

export interface SiteContext {
  siteRoot: string
  contentRoot: string
  notesRoot: string
  postsRoot: string
  draftsRoot: string
  draftsImagesRoot: string
}

export async function resolveSiteContext(startPath = process.cwd()): Promise<SiteContext> {
  const resolvedPath = path.resolve(startPath)
  await ensurePathExists(resolvedPath, startPath)

  const siteRoot = await findSiteRoot(resolvedPath)
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

async function findSiteRoot(startPath: string): Promise<string> {
  let current = startPath

  while (true) {
    if (await hasSiteStructure(current)) {
      return current
    }

    const parent = path.dirname(current)
    if (parent === current) {
      break
    }

    current = parent
  }

  throw new CliError(`Could not find a site content root from ${startPath}. Pass a path that contains \`content/notes\` and \`content/posts\`, or run the command from that directory.`)
}

async function hasSiteStructure(siteRoot: string): Promise<boolean> {
  const contentRoot = path.join(siteRoot, "content")

  return await pathExists(path.join(contentRoot, "notes"))
    && await pathExists(path.join(contentRoot, "posts"))
}
