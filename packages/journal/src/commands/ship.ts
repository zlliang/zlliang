import fs from "node:fs/promises"
import path from "node:path"
import { createInterface } from "node:readline/promises"

import { JournalError } from "../utils/errors"
import { pathExists } from "../utils/files"
import { parseFrontmatter, serializeFrontmatter } from "../utils/frontmatter"
import { getDateParts } from "../utils/text"
import { prepareNote } from "./new"

import type { JournalContext } from "../utils/context"
import type { PreparedNote } from "./new"

export interface ShippedDraft {
  draftPath: string
  postPath: string
  note: PreparedNote
  movedImagesPath?: string
}

export async function shipDraft(context: JournalContext, draftArg?: string): Promise<ShippedDraft> {
  const drafts = await listDrafts(context.draftsRoot)

  if (drafts.length === 0) {
    throw new JournalError("No drafts to ship.")
  }

  const selectedDraft = await selectDraft(drafts, draftArg)
  const draftPath = path.join(context.draftsRoot, selectedDraft)
  const draftContent = await fs.readFile(draftPath, "utf8")
  const { frontmatter, body } = parseFrontmatter(draftContent)
  const title = typeof frontmatter.title === "string" && frontmatter.title.trim().length > 0
    ? frontmatter.title.trim()
    : "Untitled"

  const { date, year, month, day } = getDateParts()
  const slug = selectedDraft.replace(/\.md$/, "")
  const postDir = path.join(context.postsRoot, year, month, day)
  const postPath = path.join(postDir, selectedDraft)
  const postReference = `${year}/${month}/${day}/${slug}`
  const note = await prepareNote(context, [title], "post", { post: postReference })

  if (await pathExists(postPath)) {
    throw new JournalError(`Published post already exists: ${postPath}`)
  }

  const nextFrontmatter = {
    ...frontmatter,
    created: date,
  }
  delete nextFrontmatter.draft

  const postContent = serializeFrontmatter(nextFrontmatter) + body

  await fs.mkdir(postDir, { recursive: true })
  await fs.mkdir(path.dirname(note.filePath), { recursive: true })
  await fs.writeFile(postPath, postContent, "utf8")
  await fs.writeFile(note.filePath, note.content, "utf8")

  const movedImagesPath = await moveDraftImages(context.draftsImagesRoot, path.join(postDir, "images"))

  await fs.unlink(draftPath)

  return {
    draftPath,
    postPath,
    note,
    movedImagesPath,
  }
}

export async function listDrafts(draftsRoot: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(draftsRoot)
    return entries
      .filter((entry) => entry.endsWith(".md"))
      .sort((left, right) => left.localeCompare(right))
  } catch {
    return []
  }
}

async function selectDraft(drafts: string[], draftArg?: string): Promise<string> {
  if (draftArg) {
    const normalized = draftArg.endsWith(".md") ? draftArg : `${draftArg}.md`
    if (!drafts.includes(normalized)) {
      throw new JournalError(`Draft not found: ${draftArg}`)
    }

    return normalized
  }

  if (drafts.length === 1) {
    return drafts[0]
  }

  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new JournalError("Multiple drafts found. Pass a draft slug to `journal ship`.")
  }

  process.stdout.write("Select a draft to ship:\n\n")
  drafts.forEach((draft, index) => {
    process.stdout.write(`  ${index + 1}. ${draft}\n`)
  })
  process.stdout.write("\n")

  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  try {
    const answer = await readline.question("Enter number: ")
    const index = Number.parseInt(answer, 10) - 1

    if (index < 0 || index >= drafts.length || Number.isNaN(index)) {
      throw new JournalError("Invalid draft selection.")
    }

    return drafts[index]
  } finally {
    readline.close()
  }
}

async function moveDraftImages(sourceDir: string, targetDir: string): Promise<string | undefined> {
  let entries: string[]
  try {
    entries = await fs.readdir(sourceDir)
  } catch {
    return undefined
  }

  if (entries.length === 0) {
    return undefined
  }

  await fs.mkdir(targetDir, { recursive: true })

  for (const entry of entries) {
    await fs.rename(path.join(sourceDir, entry), path.join(targetDir, entry))
  }

  await fs.rm(sourceDir, { recursive: true, force: true })
  return targetDir
}
