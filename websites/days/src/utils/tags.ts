/** Get the display name of a tag */
export function getTagDisplay(tag: string) {
  return registry[tag] ?? tag
}

const registry: Record<string, string> = {
  "assets": "素材",
  "choir": "合唱",
  "coffee": "咖啡",
  "demo": "示例",
  "design": "设计",
  "festivals": "节日",
  "gaming": "游戏",
  "home": "居家",
  "japanese-drama": "日剧",
  "love": "感情",
  "monthly": "月刊",
  "shinobu-yoshii": "吉井忍",
  "watching": "观影",
  "work": "工作",
  "writing": "写作",
}
