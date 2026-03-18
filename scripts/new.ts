import fs, { glob } from "node:fs/promises"
import path from "node:path"

import { getSiteConfig, parseContentSiteArg } from "./config"
import { fileExists, getDateParts, serializeFrontmatter } from "./utils"

import type { Frontmatter } from "./utils"

type EntryType = "note" | "post"

type NoteType = "regular" | "link" | "collection" | "quote" | "til" | "post"

async function main() {
  const args = process.argv.slice(2)
  const { site, rest } = parseContentSiteArg(args, "Usage: pnpm new <tech|days> <note|post> [options]")
  const config = getSiteConfig(site)

  const [typeArg, ...remaining] = rest

  if (typeArg !== "note" && typeArg !== "post") {
    console.error("Usage: pnpm new <tech|days> <note|post> [--type <type>] [title]")
    process.exit(1)
  }

  const entryType = typeArg as EntryType

  let noteType: NoteType = "regular"
  const titleParts: string[] = []

  for (let i = 0; i < remaining.length; i++) {
    if (remaining[i] === "--type" && remaining[i + 1]) {
      const t = remaining[i + 1]
      if (t === "regular" || t === "link" || t === "collection" || t === "quote" || t === "til" || t === "post") {
        noteType = t
        i++
      } else {
        console.error(`Invalid note type: ${t}. Must be one of: regular, link, collection, quote, til, post`)
        process.exit(1)
      }
    } else {
      titleParts.push(remaining[i])
    }
  }

  const rawTitle = titleParts.join(" ").trim()
  const hasTitle = rawTitle.length > 0
  const title = hasTitle ? rawTitle : "Untitled"
  const slug = toSlug(title)

  const { date, year, month, day } = getDateParts()

  const collectionPath = path.join(config.contentRoot, entryType === "note" ? "notes" : "posts")
  const dirPath = entryType === "note"
    ? path.join(collectionPath, year, month, day)
    : path.join(collectionPath, "drafts")
  const filePath = path.join(dirPath, `${slug}.md`)

  await fs.mkdir(dirPath, { recursive: true })

  if (await fileExists(filePath)) {
    console.error(`File already exists: ${filePath}`)
    process.exit(1)
  }

  let frontmatter: Frontmatter

  if (entryType === "note") {
    const nextNo = await getNextNo(collectionPath)
    frontmatter = {
      no: nextNo,
      ...(hasTitle && { title }),
      created: date,
      type: noteType,
    }
    console.log(`Created note #${nextNo}: ${filePath}`)
  } else {
    frontmatter = {
      title,
      created: date,
      draft: true,
    }
    console.log(`Created post: ${filePath}`)
  }

  const content = serializeFrontmatter(frontmatter) + "TODO"
  await fs.writeFile(filePath, content, "utf8")
}

function toSlug(input: string) {
  const slug = input
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

  return slug || "untitled"
}

async function getNextNo(notesRoot: string): Promise<number> {
  let maxNo = 0
  const pattern = path.join(notesRoot, "**/*.md")

  for await (const fullPath of glob(pattern)) {
    let text: string
    try {
      text = await fs.readFile(fullPath, "utf-8")
    } catch {
      continue
    }

    const match = text.match(/^---\s*\n([\s\S]*?)\n---/)
    if (!match) continue

    const frontmatter = match[1]
    const noMatch = frontmatter.match(/^\s*no:\s*([0-9]+)/m)
    if (!noMatch) continue

    const value = Number(noMatch[1])
    if (!Number.isNaN(value) && value > maxNo) {
      maxNo = value
    }
  }

  return maxNo + 1
}

main()
