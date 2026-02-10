/** Locales */
export const locales = ["en", "zh"] as const
/** Locale type */
export type Locale = (typeof locales)[number]

/** Translation helper */
export function t(lang: Locale, key: keyof (typeof messages)[Locale]): string {
  return messages[lang][key] || messages["en"][key]
}

const messages = {
  en: {
    "desc": "English",
    "site.title": "Zilong Liang",
    "ui.footer.builtWithPrefix": "Built with",
    "ui.footer.builtWithSuffix": "",
    "ui.section.places": "Where I've been",
    "ui.map.placeholder": "Click a pin to see details",
    "ui.map.dateFormat": "MMM yyyy",
  },
  zh: {
    "desc": "中文",
    "site.title": "梁子龙",
    "ui.footer.builtWithPrefix": "使用",
    "ui.footer.builtWithSuffix": "构建",
    "ui.section.places": "我去过的地方",
    "ui.map.placeholder": "点击图钉查看详情",
    "ui.map.dateFormat": "yyyy 年 M 月",
  },
} as const
