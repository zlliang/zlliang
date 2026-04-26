import type { Locale, Tokens } from "./i18n"

export type PrimaryColor = "mesh" | "muse" | "home"
export type SisterSite = "mesh" | "muse"

export interface ThemeUserConfig {
  /** Canonical site URL, used for SEO links. */
  site: string
  /** Locale for the entire site. Determines `<html lang>`, UI strings, and search segmenter. */
  locale: Locale
  /** Primary color palette. Maps `--color-primary-*` to the matching site palette. */
  primaryColor: PrimaryColor
  /** Site title shown in the header, footer, and `<title>`. */
  title: string
  /** Site description used as the default meta description. */
  description: string
  /** Path to the logo image, relative to the site root (e.g. `./src/assets/images/logo.png`). */
  logo: string
  /** Sister site card shown in the aside. */
  sister: { site: SisterSite; lang: Locale }
  /** Footer author name. Defaults to `title`. */
  footerAuthor?: string
  /** Optional URL for the "About" link in the header. */
  aboutHref?: string
  /** Notes-per-page for note listings. Defaults to 20. */
  notesPerPage?: number
  /** Twitter creator handle for OpenGraph tags. */
  twitterCreator?: string
  /** Override individual UI tokens. */
  overrides?: Partial<Tokens>
}

export interface ResolvedThemeConfig extends Required<Omit<ThemeUserConfig, "overrides" | "twitterCreator">> {
  twitterCreator: string | null
  overrides: Partial<Tokens>
}

export function resolveThemeConfig(user: ThemeUserConfig): ResolvedThemeConfig {
  return {
    site: user.site,
    locale: user.locale,
    primaryColor: user.primaryColor,
    title: user.title,
    description: user.description,
    logo: user.logo,
    sister: user.sister,
    footerAuthor: user.footerAuthor ?? user.title,
    aboutHref: user.aboutHref ?? "https://zlliang.me",
    notesPerPage: user.notesPerPage ?? 20,
    twitterCreator: user.twitterCreator ?? "@zlliang96",
    overrides: user.overrides ?? {},
  }
}
