import { type ContentData } from 'vitepress'
import { format } from 'date-fns'

export function transformPost(item: ContentData): ContentData {
  return {
    ...item,
    url: item.url.replace('index.html', ''),
    frontmatter: {
      ...item.frontmatter,
      created: format(item.frontmatter.created || new Date(), 'yyyy-MM-dd'),
    },
  }
}

export function sortPost(a: ContentData, b: ContentData): number {
  return new Date(b.frontmatter.created).valueOf() - new Date(a.frontmatter.created).valueOf()
}
