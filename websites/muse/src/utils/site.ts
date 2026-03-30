/** Stores the default site title used across pages. */
export const siteTitle = "梁子龙 / 随想手记"

/** Stores the default site description used across pages. */
export const siteDescription = "慢慢记下一些小事和随想，还有那些停留更久的念头。"

/** Builds the full page title from the optional page title. */
export function getTitle(title?: string) {
  return title ? `${title} - ${siteTitle}` : siteTitle
}

/** Controls how many notes are shown on each page. */
export const NOTES_PER_PAGE = 20
