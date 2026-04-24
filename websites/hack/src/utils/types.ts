/** Note type registry */
export const types = [
  { slug: "daily", display: "Daily", description: "A fresh thought, moment, or observation." },
  { slug: "bookmark", display: "Bookmark", description: "Findings worth keeping, with my commentary." },
  { slug: "til", display: "TIL (Today I Learned)", description: "New knowledge worth sharing." },
  { slug: "post", display: "Post", description: "An introduction to a newly published post." },
] as const

/** Type slugs */
export const slugs = types.map((type) => type.slug)

/** Check whether a string is a valid note type */
export function isNoteType(value: string): value is typeof types[number]["slug"] {
  return types.some((type) => type.slug === value)
}
