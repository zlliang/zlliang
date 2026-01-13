/** Get the display name of a tag */
export function getTagDisplay(tag: string) {
  return registry[tag] ?? tag
}

const registry: Record<string, string> = {
  "coffee": "咖啡",
  "demo": "示例",
  "gaming": "游戏",
  "japanese-drama": "日剧",
  "watching": "观影",
  "writing": "写作",
}
