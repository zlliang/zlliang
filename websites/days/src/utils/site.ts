/** Stores the default site title used across pages. */
export const siteTitle = "子龙的生活手记"

/** Builds the full page title from the optional page title. */
export function getTitle(title?: string) {
  return title ? `${title} - ${siteTitle}` : siteTitle
}

/** Controls how many notes are shown on each page. */
export const NOTES_PER_PAGE = 20
