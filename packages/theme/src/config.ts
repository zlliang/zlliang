import colors from "tailwindcss/colors"

import type { Locale, Tokens } from "./i18n"

export type SisterSite = "mesh" | "muse"

/** Site type. Determines which features the theme integration enables. */
export type ThemeType = "portfolio" | "blog"

export interface ThemeSharedConfig {
  /** Site type. `portfolio` ships only shared setup; `blog` injects routes and the note/post content layer. */
  type: ThemeType
  /** Tailwind primary color palette. Maps `--color-primary-*` to the matching Tailwind palette. */
  color: keyof typeof colors
  /** Site title shown in the header, footer, and `<title>`. */
  title: string
  /** Path to the logo image, relative to the site root (e.g. `./src/assets/images/logo.png`). */
  logo: string
  /** Footer author name. Defaults to `title`. */
  footerAuthor?: string
  /** Twitter creator handle for OpenGraph tags. */
  twitterCreator?: string
}

export interface ThemePortfolioConfig extends ThemeSharedConfig {
  type: "portfolio"
}

export interface ThemeBlogConfig extends ThemeSharedConfig {
  type: "blog"
  /** Default language for the entire site. Determines `<html lang>`, UI strings, and search segmenter. Defaults to `"en"`. */
  lang?: Locale
  /** Site description used as the default meta description. */
  description: string
  /** Sister site card shown in the aside. */
  sister: { site: SisterSite; lang: Locale }
  /** Optional URL for the "About" link in the header. */
  aboutHref?: string
  /** Notes-per-page for note listings. Defaults to 20. */
  notesPerPage?: number
  /** Override individual UI tokens. */
  overrides?: Partial<Tokens>
}

export type ThemeUserConfig = ThemePortfolioConfig | ThemeBlogConfig

export interface ResolvedThemeConfig {
  type: ThemeType
  color: keyof typeof colors
  title: string
  logo: string
  footerAuthor: string
  twitterCreator: string | null
  /** Defaults to `"en"`; the runtime `t` is derived from this. */
  lang: Locale
  /** `""` for portfolio sites. */
  description: string
  /** `null` for portfolio sites. */
  sister: { site: SisterSite; lang: Locale } | null
  aboutHref: string
  notesPerPage: number
  overrides: Partial<Tokens>
}

const DEFAULT_ABOUT_HREF = "https://zlliang.me"
const DEFAULT_NOTES_PER_PAGE = 20
const DEFAULT_TWITTER_CREATOR = "@zlliang96"

export function resolveThemeConfig(user: ThemeUserConfig): ResolvedThemeConfig {
  const shared = {
    type: user.type,
    color: user.color,
    title: user.title,
    logo: user.logo,
    footerAuthor: user.footerAuthor ?? user.title,
    twitterCreator: user.twitterCreator ?? DEFAULT_TWITTER_CREATOR,
  }

  if (user.type === "blog") {
    return {
      ...shared,
      lang: user.lang ?? "en",
      description: user.description,
      sister: user.sister,
      aboutHref: user.aboutHref ?? DEFAULT_ABOUT_HREF,
      notesPerPage: user.notesPerPage ?? DEFAULT_NOTES_PER_PAGE,
      overrides: user.overrides ?? {},
    }
  }

  return {
    ...shared,
    lang: "en",
    description: "",
    sister: null,
    aboutHref: DEFAULT_ABOUT_HREF,
    notesPerPage: DEFAULT_NOTES_PER_PAGE,
    overrides: {},
  }
}
