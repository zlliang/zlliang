import { themeConfig } from "../runtime"
import en from "./locales/en"
import zh from "./locales/zh"

import type { Locale } from "@zlliang/data"
import type { Tokens } from "./tokens"

export type { Locale }
export type { Tokens }

const tokens: Record<Locale, Tokens> = {
  en,
  zh,
}

/** Build a `Tokens` object for the given locale, falling back to the configured default. */
export function createI18n(locale?: Locale): Tokens {
  return tokens[locale ?? themeConfig.locale]
}
