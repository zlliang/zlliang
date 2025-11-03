export const siteURL = "https://zlliang.me"
export const siteTitle = "Zilong Liang"

export function getTitle(title?: string) {
  return title ? `${title} - ${siteTitle}` : siteTitle
}
