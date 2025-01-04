import { type ContentData, createContentLoader } from 'vitepress'
import { groupBy } from 'lodash-es'
import { getYear } from 'date-fns'

import { sortPost, transformPost } from './utils'

declare const data: Array<{ year: number, posts: ContentData[] }>
export { data }

export default createContentLoader('**/*.md', {
  transform: rawData => {
    const posts = rawData.map(transformPost).filter(item => !item.frontmatter.hidden)
    const groupedPosts = groupBy(posts, post => getYear(new Date(post.frontmatter.created)))
    return Object.entries(groupedPosts)
      .map(([year, posts]) => ({ year, posts: posts.sort(sortPost) }))
      .sort((a, b) => Number(b.year) - Number(a.year))
  }
})
