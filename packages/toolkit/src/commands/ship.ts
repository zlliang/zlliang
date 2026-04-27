import fs from "node:fs/promises"
import path from "node:path"

import { handleCommand } from "../utils/command"
import { resolveStructure } from "../utils/structure"
import { pathExists, removePath, writeFile } from "../utils/files"
import { parse, stringify, getDateParts, getTitleParts } from "../utils/content"
import { prepareNote } from "./new"
import { CliError } from "../utils/errors"

import type { CAC } from "cac"
import type { Structure } from "../utils/structure"

interface ShipCommandOptions {
  dir?: string
}

export function registerShipCommand(cli: CAC) {
  cli
    .command("ship [draft]", "Publish a post draft and create the associated note")
    .example("toolkit ship")
    .example("toolkit ship how-i-use-ai-agents")
    .example("toolkit --dir websites/mesh ship")
    .action((draft: string | undefined, options: ShipCommandOptions) => handleCommand(async () => {
      const structure = await resolveStructure(options.dir)
      const shipped = await shipDraft(structure, draft)

      process.stdout.write(`Shipped post: ${shipped.postPath}\n`)
      process.stdout.write(`Created note #${shipped.note.number}: ${shipped.note.filePath}\n`)
      if (shipped.movedImagesPath) {
        process.stdout.write(`Moved images to: ${shipped.movedImagesPath}\n`)
      }
      process.stdout.write(`Deleted draft: ${shipped.draftPath}\n`)
    }))
}

async function shipDraft(structure: Structure, draftArg?: string) {
  const draft = await resolveDraft(structure.draftsPath, draftArg)
  const draftPath = path.join(structure.draftsPath, draft)
  const draftContent = await fs.readFile(draftPath, "utf8")

  const { frontmatter: draftFrontmatter, body } = parse(draftContent)
  const titleParts = getTitleParts(draftFrontmatter.title)

  const { date, year, month, day } = getDateParts()
  const slug = draft.replace(/\.md$/, "") // Strip the Markdown extension from the draft filename.
  const datePath = path.join(structure.postsPath, year, month, day)
  const postPath = path.join(datePath, draft)

  if (await pathExists(postPath)) {
    throw new CliError(`Published post already exists: ${postPath}`)
  }

  const frontmatter = { ...draftFrontmatter, created: date }
  delete frontmatter.draft

  // Prepare the companion note up front so collisions surface before any files are written.
  const note = await prepareNote(structure, titleParts, { post: `${year}/${month}/${day}/${slug}` })
  await writeFile(note.filePath, note.content)

  const postContent = stringify(frontmatter, body)
  await writeFile(postPath, postContent)

  const movedImagesPath = await moveDraftImages(body, structure.draftsImagesPath, path.join(datePath, "images"))

  await removePath(draftPath)
  await removePath(structure.draftsPath)

  return {
    draftPath,
    postPath,
    note,
    ...(movedImagesPath && { movedImagesPath }),
  }
}

async function resolveDraft(draftsPath: string, draftArg?: string): Promise<string> {
  let drafts: string[]
  try {
    const entries = await fs.readdir(draftsPath)
    drafts = entries
      .filter((entry) => entry.endsWith(".md"))
      .sort((left, right) => left.localeCompare(right))
  } catch {
    drafts = []
  }

  if (drafts.length === 0) {
    throw new CliError("No drafts to ship.")
  }

  if (draftArg) {
    const normalized = draftArg.endsWith(".md") ? draftArg : `${draftArg}.md`
    if (!drafts.includes(normalized)) {
      throw new CliError(`Draft not found: ${draftArg}`)
    }

    return normalized
  }

  if (drafts.length === 1) {
    const draft = drafts[0]
    if (draft === undefined) {
      throw new CliError("No drafts to ship.")
    }

    return draft
  }

  throw new CliError("Multiple drafts found. Pass a draft slug to `toolkit ship`.")
}

async function moveDraftImages(body: string, sourceDir: string, targetDir: string): Promise<string | undefined> {
  const imagePaths = getReferencedDraftImagePaths(body)
  if (imagePaths.length === 0) {
    return undefined
  }

  for (const imagePath of imagePaths) {
    const sourcePath = path.join(sourceDir, imagePath)
    const targetPath = path.join(targetDir, imagePath)
    if (!await pathExists(sourcePath)) {
      throw new CliError(`Referenced draft image not found: ${sourcePath}`)
    }

    await fs.mkdir(path.dirname(targetPath), { recursive: true })
    await fs.rename(sourcePath, targetPath)
    await removePath(path.dirname(sourcePath))
  }

  await removePath(sourceDir)
  return targetDir
}

function getReferencedDraftImagePaths(body: string) {
  const imagePaths = new Set<string>()
  const imageRegex = /!\[[^\]]*]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g // Match Markdown image URLs.

  for (const match of body.matchAll(imageRegex)) {
    const rawPath = match[1]
    if (rawPath === undefined) continue

    const imagePath = normalizeDraftImagePath(rawPath)
    if (imagePath) {
      imagePaths.add(imagePath)
    }
  }

  return [...imagePaths].sort((left, right) => left.localeCompare(right))
}

function normalizeDraftImagePath(rawPath: string) {
  const withoutWrapper = rawPath.replace(/^<(.+)>$/, "$1") // Remove optional angle brackets around Markdown URLs.
  const withoutHash = withoutWrapper.split("#", 1)[0] ?? ""
  const withoutQuery = withoutHash.split("?", 1)[0] ?? ""

  let decodedPath: string
  try {
    decodedPath = decodeURIComponent(withoutQuery)
  } catch {
    decodedPath = withoutQuery
  }

  const normalizedPath = path.posix.normalize(decodedPath)
  if (normalizedPath === "images" || normalizedPath.startsWith("images/")) {
    const imagePath = normalizedPath.replace(/^images\/?/, "") // Remove the draft images directory prefix.
    return imagePath.length > 0 ? imagePath : undefined
  }

  if (normalizedPath === "images" || normalizedPath.startsWith("./images/")) {
    const imagePath = normalizedPath.replace(/^\.\/images\/?/, "") // Remove the relative draft images directory prefix.
    return imagePath.length > 0 ? imagePath : undefined
  }

  return undefined
}
