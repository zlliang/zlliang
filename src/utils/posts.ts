import { getCollection } from 'astro:content'
import { groupBy } from 'lodash-es'
import { getYear } from 'date-fns'

/** All posts sorted by created dates */
export async function getPosts() {
  const collection = await getCollection('posts', ({ data }) => import.meta.env.PROD ? data.draft !== true : true)
  const posts = collection.toSorted((a, b) => b.data.created.valueOf() - a.data.created.valueOf())

  return posts
}

/** All posts grouped by years */
export async function getGroupedPosts() {
  const posts = await getPosts()
  const groups = Object.entries(groupBy(posts, (post) => getYear(post.data.created)))
    .map(([year, posts]) => ({ year, posts }))
    .toSorted((a, b) => Number(b.year) - Number(a.year))
  
  return groups
}
