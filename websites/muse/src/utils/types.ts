/** Note type registry */
export const types = [
  { slug: "daily", display: "日常", description: "鲜活的想法、片段或观察。" },
  { slug: "bookmark", display: "书签", description: "值得记录的发现，附上我的评论和想法。" },
  { slug: "til", display: "小知识", description: "值得分享的新知识、新收获。" },
  { slug: "post", display: "文章", description: "介绍一篇新文章。" },
] as const

/** Type slugs */
export const slugs = types.map((type) => type.slug)

/** Check whether a string is a valid note type */
export function isNoteType(value: string): value is typeof types[number]["slug"] {
  return types.some((type) => type.slug === value)
}
