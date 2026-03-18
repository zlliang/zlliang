import { getCollection } from "astro:content"
import { groupBy } from "lodash-es"

import type { CollectionEntry } from "astro:content"

/** All notes */
export const notes = await getNotes()

/** Get all notes */
async function getNotes() {
  const collection = await getCollection("notes", ({ data }) => !import.meta.env.PROD || !data.draft)
  const notes = collection.toSorted((a, b) => b.data.no - a.data.no)

  return notes
}

/** Group notes by created date */
export async function groupNotesByDate(notes: CollectionEntry<"notes">[]) {
  const grouped = Object.entries(groupBy(notes, (note) => note.data.created))
    .map(([date, notes]) => ({ date: new Date(date), notes }))
    .toSorted((a, b) => b.date.valueOf() - a.date.valueOf())

  return grouped
}

/** All posts */
export const posts = await getPosts()

/** Get all posts */
async function getPosts() {
  const collection = await getCollection("posts", ({ data }) => !import.meta.env.PROD || !data.draft)
  const posts = collection.toSorted((a, b) => b.data.created.valueOf() - a.data.created.valueOf())

  return posts
}

/** All pinned posts */
export const pinnedPosts = getPinnedPosts(posts)

/** Get all pinned posts */
function getPinnedPosts(posts: CollectionEntry<"posts">[]) {
  const pinnedPosts = posts.filter((post) => post.data.pinned)

  return pinnedPosts
}
