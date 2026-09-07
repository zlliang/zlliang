import { locales } from "@zlliang/data"

import en from "./locales/en"
import zh from "./locales/zh"

import type { Locale } from "@zlliang/data"
import type { Tokens } from "./tokens"

export { locales }
export type { Locale }

/** Parses and validates a locale route segment */
export function parseLocale(value?: string): Locale | null {
  if (!value || !locales.includes(value as Locale)) {
    return null
  }

  return value as Locale
}

const tokens: Record<Locale, Tokens> = {
  en,
  zh,
}

/** Builds a `Tokens` object for the given locale, falling back to the configured default. */
export function createI18n(locale: Locale): Tokens {
  return tokens[locale]
}
