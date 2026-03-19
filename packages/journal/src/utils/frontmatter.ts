import { parse as parseYaml, stringify as stringifyYaml } from "yaml"

export interface Frontmatter {
  no?: number
  title?: string
  created?: string
  type?: string
  post?: string
  draft?: boolean
  pinned?: boolean
  [key: string]: unknown
}

export function parseFrontmatter(content: string): {
  frontmatter: Frontmatter
  body: string
} {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) {
    return { frontmatter: {}, body: content }
  }

  return {
    frontmatter: parseYaml(match[1]) as Frontmatter,
    body: match[2],
  }
}

export function serializeFrontmatter(frontmatter: Frontmatter): string {
  return `---\n${stringifyYaml(frontmatter)}---\n\n`
}
