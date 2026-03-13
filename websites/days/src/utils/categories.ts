/** Note categories */
export const categories = ["regular", "link", "collection", "quote", "til", "post"] as const

/** Get the display name of a note category */
export function getCategoryDisplay(category: typeof categories[number]) {
  return ({
    regular: "日常",
    link: "链接",
    collection: "收藏",
    quote: "摘录",
    til: "小知识",
    post: "文章",
  })[category]
}
