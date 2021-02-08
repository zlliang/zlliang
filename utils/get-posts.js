import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function getPosts() {
  const cwd = process.cwd()
  const postDirectory = path.join(cwd, 'pages', 'post')
  if (!fs.existsSync(postDirectory)) return []

  let posts = fs.readdirSync(postDirectory).map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postDirectory, fileName)

    const content = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(content)
    return {
      name: slug,
      title: data.title,
      created: data.created.valueOf(),
      updated: data.updated ? data.updated.valueOf() : null,
      inChinese: data.inChinese || false
    }
  })
  posts.sort((a, b) => a.created - b.created)

  return posts
}
