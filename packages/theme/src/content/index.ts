import { getCollection } from "astro:content"
import { groupBy } from "lodash-es"

import type { CollectionEntry } from "astro:content"

let notesPromise: Promise<CollectionEntry<"notes">[]> | undefined
let threadsPromise: Promise<CollectionEntry<"threads">[]> | undefined
let postsPromise: Promise<CollectionEntry<"posts">[]> | undefined
let seriesPromise: Promise<CollectionEntry<"series">[]> | undefined

export interface ThreadActivity {
  notes: CollectionEntry<"notes">[]
  count: number
  latestNote: CollectionEntry<"notes"> | null
  latestAt: Date | null
}

export interface ThreadTreeNode {
  thread: CollectionEntry<"threads">
  children: ThreadTreeNode[]
  activity: ThreadActivity
}

/** Get all notes */
export function getNotes() {
  notesPromise ??= loadNotes()

  return notesPromise
}

async function loadNotes() {
  const collection = await getCollection("notes", ({ data }) => !import.meta.env.PROD || !data.draft)
  const notes = collection.toSorted((a, b) => b.data.number - a.data.number)

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

/** Get all threads */
export function getThreads() {
  threadsPromise ??= loadThreads()

  return threadsPromise
}

async function loadThreads() {
  const collection = await getCollection("threads")
  const threads = collection.toSorted((a, b) => a.data.title.localeCompare(b.data.title))

  validateThreads(threads)

  return threads
}

function validateThreads(threads: CollectionEntry<"threads">[]) {
  const ids = new Set(threads.map((thread) => thread.id))

  for (const thread of threads) {
    const parentId = thread.data.parent?.id
    if (!parentId) {
      continue
    }

    const parent = threads.find((item) => item.id === parentId)
    if (!ids.has(parentId) || !parent) {
      throw new Error(`Thread "${thread.id}" references missing parent "${parentId}".`)
    }

    if (parent.data.parent) {
      throw new Error(`Thread "${thread.id}" exceeds the two-level thread limit.`)
    }
  }
}

/** Get a thread by id */
export async function getThreadById(id: string) {
  const threads = await getThreads()

  return threads.find((thread) => thread.id === id) ?? null
}

/** Get a thread and its direct children */
export function getThreadIds(threads: CollectionEntry<"threads">[], threadId: string) {
  const ids = new Set([threadId])

  for (const thread of threads) {
    if (thread.data.parent?.id === threadId) {
      ids.add(thread.id)
    }
  }

  return ids
}

/** Filter notes in a thread, sorted from newest to oldest */
export function filterNotesInThread(notes: CollectionEntry<"notes">[], threadId: string, threads: CollectionEntry<"threads">[]) {
  const ids = getThreadIds(threads, threadId)

  return notes.filter((note) => note.data.thread && ids.has(note.data.thread.id))
}

/** Summarize note activity for a thread */
export function getThreadActivity(notes: CollectionEntry<"notes">[], threadId: string, threads: CollectionEntry<"threads">[]): ThreadActivity {
  const threadNotes = filterNotesInThread(notes, threadId, threads)
  const latestNote = threadNotes[0] ?? null

  return {
    notes: threadNotes,
    count: threadNotes.length,
    latestNote,
    latestAt: latestNote?.data.created ?? null,
  }
}

/** Build the shallow thread tree, sorted by recent activity */
export function buildThreadTree(threads: CollectionEntry<"threads">[], notes: CollectionEntry<"notes">[]): ThreadTreeNode[] {
  const childrenByParent = groupBy(threads, (thread) => thread.data.parent?.id ?? "")

  function createNode(thread: CollectionEntry<"threads">): ThreadTreeNode {
    const children = (childrenByParent[thread.id] ?? [])
      .map(createNode)
      .toSorted(compareThreadNodes)

    return {
      thread,
      children,
      activity: getThreadActivity(notes, thread.id, threads),
    }
  }

  return (childrenByParent[""] ?? [])
    .map(createNode)
    .toSorted(compareThreadNodes)
}

function compareThreadNodes(a: ThreadTreeNode, b: ThreadTreeNode) {
  const latest = (b.activity.latestAt?.valueOf() ?? 0) - (a.activity.latestAt?.valueOf() ?? 0)

  return latest || a.thread.data.title.localeCompare(b.thread.data.title)
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

/** Get the next and previous posts for a post id */
export async function getAdjacentPosts(id: string) {
  const posts = await getPosts()
  const index = posts.findIndex((post) => post.id === id)

  if (index < 0) {
    return null
  }

  return {
    next: index > 0 ? posts[index - 1] : null,
    previous: index < posts.length - 1 ? posts[index + 1] : null,
  }
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
