/** Note type registry */
export const types = [
  { slug: "regular", display: "日常", description: "鲜活的想法、片段或观察。" },
  { slug: "link", display: "链接", description: "值得保存的一个链接，并加上我的评论。" },
  { slug: "collection", display: "收藏", description: "按主题精心整理的一组内容。" },
  { slug: "quote", display: "摘录", description: "一段摘录，加上一些想法。" },
  { slug: "til", display: "小知识", description: "值得分享的新知识、新收获。" },
  { slug: "post", display: "文章", description: "介绍一篇新文章。" },
] as const

/** Type slugs */
export const slugs = types.map((type) => type.slug)

/** Check whether a string is a valid note type */
export function isNoteType(value: string): value is typeof types[number]["slug"] {
  return types.some((type) => type.slug === value)
}
