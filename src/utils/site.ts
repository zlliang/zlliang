export const siteTitle = "Zilong Liang"

export function getTitle(title?: string) {
  return title ? `${title} - ${siteTitle}` : siteTitle
}
