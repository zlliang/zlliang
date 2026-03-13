/** Note types */
export const types = ["regular", "link", "collection", "quote", "til", "post"] as const

/** Get the display name of a note type */
export function getTypeDisplay(type: typeof types[number]) {
  return ({
    regular: "Regular",
    link: "Link",
    collection: "Collection",
    quote: "Quote",
    til: "TIL (Today I Learned)",
    post: "Post",
  })[type]
}
