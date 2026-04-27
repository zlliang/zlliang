import fs, { glob } from "node:fs/promises"
import path from "node:path"
import { slug as slugify } from "github-slugger"

import { handleCommand } from "../utils/command"
import { resolveStructure } from "../utils/structure"
import { pathExists, writeFile } from "../utils/files"
import { parse, stringify, getDateParts, getTitleParts } from "../utils/content"
import { CliError } from "../utils/errors"

import type { CAC } from "cac"
import type { Structure } from "../utils/structure"
import type { Frontmatter, TitleParts } from "../utils/content"

const BODY_PLACEHOLDER = "TODO"

interface NewCommandOptions {
  dir?: string
}

export function registerNewCommand(cli: CAC) {
  cli
    .command("new <entry> [...title]", "Create a new note or post draft")
    .example("toolkit new note A basic note")
    .example("toolkit new note \"A basic note\"")
    .example("toolkit new post \"A useful post\"")
    .example("toolkit --dir websites/muse new post \"A useful post\"")
    .action((entry: string, title: string | string[] | undefined, options: NewCommandOptions) => handleCommand(async () => {
      const structure = await resolveStructure(options.dir)
      const titleParts = getTitleParts(title)

      if (entry === "note") {
        const note = await createNote(structure, titleParts)
        process.stdout.write(`Created note #${note.number}: ${note.filePath}\n`)
        return
      }

      if (entry === "post") {
        const post = await createPostDraft(structure, titleParts)
        process.stdout.write(`Created post draft: ${post.filePath}\n`)
        return
      }

      throw new CliError("Invalid entry type. Expected `note` or `post`.")
    }))
}

async function createNote(structure: Structure, titleParts: TitleParts) {
  const note = await prepareNote(structure, titleParts)
  await writeFile(note.filePath, note.content)
  return note
}

async function createPostDraft(structure: Structure, titleParts: TitleParts) {
  const post = await preparePostDraft(structure, titleParts)
  await writeFile(post.filePath, post.content)
  return post
}

export async function prepareNote(structure: Structure, titleParts: TitleParts, options?: { post?: string }) {
  const { date, year, month, day } = getDateParts()
  const slug = slugify(titleParts.title)
  const number = await getNextNoteNumber(structure.notesPath)
  const datePath = path.join(structure.notesPath, year, month, day)
  const filePath = path.join(datePath, `${slug}.md`)

  if (await pathExists(filePath)) {
    throw new CliError(`File already exists: ${filePath}`)
  }

  const frontmatter: Frontmatter = {
    number,
    ...(titleParts.hasTitle && { title: titleParts.rawTitle }),
    created: date,
    ...(options?.post && { post: options.post }),
  }

  return {
    filePath,
    number,
    title: titleParts.title,
    slug,
    content: stringify(frontmatter, BODY_PLACEHOLDER),
  }
}

async function getNextNoteNumber(notesPath: string): Promise<number> {
  let maxNumber = 0

  for await (const filePath of glob(path.join(notesPath, "**/*.md"))) {
    let fileContent: string
    try {
      fileContent = await fs.readFile(filePath, "utf8")
    } catch {
      continue
    }

    const { frontmatter } = parse(fileContent)
    const value = frontmatter.number

    if (typeof value === "number" && !Number.isNaN(value) && value > maxNumber) {
      maxNumber = value
    }
  }

  return maxNumber + 1
}

async function preparePostDraft(structure: Structure, titleParts: TitleParts) {
  const { date } = getDateParts()
  const slug = slugify(titleParts.title)
  const filePath = path.join(structure.draftsPath, `${slug}.md`)

  if (await pathExists(filePath)) {
    throw new CliError(`File already exists: ${filePath}`)
  }

  const frontmatter: Frontmatter = {
    title: titleParts.title,
    created: date,
    draft: true,
  }

  return {
    filePath,
    title: titleParts.title,
    slug,
    content: stringify(frontmatter, BODY_PLACEHOLDER),
  }
}
