import { getCollection, type CollectionEntry } from 'astro:content'
import { groupBy, uniq } from 'lodash-es'
import { getYear } from 'date-fns'

/** All posts sorted by created dates */
export async function getPosts() {
  const collection = await getCollection('posts', ({ data }) => import.meta.env.PROD ? !data.draft : true)
  const posts = collection.toSorted((a, b) => b.data.created.valueOf() - a.data.created.valueOf())

  return posts
}

/** Group posts by years */
export function groupByYear(posts: CollectionEntry<'posts'>[]) {
  const groups = Object.entries(groupBy(posts, (post) => getYear(post.data.created)))
    .map(([year, posts]) => ({ year, posts }))
    .toSorted((a, b) => Number(b.year) - Number(a.year))

  return groups
}

/** get tags from posts */
export function getTags(posts: CollectionEntry<'posts'>[]) {
  const tags = uniq(posts.flatMap((post) => post.data.tags).filter(Boolean)) as string[]

  return tags
}
