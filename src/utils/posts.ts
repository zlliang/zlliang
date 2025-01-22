import { getCollection } from 'astro:content'

export async function getPosts() {
  return await getCollection('posts', ({ data }) => import.meta.env.PROD ? data.draft !== true : true)
}
