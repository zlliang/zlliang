/** Note types */
export const types = ["regular", "link", "collection", "quote", "til", "post"] as const

/** Get the display name of a note type */
export function getTypeDisplay(type: typeof types[number]) {
  return ({
    regular: "日常",
    link: "链接",
    collection: "收藏",
    quote: "摘录",
    til: "小知识",
    post: "文章",
  })[type]
}
