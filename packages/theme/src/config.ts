import colors from "tailwindcss/colors"

import type { Locale, Tokens } from "./i18n"

export const primaryColorShades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const

type PrimaryColorScale = Record<typeof primaryColorShades[number], string>

export type PrimaryColor = {
  [Color in keyof typeof colors]: typeof colors[Color] extends PrimaryColorScale ? Color : never
}[keyof typeof colors] & string

function isPrimaryColorScale(value: unknown): value is PrimaryColorScale {
  if (!value || typeof value !== "object") return false

  const scale = value as Record<string, unknown>
  return primaryColorShades.every((shade) => typeof scale[shade] === "string")
}

export const primaryColors = Object.keys(colors).filter((color): color is PrimaryColor => isPrimaryColorScale(colors[color as keyof typeof colors]))
export type SisterSite = "mesh" | "muse"

export interface ThemeSharedConfig {
  /** Tailwind primary color palette. Maps `--color-primary-*` to the matching Tailwind palette. */
  primaryColor: PrimaryColor
  /** Inject the note/post routes shipped by the theme. Defaults to `true`. */
  routes?: boolean
  /** Enable note/post conventions such as legacy redirects. Defaults to the value of `routes`. */
  content?: boolean
}

export interface ThemeRouteConfig extends ThemeSharedConfig {
  routes?: true
  content?: true
  /** Locale for the entire site. Determines `<html lang>`, UI strings, and search segmenter. */
  locale: Locale
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

export interface ThemeSetupConfig extends ThemeSharedConfig {
  routes: false
  content?: false
}

export type ThemeUserConfig = ThemeRouteConfig | ThemeSetupConfig

export interface ResolvedThemeConfig extends Required<Omit<ThemeRouteConfig, "overrides" | "twitterCreator" | "routes" | "content">> {
  twitterCreator: string | null
  overrides: Partial<Tokens>
}

export function resolveThemeConfig(user: ThemeRouteConfig): ResolvedThemeConfig {
  return {
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
