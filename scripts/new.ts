import fs from "node:fs/promises"
import path from "node:path"
import { format } from "date-fns"
import slugify from "slugify"

type EntryType = "note" | "post"

const BLOG_ROOT = path.join(process.cwd(), "src", "content", "blog")

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
  const title = hasTitle ? rawTitle : "Untitled"

  const now = new Date()
  const year = format(now, "yyyy")
  const month = format(now, "MM")

  const slug = slugify(title, { lower: true })
  const dirPath = path.join(BLOG_ROOT, year, month)
  const filePath = path.join(dirPath, `${slug}.md`)

  await fs.mkdir(dirPath, { recursive: true })

  if (await fileExists(filePath)) {
    console.error(`File already exists: ${filePath}`)
    process.exit(1)
  }

  const nextNo = await getNextNo(BLOG_ROOT)
  const dateStr = format(now, "yyyy-MM-dd")

  const frontmatterLines: string[] = [
    "---",
    `no: ${nextNo}`,
    `type: ${type}`,
    `title: ${title}`,
    ...(type === "post" ? ["description: TODO"] : []),
    `created: ${dateStr}`,
    "tags: []",
    "draft: true",
    "---",
    "",
    "TODO",
  ]

  await fs.writeFile(filePath, frontmatterLines.join("\n"), "utf8")

  console.log(`Created ${type} #${nextNo}: ${filePath}`)
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

async function getNextNo(blogRoot: string): Promise<number> {
  let maxNo = 0
  const glob = new Bun.Glob("**/*.md")

  for await (const relPath of glob.scan(blogRoot)) {
    const fullPath = path.join(blogRoot, relPath)
    let text: string
    try {
      text = await fs.readFile(fullPath, "utf8")
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
