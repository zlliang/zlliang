import { type ContentData, createContentLoader } from 'vitepress'

import { sortPost, transformPost } from './utils'

declare const data: ContentData[]
export { data }

export default createContentLoader('**/*.md', {
  transform: rawData => rawData
    .map(transformPost)
    .sort(sortPost),
})
