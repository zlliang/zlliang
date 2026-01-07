import { getCollection, getEntry, render } from "astro:content"
import { uniqBy, groupBy } from "lodash-es"

import { categories, languages } from "@/content.config"

import type { CollectionEntry } from "astro:content"

/** Languages */
export { languages }

/** Language type */
export type Lang = typeof languages[number]

/** Get the display name of a language */
export function getLanguageDisplay(lang: Lang) {
  return ({
    en: "English",
    zh: "中文",
  })[lang]
}

/** Get the display name of a language, in English */
export function getLanguageEnglishDisplay(lang: Lang) {
  return ({
    en: "English",
    zh: "Chinese",
  })[lang]
}

/** All notes */
export const notes = await getNotes()

/** Get all notes */
async function getNotes() {
  const collection = await getCollection("notes", ({ data }) => !import.meta.env.PROD || !data.draft)
  const notes = collection.toSorted((a, b) => b.data.no - a.data.no)

  return notes
}

/** Note categories */
export { categories }

type NoteCategory = typeof categories[number]

/** Get the display name of a note category */
export function getCategoryDisplay(category: NoteCategory) {
  return ({
    regular: "Regular",
    link: "Link",
    quote: "Quote",
    til: "TIL (Today I Learned)",
    post: "Post",
  })[category]
}

/** All tags */
export const tags = getTags(notes)

/** Get tags from notes, sorted alphabetically */
export function getTags(notes: CollectionEntry<"notes">[]) {
  const tags = uniqBy(notes.flatMap((note) => note.data.tags).filter(Boolean) as Exclude<CollectionEntry<"notes">["data"]["tags"], undefined>, "slug")
    .toSorted((a, b) => a.slug.localeCompare(b.slug))
  
  return tags
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

/** All translated posts */
export const translatedPosts = await getTranslatedPosts()

/** Get all translated posts */
async function getTranslatedPosts() {
  const collection = await getCollection("translatedPosts")
  const translatedPosts = await Promise.all(collection.map(async (post) => {
    if (!import.meta.env.PROD) return post
    const original = await getEntry(post.data.original)
    return original.data.draft ? null : post
  })).then(results => results.filter(p => p !== null))

  return translatedPosts
}

/** Get translations for a post */
export function getTranslations(post: CollectionEntry<"posts">) {
  return translatedPosts.filter((t) => t.data.original.id === post.id)
}

/** Hreflang link */
export interface HreflangLink {
  lang: string
  href: string
}

/** Build hreflang links for a post (original or translated) */
export function buildHreflang(post: CollectionEntry<"posts">, siteUrl: URL) {
  const translations = getTranslations(post)
  const links: HreflangLink[] = [
    { lang: post.data.lang, href: new URL(`/posts/${post.id}`, siteUrl).href },
    ...translations.map((t) => ({ lang: t.data.lang, href: new URL(`/posts/${t.id}`, siteUrl).href })),
  ]

  return links
}

/** Render a fragment */
export async function renderFragment(slug: string) {
  const entry = await getEntry("fragments", slug)!
  const { Content } = await render(entry)

  return Content
}
