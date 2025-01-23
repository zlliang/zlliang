import { getCollection } from 'astro:content'
import { groupBy } from 'lodash-es'
import { getYear } from 'date-fns'

/** All posts */
export async function getPosts() {
  return await getCollection('posts', ({ data }) => import.meta.env.PROD ? data.draft !== true : true)
}

/** All posts grouped and sorted by created dates */
export async function getGroupedPosts() {
  const posts = await getPosts()
  const groups = Object.entries(groupBy(posts, (post) => getYear(post.data.created)))
    .map(([year, posts]) => ({ year, posts: posts.toSorted((a, b) => b.data.created.valueOf() - a.data.created.valueOf()) }))
    .toSorted((a, b) => Number(b.year) - Number(a.year))
  
  return groups
}
