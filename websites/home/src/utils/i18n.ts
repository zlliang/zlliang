/** Locales */
export const locales = ["en", "zh"] as const

/** Locale type */
export type Locale = (typeof locales)[number]

/** Translation helper */
export function t(locale: Locale, key: keyof (typeof messages)[Locale]): string {
  return messages[locale][key] || messages["en"][key]
}

const messages = {
  en: {
    "desc": "English",
    "site.title": "Zilong Liang",
    "journals": "Journals",
  },
  zh: {
    "desc": "中文",
    "site.title": "梁子龙",
    "journals": "手记",
  },
} as const
