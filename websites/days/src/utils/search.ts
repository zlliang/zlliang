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

/** Search notes by query relevance */
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

/** Supported search result sort modes */
export type SearchSort = "relevance" | "date"

/** Parse the search sort query parameter */
export function parseSearchSort(value: string | null): SearchSort {
  return value === "date" ? "date" : "relevance"
}

/** Build the canonical search page URL */
export function getSearchPageUrl(query: string, page = 1, sort: SearchSort = "relevance") {
  const searchParams = new URLSearchParams({
    q: query,
    ...(page > 1 ? { page: page.toString() } : {}),
    ...(sort === "date" ? { sort } : {}),
  })

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
      title: note.data.title || post?.data.title || "无题手记",
      content: [note.body, post?.body].filter(Boolean).join("\n\n"),
    }
  })

  miniSearch.addAll(documents)

  return { miniSearch, notesById }
}
