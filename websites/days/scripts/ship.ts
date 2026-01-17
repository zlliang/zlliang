import fs from "node:fs/promises"
import path from "node:path"
import readline from "node:readline"
import { spawn } from "node:child_process"
import { format } from "date-fns"
import { parse as parseYaml, stringify as stringifyYaml } from "yaml"

interface Frontmatter {
  title?: string
  created?: string
  draft?: boolean
  post?: string
  [key: string]: unknown
}

const CONTENT_ROOT = path.join(process.cwd(), "content")
const DRAFTS_DIR = path.join(CONTENT_ROOT, "posts", "drafts")
const DRAFTS_IMAGES_DIR = path.join(DRAFTS_DIR, "images")
const POSTS_DIR = path.join(CONTENT_ROOT, "posts")

async function main() {
  const drafts = await listDrafts()

  if (drafts.length === 0) {
    console.log("No drafts to ship.")
    process.exit(0)
  }

  let selected: string
  if (drafts.length === 1) {
    selected = drafts[0]
  } else {
    selected = await promptSelection(drafts)
  }

  await shipDraft(selected)
}

async function listDrafts(): Promise<string[]> {
  try {
    const entries = await fs.readdir(DRAFTS_DIR)
    return entries.filter((e) => e.endsWith(".md"))
  } catch {
    return []
  }
}

async function promptSelection(drafts: string[]): Promise<string> {
  console.log("Select a draft to ship:\n")
  drafts.forEach((name, i) => {
    console.log(`  ${i + 1}. ${name}`)
  })
  console.log()

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question("Enter number: ", (answer) => {
      rl.close()
      const index = parseInt(answer, 10) - 1
      if (index < 0 || index >= drafts.length || Number.isNaN(index)) {
        console.error("Invalid selection.")
        process.exit(1)
      }
      resolve(drafts[index])
    })
  })
}

async function shipDraft(filename: string) {
  const slug = filename.replace(/\.md$/, "")
  const draftPath = path.join(DRAFTS_DIR, filename)

  const content = await fs.readFile(draftPath, "utf-8")
  const { frontmatter, body } = parseFrontmatter(content)

  const title = frontmatter.title || "无标题"

  const now = new Date()
  const date = format(now, "yyyy-MM-dd")
  const year = format(now, "yyyy")
  const month = format(now, "MM")
  const day = format(now, "dd")

  const postDir = path.join(POSTS_DIR, year, month, day)
  const postPath = path.join(postDir, filename)
  const postRef = `${year}/${month}/${day}/${slug}`

  await fs.mkdir(postDir, { recursive: true })

  const newPostFrontmatter = {
    ...frontmatter,
    created: date,
  }
  delete newPostFrontmatter.draft

  const postContent = serializeFrontmatter(newPostFrontmatter) + body
  await fs.writeFile(postPath, postContent, "utf-8")
  console.log(`Shipped post: ${postPath}`)

  const notePath = await createNote(title, "post")
  await addPostReference(notePath, postRef)

  await moveImages(postDir)

  await fs.unlink(draftPath)
  console.log(`Deleted draft: ${draftPath}`)
}

function parseFrontmatter(content: string): {
  frontmatter: Frontmatter
  body: string
} {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) {
    return { frontmatter: {}, body: content }
  }
  return { frontmatter: parseYaml(match[1]) as Frontmatter, body: match[2] }
}

function serializeFrontmatter(fm: Frontmatter): string {
  return `---\n${stringifyYaml(fm)}---\n\n`
}

async function createNote(title: string, category: string): Promise<string> {
  return new Promise((resolve) => {
    const proc = spawn("pnpm", ["run", "new", "note", "--category", category, title], {
      cwd: process.cwd(),
      stdio: ["inherit", "pipe", "inherit"],
    })

    let output = ""
    proc.stdout?.on("data", (data) => {
      output += data.toString()
    })

    proc.on("close", (code) => {
      if (code !== 0) {
        console.error("Failed to create note")
        process.exit(1)
      }

      const match = output.match(/Created note #\d+: (.+)/)
      if (!match) {
        console.error("Could not parse note path from output")
        process.exit(1)
      }

      console.log(output.trim())
      resolve(match[1].trim())
    })
  })
}

async function moveImages(postDir: string) {
  try {
    const entries = await fs.readdir(DRAFTS_IMAGES_DIR)
    if (entries.length === 0) return

    const targetImagesDir = path.join(postDir, "images")
    await fs.mkdir(targetImagesDir, { recursive: true })

    for (const entry of entries) {
      const src = path.join(DRAFTS_IMAGES_DIR, entry)
      const dest = path.join(targetImagesDir, entry)
      await fs.rename(src, dest)
    }

    await fs.rmdir(DRAFTS_IMAGES_DIR)
    console.log(`Moved images to: ${targetImagesDir}`)
  } catch {
    // No images folder or empty, skip silently
  }
}

async function addPostReference(notePath: string, postRef: string) {
  const content = await fs.readFile(notePath, "utf-8")
  const { frontmatter, body } = parseFrontmatter(content)

  const { no, title, created, ...rest } = frontmatter
  const newFrontmatter: Frontmatter = {
    no,
    ...(title && { title }),
    created,
    post: postRef,
    ...rest,
  }

  const newContent = serializeFrontmatter(newFrontmatter) + body
  await fs.writeFile(notePath, newContent, "utf-8")
}

main()
