import yaml from "yaml"

interface NoteFrontmatter {
  number?: number
  title?: string
  created: string
  post?: string
  draft?: boolean
}

interface PostFrontmatter {
  number?: never
  title?: string
  created?: string
  series?: string
  pinned?: boolean
  draft?: boolean
}

export type Frontmatter = NoteFrontmatter | PostFrontmatter

export function parse(content: string): { frontmatter: Frontmatter, body: string } {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/) // Match YAML frontmatter and the remaining body.
  if (!match) {
    return { frontmatter: {}, body: content }
  }

  const [, raw, body = ""] = match

  if (raw === undefined) {
    return { frontmatter: {}, body: content }
  }

  return {
    frontmatter: yaml.parse(raw) as Frontmatter,
    body,
  }
}

export function stringify(frontmatter: Frontmatter, body: string): string {
  return `---\n${yaml.stringify(frontmatter)}---\n\n${body}`
}

interface DateParts {
  date: string
  year: string
  month: string
  day: string
}

export function getDateParts(date = new Date()): DateParts {
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return {
    date: `${year}-${month}-${day}`,
    year,
    month,
    day,
  }
}

export interface TitleParts {
  hasTitle: boolean
  rawTitle: string
  title: string
}

export function getTitleParts(title: string | string[] | undefined): TitleParts {
  const rawTitle = Array.isArray(title) ? title.join(" ").trim() : (title ?? "").trim()
  const hasTitle = rawTitle.length > 0

  return {
    hasTitle,
    rawTitle,
    title: hasTitle ? rawTitle : "Untitled",
  }
}
