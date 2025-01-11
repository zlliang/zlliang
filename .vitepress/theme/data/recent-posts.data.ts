import { createContentLoader, type ContentData } from 'vitepress'

import { sortPost, transformPost } from './utils'

declare const data: ContentData[]
export { data }

export default createContentLoader('**/*.md', {
  transform: rawData => rawData
    .map(transformPost)
    .filter(item => !item.frontmatter.hidden)
    .sort(sortPost)
    .slice(0, 10),
})
