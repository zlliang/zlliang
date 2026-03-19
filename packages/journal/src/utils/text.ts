export interface DateParts {
  date: string
  year: string
  month: string
  day: string
}

export function normalizeTitle(titleParts: string | string[] | undefined): {
  rawTitle: string
  title: string
  hasTitle: boolean
} {
  const rawTitle = Array.isArray(titleParts) ? titleParts.join(" ").trim() : (titleParts ?? "").trim()
  const hasTitle = rawTitle.length > 0

  return {
    rawTitle,
    title: hasTitle ? rawTitle : "Untitled",
    hasTitle,
  }
}

export function slugify(value: string): string {
  const slug = value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

  return slug || "untitled"
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
