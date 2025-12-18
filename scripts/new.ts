import fs from "node:fs/promises"
import path from "node:path"
import { format } from "date-fns"
import slugify from "slugify"
import capitalize from "title"

type EntryType = "note" | "post"

const CONTENT_ROOT = path.join(process.cwd(), "src", "content")

async function main() {
  const args = process.argv.slice(2)
  const [typeArg, ...titleParts] = args

  if (typeArg !== "note" && typeArg !== "post") {
    console.error("Usage: bun run new <note|post> [title]")
    process.exit(1)
  }

  const type = typeArg as EntryType
  
  const rawTitle = titleParts.join(" ").trim()
  const hasTitle = rawTitle.length > 0
  const title = hasTitle ? capitalize(rawTitle) : "Untitled"
  const slug = slugify(title, { lower: true })

  const now = new Date()
  const date = format(now, "yyyy-MM-dd")
  const year = format(now, "yyyy")
  const month = format(now, "MM")
  const day = format(now, "dd")
  
  const collectionPath = path.join(CONTENT_ROOT, type === "note" ? "notes" : "posts")
  const dirPath = path.join(collectionPath, year, month, day)
  const filePath = path.join(dirPath, `${slug}.md`)

  await fs.mkdir(dirPath, { recursive: true })

  if (await fileExists(filePath)) {
    console.error(`File already exists: ${filePath}`)
    process.exit(1)
  }

  let frontmatterLines: string[] = []

  if (type === "note") {
    const nextNo = await getNextNo(collectionPath)
    frontmatterLines = [
      `---`,
      `no: ${nextNo}`,
      ...(hasTitle ? [`title: ${JSON.stringify(title)}`] : []),
      `created: ${date}`,
      "tags: []",
      "draft: true",
      "---",
      "",
      "TODO",
    ]
    console.log(`Created note #${nextNo}: ${filePath}`)
  } else {
    frontmatterLines = [
      "---",
      `title: ${JSON.stringify(title)}`,
      `created: ${date}`,
      "draft: true",
      "---",
      "",
      "TODO",
    ]
    console.log(`Created post: ${filePath}`)
  }

  await fs.writeFile(filePath, frontmatterLines.join("\n"), "utf8")
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
  const glob = new Bun.Glob("**/*.md")

  for await (const relPath of glob.scan(notesRoot)) {
    const fullPath = path.join(notesRoot, relPath)

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

await main()
