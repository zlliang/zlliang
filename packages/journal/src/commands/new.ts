import fs, { glob } from "node:fs/promises"
import path from "node:path"

import { resolveJournalContext } from "../utils/context"
import { handleCommand } from "../utils/command"
import { JournalError } from "../utils/errors"
import { pathExists } from "../utils/files"
import { serializeFrontmatter } from "../utils/frontmatter"
import { isNoteType, noteTypeSlugs } from "../utils/note-types"
import { getDateParts, normalizeTitle, slugify } from "../utils/text"

import type { CAC } from "cac"
import type { JournalContext } from "../utils/context"
import type { Frontmatter } from "../utils/frontmatter"
import type { NoteType } from "../utils/note-types"

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
  type: string
}

export function registerNewCommand(cli: CAC) {
  cli
    .command("new <entry> [title...]", "Create a new note or post draft")
    .option("--type <type>", `Note type when entry is \`note\` (${noteTypeSlugs.join(", ")})`, {
      default: "regular",
    })
    .example("journal --dir websites/muse new note --type link \"A useful article\"")
    .example("journal new note --type link \"A useful article\"")
    .example("journal new post \"How I use AI agents\"")
    .action((entry: string, title: string[], options: NewCommandOptions) => {
      void handleCommand(async () => {
        const context = await resolveJournalContext(options.dir)

        if (entry === "note") {
          const noteType = validateNoteType(options.type)
          const note = await createNote(context, title, noteType)
          process.stdout.write(`Created note #${note.number}: ${note.filePath}\n`)
          return
        }

        if (entry === "post") {
          validatePostOptions(options)
          const post = await createPostDraft(context, title)
          process.stdout.write(`Created post draft: ${post.filePath}\n`)
          return
        }

        throw new JournalError("Invalid entry type. Expected `note` or `post`.")
      })
    })
}

export async function createNote(
  context: JournalContext,
  titleParts: string[] | undefined,
  noteType: NoteType
): Promise<PreparedNote> {
  const note = await prepareNote(context, titleParts, noteType)
  await writeEntryFile(note)
  return note
}

export async function createPostDraft(
  context: JournalContext,
  titleParts: string[] | undefined
): Promise<PreparedEntry> {
  const post = await preparePostDraft(context, titleParts)
  await writeEntryFile(post)
  return post
}

export async function prepareNote(
  context: JournalContext,
  titleParts: string[] | undefined,
  noteType: NoteType,
  options?: { post?: string }
): Promise<PreparedNote> {
  if (!noteTypeSlugs.includes(noteType)) {
    throw new JournalError(`Invalid note type: ${noteType}. Expected one of: ${noteTypeSlugs.join(", ")}`)
  }

  const { date, year, month, day } = getDateParts()
  const { title, rawTitle, hasTitle } = normalizeTitle(titleParts)
  const slug = slugify(title)
  const number = await getNextNoteNumber(context.notesRoot)
  const dirPath = path.join(context.notesRoot, year, month, day)
  const filePath = path.join(dirPath, `${slug}.md`)

  if (await pathExists(filePath)) {
    throw new JournalError(`File already exists: ${filePath}`)
  }

  const frontmatter: Frontmatter = {
    no: number,
    ...(hasTitle && { title: rawTitle }),
    created: date,
    type: noteType,
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
  context: JournalContext,
  titleParts: string[] | undefined
): Promise<PreparedEntry> {
  const { date } = getDateParts()
  const { title } = normalizeTitle(titleParts)
  const slug = slugify(title)
  const filePath = path.join(context.draftsRoot, `${slug}.md`)

  if (await pathExists(filePath)) {
    throw new JournalError(`File already exists: ${filePath}`)
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

    const numberMatch = match[1].match(/^\s*no:\s*([0-9]+)/m)
    if (!numberMatch) continue

    const value = Number(numberMatch[1])
    if (!Number.isNaN(value) && value > maxNumber) {
      maxNumber = value
    }
  }

  return maxNumber + 1
}

function validateNoteType(value: string): NoteType {
  if (!isNoteType(value)) {
    throw new JournalError(`Invalid note type: ${value}. Expected one of: ${noteTypeSlugs.join(", ")}`)
  }

  return value
}

function validatePostOptions(options: NewCommandOptions) {
  if (options.type !== "regular") {
    throw new JournalError("The --type option can only be used with `journal new note`.")
  }
}
