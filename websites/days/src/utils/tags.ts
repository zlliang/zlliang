/** Get the display name of a tag */
export function getTagDisplay(tag: string) {
  return registry[tag] ?? tag
}

const registry: Record<string, string> = {
  "demo": "示例",
  "watching": "观影",
  "japanese-drama": "日剧",
  "coffee": "咖啡",
}
