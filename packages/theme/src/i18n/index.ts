import en from "./en"
import zh from "./zh"

import type { Tokens } from "./types"

export type Locale = "en" | "zh"

export const tokensByLocale: Record<Locale, Tokens> = { en, zh }

export type { Tokens }
