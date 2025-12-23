import { getCollection, getEntry, render } from "astro:content"
import { uniqBy, groupBy } from "lodash-es"

import type { CollectionEntry } from "astro:content"

/** All notes */
export const notes = await getNotes()

/** Get all notes */
async function getNotes() {
  const collection = await getCollection("notes", ({ data }) => !import.meta.env.PROD || !data.draft)
  const notes = collection.toSorted((a, b) => b.data.no - a.data.no)

  return notes
}

/** All tags */
export const tags = getTags(notes)

/** Get tags from notes, sorted alphabetically */
export function getTags(notes: CollectionEntry<"notes">[]) {
  const tags = uniqBy(notes.flatMap(note => note.data.tags).filter(Boolean) as Exclude<CollectionEntry<"notes">["data"]["tags"], undefined>, "slug")
    .toSorted((a, b) => a.slug.localeCompare(b.slug))
  
  return tags
}

/** Group notes by created date */
export async function groupNotesByDate(notes: CollectionEntry<"notes">[]) {
  const grouped = Object.entries(groupBy(notes, note => note.data.created))
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

/** Render a fragment */
export async function renderFragment(slug: string) {
  const entry = await getEntry("fragments", slug)!
  const { Content } = await render(entry)

  return Content
}
