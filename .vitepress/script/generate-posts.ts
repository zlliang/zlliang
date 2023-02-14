import { existsSync, mkdirSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"

import matter from "gray-matter"
import glob from "glob"
import { format } from "date-fns"

export interface FrontMatter {
  title: string
  path?: string
  summary?: string
  created?: Date
  updated?: Date
  hidden?: boolean
  featured?: boolean
}

export interface Post {
  title: string
  path: string
  displayPath?: string
  summary?: string
  created: string
  updated?: string
  hidden?: boolean
  featured?: boolean
  topicIndex?: boolean
}

const root = resolve(fileURLToPath(import.meta.url), "../../..")
const postDir = resolve(root, "./src")
const dataDir = resolve(root, "./.vitepress/theme/data")

if (!existsSync(dataDir)) mkdirSync(dataDir)

const allPosts = glob
  .sync(`${postDir}/**/*.md`)
  .map((item) => {
    const frontMatter = matter.read(item).data as FrontMatter
    const path = item.slice(postDir.length)

    const result: Post = {
      ...frontMatter,
      path,
      displayPath: frontMatter.path,
      created: format(frontMatter.created || new Date(), "yyyy-MM-dd"),
      updated: frontMatter.updated
        ? format(frontMatter.updated, "yyyy-MM-dd")
        : undefined,
      topicIndex: path.includes("/topics/") && path.endsWith("index.md"),
    }

    return result
  })
  .sort((a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf())

writeFileSync(
  resolve(dataDir, "./allPosts.json"),
  JSON.stringify(allPosts),
  "utf-8"
)

const historyPosts = allPosts.filter((item) => !item.hidden)

writeFileSync(
  resolve(dataDir, "./historyPosts.json"),
  JSON.stringify(historyPosts),
  "utf-8"
)

const featuredPosts = allPosts.filter((item) => item.featured)

writeFileSync(
  resolve(dataDir, "./featuredPosts.json"),
  JSON.stringify(featuredPosts),
  "utf-8"
)
