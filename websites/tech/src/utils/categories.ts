/** Note categories */
export const categories = ["regular", "link", "collection", "quote", "til", "post"] as const

/** Get the display name of a note category */
export function getCategoryDisplay(category: typeof categories[number]) {
  return ({
    regular: "Regular",
    link: "Link",
    collection: "Collection",
    quote: "Quote",
    til: "TIL (Today I Learned)",
    post: "Post",
  })[category]
}
