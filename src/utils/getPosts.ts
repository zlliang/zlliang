import * as fs from "fs"
import * as path from "path"
import matter from "gray-matter"

import { renderMarkdown } from "@/utils"

export interface PostMetadata {
  fileName: string
  slug: string
  title: string
  markdown: string
  created: number
  updated: number | null
  abstract: string | null
  transpiledTitle: string
  transpiledAbstract: string | null
  hidden: boolean
}

export function getPosts(): PostMetadata[] {
  const cwd = process.cwd()
  const postsDir = path.join(cwd, "posts")
  if (!fs.existsSync(postsDir)) return []

  const posts: PostMetadata[] = fs
    .readdirSync(postsDir)
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "")
      const fullPath = path.join(postsDir, fileName)

      const source = fs.readFileSync(fullPath, "utf-8")
      const { data, content } = matter(source)

      const transpiledTitle = renderMarkdown(data.title ?? "无标题")
      const transpiledAbstract = data.abstract
        ? renderMarkdown(data.abstract)
        : null

      return {
        fileName,
        slug,
        title: data.title ?? "无标题",
        markdown: content,
        created: data.created?.valueOf() ?? Date.now(),
        updated: data.updated?.valueOf() ?? null,
        abstract: data.abstract ?? null,
        transpiledTitle,
        transpiledAbstract,
        hidden: data.hidden ?? false,
      }
    })
    .filter((item) => !item.hidden)
    .sort((a, b) => a.created - b.created)

  return posts
}
