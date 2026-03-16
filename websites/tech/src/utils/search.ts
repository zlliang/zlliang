import MiniSearch from "minisearch"

import { notes, posts } from "@/utils/content"

import type { CollectionEntry } from "astro:content"

interface SearchDocument {
  id: string
  no: number
  title: string
  content: string
}

interface SearchIndex {
  miniSearch: MiniSearch<SearchDocument>
  notesById: Map<string, CollectionEntry<"notes">>
}

/** Module-level cache */
let searchIndexPromise: Promise<SearchIndex> | undefined

export async function searchNotes(query: string) {
  const normalizedQuery = query.trim()

  if (!normalizedQuery) {
    return []
  }

  const { miniSearch, notesById } = await getSearchIndex()
  const results = miniSearch.search(normalizedQuery, {
    boost: { title: 3 },
    prefix: true,
  })

  return results
    .map((result) => ({
      note: notesById.get(result.id)!,
      score: result.score,
    }))
    .filter((result) => Boolean(result.note))
    .toSorted((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }

      return b.note.data.no - a.note.data.no
    })
    .map((result) => result.note)
}

export function getSearchPageUrl(query: string, page = 1) {
  const searchParams = new URLSearchParams()

  searchParams.set("q", query)

  if (page > 1) {
    searchParams.set("page", page.toString())
  }

  return `/notes/search?${searchParams}`
}

async function getSearchIndex() {
  searchIndexPromise ??= buildSearchIndex()

  return searchIndexPromise
}

async function buildSearchIndex() {
  const notesById = new Map(notes.map((note) => [note.id, note]))
  const postsById = new Map(posts.map((post) => [post.id, post]))
  const miniSearch = new MiniSearch<SearchDocument>({
    fields: ["title", "content"],
    storeFields: ["id", "no"],
  })

  const documents = notes.map((note) => {
    const post = note.data.post ? postsById.get(note.data.post.id) : undefined

    return {
      id: note.id,
      no: note.data.no,
      title: note.data.title || post?.data.title || "Untitled note",
      content: [note.body, post?.body].filter(Boolean).join("\n\n"),
    }
  })

  miniSearch.addAll(documents)

  return { miniSearch, notesById }
}
