import colors from "tailwindcss/colors"

import type { Locale, Tokens } from "./i18n"

/** Site-specific Astro components plugged into theme slots. Paths are relative to the site root. */
export interface ThemeSlots {
  /** Appended to the right end of the header menu, after the built-in mobile search link. */
  headerSuffix?: string
  /** Appended to the bottom of the journal aside, after the built-in sections. */
  asideSuffix?: string
}

export interface ThemeConfig {
  /** Tailwind primary color palette. Maps `--color-primary-*` to the matching Tailwind palette. */
  color: keyof typeof colors
  /** Site title shown in the header, footer, and `<title>`. */
  title: string
  /** Path to the logo image, relative to the site root (e.g. `./src/assets/logo.png`). */
  logo: string
  /** Footer author name. Defaults to `title`. */
  footerAuthor?: string
  /** Twitter creator handle for OpenGraph tags. */
  twitterCreator?: string
  /** Site-specific Astro components plugged into named theme slots. */
  slots?: ThemeSlots
  /** Default locale for the entire site. Determines `<html lang>`, UI strings, and search segmenter. Defaults to `"en"`. */
  locale?: Locale
  /** Site description used as the default meta description. */
  description: string
  /** Notes-per-page for note listings. Defaults to 20. */
  notesPerPage?: number
  /** Override individual UI tokens. */
  overrides?: Partial<Tokens>
}

export interface ResolvedThemeConfig {
  color: keyof typeof colors
  title: string
  logo: string
  footerAuthor: string
  twitterCreator: string | null
  /** Defaults to `"en"`; the runtime `t` is derived from this. */
  locale: Locale
  description: string
  notesPerPage: number
  overrides: Partial<Tokens>
}

const DEFAULT_NOTES_PER_PAGE = 20
const DEFAULT_TWITTER_CREATOR = "@zlliang96"

export function resolveThemeConfig(themConfig: ThemeConfig): ResolvedThemeConfig {
  return {
    color: themConfig.color,
    title: themConfig.title,
    logo: themConfig.logo,
    footerAuthor: themConfig.footerAuthor ?? themConfig.title,
    twitterCreator: themConfig.twitterCreator ?? DEFAULT_TWITTER_CREATOR,
    locale: themConfig.locale ?? "en",
    description: themConfig.description,
    notesPerPage: themConfig.notesPerPage ?? DEFAULT_NOTES_PER_PAGE,
    overrides: themConfig.overrides ?? {},
  }
}
