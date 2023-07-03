import { type ContentData, createContentLoader } from 'vitepress'

import { sortPost, transformPost } from './utils'

declare const data: ContentData[]
export { data }

export default createContentLoader('src/**/*.md', {
  transform: rawData => rawData
    .map(transformPost)
    .sort(sortPost)
    .filter(item => !item.frontmatter.hidden)
    .slice(0, 10),
})
