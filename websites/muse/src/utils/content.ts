import { getCollection } from "astro:content"
import { groupBy } from "lodash-es"

import type { CollectionEntry } from "astro:content"

let notesPromise: Promise<CollectionEntry<"notes">[]> | undefined
let postsPromise: Promise<CollectionEntry<"posts">[]> | undefined
let seriesPromise: Promise<CollectionEntry<"series">[]> | undefined

/** Get all notes */
export function getNotes() {
  notesPromise ??= loadNotes()

  return notesPromise
}

async function loadNotes() {
  const collection = await getCollection("notes", ({ data }) => !import.meta.env.PROD || !data.draft)
  const notes = collection.toSorted((a, b) => b.data.no - a.data.no)

  return notes
}

/** Get a note by id */
export async function getNoteById(id: string) {
  const notes = await getNotes()

  return notes.find((note) => note.id === id) ?? null
}

/** Get the next and previous notes for a note id */
export async function getAdjacentNotes(id: string) {
  const notes = await getNotes()
  const index = notes.findIndex((note) => note.id === id)

  if (index < 0) {
    return null
  }

  return {
    next: index > 0 ? notes[index - 1] : null,
    previous: index < notes.length - 1 ? notes[index + 1] : null,
  }
}

/** Group notes by created date */
export async function groupNotesByDate(notes: CollectionEntry<"notes">[]) {
  const grouped = Object.entries(groupBy(notes, (note) => note.data.created))
    .map(([date, notes]) => ({ date: new Date(date), notes }))
    .toSorted((a, b) => b.date.valueOf() - a.date.valueOf())

  return grouped
}

/** Get all posts */
export function getPosts() {
  postsPromise ??= loadPosts()

  return postsPromise
}

async function loadPosts() {
  const collection = await getCollection("posts", ({ data }) => !import.meta.env.PROD || !data.draft)
  const posts = collection.toSorted((a, b) => b.data.created.valueOf() - a.data.created.valueOf())

  return posts
}

/** Get a post by id */
export async function getPostById(id: string) {
  const posts = await getPosts()

  return posts.find((post) => post.id === id) ?? null
}

/** Get all pinned posts */
export async function getPinnedPosts() {
  const posts = await getPosts()

  return posts.filter((post) => post.data.pinned)
}

/** Get all series */
export function getSeries() {
  seriesPromise ??= loadSeries()

  return seriesPromise
}

async function loadSeries() {
  const collection = await getCollection("series")

  return collection
}

/** Get a series by id */
export async function getSeriesById(id: string) {
  const series = await getSeries()

  return series.find((series) => series.id === id) ?? null
}

/** Filter posts in a series, sorted by created date in ascending order */
export function filterPostsInSeries(posts: CollectionEntry<"posts">[], seriesId: string) {
  return posts
    .filter((post) => post.data.series?.id === seriesId)
    .toSorted((a, b) => a.data.created.valueOf() - b.data.created.valueOf())
}
