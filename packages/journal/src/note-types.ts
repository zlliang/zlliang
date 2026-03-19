export const noteTypeSlugs = [
  "regular",
  "link",
  "collection",
  "quote",
  "til",
  "post",
] as const

export type NoteType = typeof noteTypeSlugs[number]

export function isNoteType(value: string): value is NoteType {
  return noteTypeSlugs.includes(value as NoteType)
}
