import fs from "node:fs/promises"
import path from "node:path"
import readline from "node:readline"
import { spawn } from "node:child_process"

import { getSiteConfig, parseContentSiteArg } from "./config"
import { getDateParts, parseFrontmatter, serializeFrontmatter } from "./utils"

import type { ContentSite } from "./config"
import type { Frontmatter } from "./utils"

async function main() {
  const args = process.argv.slice(2)
  const { site } = parseContentSiteArg(args, "Usage: pnpm ship <tech|days>")
  const config = getSiteConfig(site)

  const draftsDir = path.join(config.contentRoot, "posts", "drafts")
  const draftsImagesDir = path.join(draftsDir, "images")
  const postsDir = path.join(config.contentRoot, "posts")

  const drafts = await listDrafts(draftsDir)

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

  await shipDraft(selected, site, draftsDir, draftsImagesDir, postsDir)
}

async function listDrafts(draftsDir: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(draftsDir)
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

async function shipDraft(
  filename: string,
  site: ContentSite,
  draftsDir: string,
  draftsImagesDir: string,
  postsDir: string
) {
  const slug = filename.replace(/\.md$/, "")
  const draftPath = path.join(draftsDir, filename)

  const content = await fs.readFile(draftPath, "utf-8")
  const { frontmatter, body } = parseFrontmatter(content)

  const title = frontmatter.title || "Untitled"

  const { date, year, month, day } = getDateParts()

  const postDir = path.join(postsDir, year, month, day)
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

  const notePath = await createNote(title, "post", site)
  await addPostReference(notePath, postRef)

  await moveImages(postDir, draftsImagesDir)

  await fs.unlink(draftPath)
  console.log(`Deleted draft: ${draftPath}`)
}

async function createNote(title: string, category: string, site: ContentSite): Promise<string> {
  return new Promise((resolve) => {
    const proc = spawn("pnpm", ["new", site, "note", "--category", category, title], {
      cwd: path.join(import.meta.dirname, ".."),
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

async function moveImages(postDir: string, draftsImagesDir: string) {
  try {
    const entries = await fs.readdir(draftsImagesDir)
    if (entries.length === 0) return

    const targetImagesDir = path.join(postDir, "images")
    await fs.mkdir(targetImagesDir, { recursive: true })

    for (const entry of entries) {
      const src = path.join(draftsImagesDir, entry)
      const dest = path.join(targetImagesDir, entry)
      await fs.rename(src, dest)
    }

    await fs.rmdir(draftsImagesDir)
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
