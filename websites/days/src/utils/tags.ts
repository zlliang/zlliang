/** Get the slug of a tag */
export function getTagSlug(tag: string) {
  return registry[tag] ?? tag
}

const registry: Record<string, string> = {
  "示例": "demo",
}
