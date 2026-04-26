import fs, { glob } from "node:fs/promises"
import path from "node:path"
import { slug as slugify } from "github-slugger"

import { resolveSiteContext } from "../utils/context"
import { handleCommand } from "../utils/command"
import { CliError } from "../utils/errors"
import { pathExists } from "../utils/files"
import { serializeFrontmatter } from "../utils/frontmatter"
import { getDateParts, normalizeTitle } from "../utils/text"

import type { CAC } from "cac"
import type { SiteContext } from "../utils/context"
import type { Frontmatter } from "../utils/frontmatter"

const BODY_PLACEHOLDER = "TODO"

export interface PreparedEntry {
  filePath: string
  title: string
  slug: string
  content: string
}

export interface PreparedNote extends PreparedEntry {
  number: number
}

interface NewCommandOptions {
  dir?: string
}

export function registerNewCommand(cli: CAC) {
  cli
    .command("new <entry> [title...]", "Create a new note or post draft")
    .example("scripts --dir websites/muse new note \"A useful article\"")
    .example("scripts new note \"A useful article\"")
    .example("scripts new post \"How I use AI agents\"")
    .action((entry: string, title: string[], options: NewCommandOptions) => {
      void handleCommand(async () => {
        const context = await resolveSiteContext(options.dir)

        if (entry === "note") {
          const note = await createNote(context, title)
          process.stdout.write(`Created note #${note.number}: ${note.filePath}\n`)
          return
        }

        if (entry === "post") {
          const post = await createPostDraft(context, title)
          process.stdout.write(`Created post draft: ${post.filePath}\n`)
          return
        }

        throw new CliError("Invalid entry type. Expected `note` or `post`.")
      })
    })
}

export async function createNote(
  context: SiteContext,
  titleParts: string[] | undefined
): Promise<PreparedNote> {
  const note = await prepareNote(context, titleParts)
  await writeEntryFile(note)
  return note
}

export async function createPostDraft(
  context: SiteContext,
  titleParts: string[] | undefined
): Promise<PreparedEntry> {
  const post = await preparePostDraft(context, titleParts)
  await writeEntryFile(post)
  return post
}

export async function prepareNote(
  context: SiteContext,
  titleParts: string[] | undefined,
  options?: { post?: string }
): Promise<PreparedNote> {
  const { date, year, month, day } = getDateParts()
  const { title, rawTitle, hasTitle } = normalizeTitle(titleParts)
  const slug = slugify(title)
  const number = await getNextNoteNumber(context.notesRoot)
  const dirPath = path.join(context.notesRoot, year, month, day)
  const filePath = path.join(dirPath, `${slug}.md`)

  if (await pathExists(filePath)) {
    throw new CliError(`File already exists: ${filePath}`)
  }

  const frontmatter: Frontmatter = {
    number,
    ...(hasTitle && { title: rawTitle }),
    created: date,
    ...(options?.post && { post: options.post }),
  }

  return {
    filePath,
    title,
    slug,
    number,
    content: serializeFrontmatter(frontmatter) + BODY_PLACEHOLDER,
  }
}

export async function preparePostDraft(
  context: SiteContext,
  titleParts: string[] | undefined
): Promise<PreparedEntry> {
  const { date } = getDateParts()
  const { title } = normalizeTitle(titleParts)
  const slug = slugify(title)
  const filePath = path.join(context.draftsRoot, `${slug}.md`)

  if (await pathExists(filePath)) {
    throw new CliError(`File already exists: ${filePath}`)
  }

  const frontmatter: Frontmatter = {
    title,
    created: date,
    draft: true,
  }

  return {
    filePath,
    title,
    slug,
    content: serializeFrontmatter(frontmatter) + BODY_PLACEHOLDER,
  }
}

async function writeEntryFile(entry: PreparedEntry) {
  await fs.mkdir(path.dirname(entry.filePath), { recursive: true })
  await fs.writeFile(entry.filePath, entry.content, "utf8")
}

async function getNextNoteNumber(notesRoot: string): Promise<number> {
  let maxNumber = 0

  for await (const filePath of glob(path.join(notesRoot, "**/*.md"))) {
    let content: string
    try {
      content = await fs.readFile(filePath, "utf8")
    } catch {
      continue
    }

    const match = content.match(/^---\s*\n([\s\S]*?)\n---/)
    if (!match) continue

    const numberMatch = match[1].match(/^\s*number:\s*([0-9]+)/m)
    if (!numberMatch) continue

    const value = Number(numberMatch[1])
    if (!Number.isNaN(value) && value > maxNumber) {
      maxNumber = value
    }
  }

  return maxNumber + 1
}
