/** Stores the default site title used across pages. */
export const siteTitle = "Zilong's Tech Notes"

/** Builds the full page title from the optional page title. */
export function getTitle(title?: string) {
  return title ? `${title} - ${siteTitle}` : siteTitle
}

/** Controls how many notes are shown on each page. */
export const NOTES_PER_PAGE = 20
