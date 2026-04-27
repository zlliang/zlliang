import {
  DEFAULT_NOTES_PER_PAGE,
  resolveBaseConfig,
  type ResolvedThemeConfig,
  type ThemeBaseConfig,
} from "../../config"
import type { Locale, Tokens } from "../../i18n"

/** Journal preset user config. */
export interface ThemeJournalConfig extends ThemeBaseConfig {
  preset: "journal"
  /** Default locale for the entire site. Determines `<html lang>`, UI strings, and search segmenter. Defaults to `"en"`. */
  locale?: Locale
  /** Site description used as the default meta description. */
  description: string
  /** Notes-per-page for note listings. Defaults to 20. */
  notesPerPage?: number
  /** Override individual UI tokens. */
  overrides?: Partial<Tokens>
}

export function resolveJournalConfig(user: ThemeJournalConfig): ResolvedThemeConfig {
  return {
    ...resolveBaseConfig(user),
    locale: user.locale ?? "en",
    description: user.description,
    notesPerPage: user.notesPerPage ?? DEFAULT_NOTES_PER_PAGE,
    overrides: user.overrides ?? {},
  }
}
