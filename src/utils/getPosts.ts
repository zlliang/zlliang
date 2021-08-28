import * as fs from "fs"
import * as path from "path"
import matter from "gray-matter"

export interface PostMetadata {
  fileName: string
  slug: string
  title: string
  markdown: string
  created: number
  updated?: number
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

      return {
        fileName,
        slug,
        title: data.title ?? "无标题",
        markdown: content,
        created: data.created?.valueOf() ?? Date.now(),
        updated: data.updated?.valueOf() ?? null,
      }
    })
    .sort((a, b) => a.created - b.created)

  return posts
}
