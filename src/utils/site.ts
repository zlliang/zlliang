export const siteURL = 'https://zlliang.me'
export const siteTitle = '子龙的笔记本'

export function getTitle(title?: string) {
  return title ? `${title} - ${siteTitle}` : siteTitle
}

export const apiBasePath = '/api'
