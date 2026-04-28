import colors from "tailwindcss/colors"

import type { Locale } from "./i18n"

export interface ThemeConfig {
  /** Site title shown in the header and `<title>`. */
  title: string
  /** Site description used as the default meta description. */
  description: string
  /** Tailwind primary color palette. Maps `--color-primary-*` to the matching Tailwind palette. */
  color: keyof typeof colors
  /** Default locale for the entire site. Determines `<html lang>`, UI strings, and search segmenter. Defaults to `"en"`. */
  locale?: Locale
  /** Path to the logo image, relative to the site root (e.g. `./src/assets/logo.png`). */
  logo: string
}

export interface ResolvedThemeConfig {
  title: string
  description: string
  color: keyof typeof colors
  /** Defaults to `"en"`; the runtime `t` is derived from this. */
  locale: Locale
  logo: string
}

export function resolveThemeConfig(themeConfig: ThemeConfig): ResolvedThemeConfig {
  return {
    title: themeConfig.title,
    description: themeConfig.description,
    color: themeConfig.color,
    locale: themeConfig.locale ?? "en",
    logo: themeConfig.logo,
  }
}
