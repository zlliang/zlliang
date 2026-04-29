import { locales } from "@zlliang/data"

import type { Locale } from "@zlliang/data"

/** Parse and validate a locale route segment */
export function parseLocale(value?: string): Locale | null {
  if (!value || !locales.includes(value as Locale)) {
    return null
  }

  return value as Locale
}
