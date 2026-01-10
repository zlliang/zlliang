export const siteTitle = "子龙的生活手记"

export function getTitle(title?: string) {
  return title ? `${title} - ${siteTitle}` : siteTitle
}

export const NOTES_PER_PAGE = 20
