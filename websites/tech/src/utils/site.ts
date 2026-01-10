export const siteTitle = "Zilong's Tech Notes"

export function getTitle(title?: string) {
  return title ? `${title} - ${siteTitle}` : siteTitle
}

export const NOTES_PER_PAGE = 20
