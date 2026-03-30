/** Note type registry */
export const types = [
  { slug: "regular", display: "Regular", description: "A fresh thought, moment, or observation." },
  { slug: "link", display: "Link", description: "A link worth saving, with my commentary." },
  { slug: "collection", display: "Collection", description: "A carefully curated set of related items." },
  { slug: "quote", display: "Quote", description: "A quoted passage, plus a few thoughts." },
  { slug: "til", display: "TIL (Today I Learned)", description: "New knowledge worth sharing." },
  { slug: "post", display: "Post", description: "An introduction to a newly published post." },
] as const

/** Type slugs */
export const slugs = types.map((type) => type.slug)

/** Check whether a string is a valid note type */
export function isNoteType(value: string): value is typeof types[number]["slug"] {
  return types.some((type) => type.slug === value)
}
