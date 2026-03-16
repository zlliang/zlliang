/** Note types */
export const types = ["regular", "link", "collection", "quote", "til", "post"] as const
type NoteType = typeof types[number]

/** Check whether a string is a valid note type */
export function isNoteType(value: string): value is NoteType {
  return (types as readonly string[]).includes(value)
}

/** Get the display name of a note type */
export function getTypeDisplay(type: NoteType) {
  return ({
    regular: "日常",
    link: "链接",
    collection: "收藏",
    quote: "摘录",
    til: "小知识",
    post: "文章",
  })[type]
}
