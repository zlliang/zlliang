import { getCollection, getEntry, render } from "astro:content"
import { uniqBy } from "lodash-es"

import type { CollectionEntry } from "astro:content"

/** Get all entries */
export async function getEntries() {
  const collection = await getCollection("entries", ({ data }) => import.meta.env.PROD ? !data.draft : true)
  const entries = collection.toSorted((a, b) => b.data.no - a.data.no)

  return entries
}

/** Get tags from entries */
export function getTags(entries: CollectionEntry<"entries">[]) {
  const tags = uniqBy(entries.flatMap(entry => entry.data.tags).filter(Boolean), 'slug') as Exclude<CollectionEntry<"entries">["data"]["tags"], undefined>

  return tags
}

/** Render a fragment */
export async function renderFragment(slug: string) {
  const entry = await getEntry("fragments", slug)!
  const { Content } = await render(entry)

  return Content
}
