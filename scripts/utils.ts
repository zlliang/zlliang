import fs from "node:fs/promises"
import { format } from "date-fns"
import { parse as parseYaml, stringify as stringifyYaml } from "yaml"

export interface Frontmatter {
  no?: number
  title?: string
  created?: string
  category?: string
  post?: string
  tags?: string[]
  draft?: boolean
  [key: string]: unknown
}

export interface DateParts {
  date: string
  year: string
  month: string
  day: string
}

export function getDateParts(d: Date = new Date()): DateParts {
  return {
    date: format(d, "yyyy-MM-dd"),
    year: format(d, "yyyy"),
    month: format(d, "MM"),
    day: format(d, "dd"),
  }
}

export function parseFrontmatter(content: string): {
  frontmatter: Frontmatter
  body: string
} {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) {
    return { frontmatter: {}, body: content }
  }
  return { frontmatter: parseYaml(match[1]) as Frontmatter, body: match[2] }
}

export function serializeFrontmatter(fm: Frontmatter): string {
  return `---\n${stringifyYaml(fm)}---\n\n`
}

export async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}
