export const siteTitle = "Zilong Liang"

export function getTitle(title?: string) {
  return title ? `${title} - ${siteTitle}` : siteTitle
}

export const NOTES_PER_PAGE = 20
