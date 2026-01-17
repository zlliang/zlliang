import fs, { glob } from "node:fs/promises"
import path from "node:path"
import { format } from "date-fns"
import slugify from "slugify"
import capitalize from "title"
import { stringify as stringifyYaml } from "yaml"

type EntryType = "note" | "post"

type NoteCategory = "regular" | "link" | "quote" | "til" | "post"

interface Frontmatter {
  no?: number
  title?: string
  created?: string
  category?: NoteCategory
  tags?: string[]
  draft?: boolean
  [key: string]: unknown
}

const CONTENT_ROOT = path.join(process.cwd(), "content")

async function main() {
  const args = process.argv.slice(2)
  const [typeArg, ...rest] = args

  if (typeArg !== "note" && typeArg !== "post") {
    console.error("Usage: pnpm run new <note|post> [--category <category>] [title]")
    process.exit(1)
  }

  const type = typeArg as EntryType

  let category: NoteCategory = "regular"
  const titleParts: string[] = []

  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === "--category" && rest[i + 1]) {
      const c = rest[i + 1]
      if (c === "regular" || c === "link" || c === "quote" || c === "til" || c === "post") {
        category = c
        i++
      } else {
        console.error(`Invalid category: ${c}. Must be one of: regular, link, quote, til, post`)
        process.exit(1)
      }
    } else {
      titleParts.push(rest[i])
    }
  }
  
  const rawTitle = titleParts.join(" ").trim()
  const hasTitle = rawTitle.length > 0
  const title = hasTitle ? rawTitle : "Untitled"
  const slug = slugify(title, { lower: true })

  const now = new Date()
  const date = format(now, "yyyy-MM-dd")
  const year = format(now, "yyyy")
  const month = format(now, "MM")
  const day = format(now, "dd")
  
  const collectionPath = path.join(CONTENT_ROOT, type === "note" ? "notes" : "posts")
  const dirPath = type === "note"
    ? path.join(collectionPath, year, month, day)
    : path.join(collectionPath, "drafts")
  const filePath = path.join(dirPath, `${slug}.md`)

  await fs.mkdir(dirPath, { recursive: true })

  if (await fileExists(filePath)) {
    console.error(`File already exists: ${filePath}`)
    process.exit(1)
  }

  let frontmatter: Frontmatter

  if (type === "note") {
    const nextNo = await getNextNo(collectionPath)
    frontmatter = {
      no: nextNo,
      ...(hasTitle && { title }),
      created: date,
      category,
      tags: [],
      draft: true,
    }
    console.log(`Created note #${nextNo}: ${filePath}`)
  } else {
    frontmatter = {
      title: capitalize(title),
      created: date,
      draft: true,
    }
    console.log(`Created post: ${filePath}`)
  }

  const content = serializeFrontmatter(frontmatter) + "TODO"
  await fs.writeFile(filePath, content, "utf8")
}

function serializeFrontmatter(fm: Frontmatter): string {
  return `---\n${stringifyYaml(fm)}---\n\n`
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
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
