import { themeConfig } from "../runtime/config"
import en from "./locales/en"
import zh from "./locales/zh"

import type { Tokens } from "./types"

export type Locale = "en" | "zh"

export const tokensByLocale: Record<Locale, Tokens> = { en, zh }

export type { Tokens }

/** Build a `Tokens` object for the given locale, falling back to the configured default. */
export function createI18n(locale?: Locale): Tokens {
  return { ...tokensByLocale[locale ?? themeConfig.locale], ...themeConfig.overrides }
}
