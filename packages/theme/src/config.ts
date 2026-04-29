import colors from "tailwindcss/colors"

import type { Locale } from "./i18n"

export interface ThemeConfig {
  /** Site title shown in the header and `<title>`. */
  title?: string
  /** Default locale for the entire site. Determines `<html lang>`, UI strings, and search segmenter. Defaults to `"en"`. */
  locale?: Locale
  /** Tailwind primary color palette. Maps `--color-primary-*` to the matching Tailwind palette. */
  color?: keyof typeof colors
  /** Path to the logo image, relative to the site root (default: `./src/assets/logo.png`). */
  logo?: string
  /** Whether to inject predefined routes. */
  injectRoutes?: boolean
}

export type ResolvedThemeConfig = Required<ThemeConfig>

export function resolveThemeConfig(themeConfig: ThemeConfig): ResolvedThemeConfig {
  return {
    title: themeConfig.title ?? "Untitled",
    locale: themeConfig.locale ?? "en",
    color: themeConfig.color ?? "blue",
    logo: themeConfig.logo ?? "./src/assets/logo.png",
    injectRoutes: themeConfig.injectRoutes ?? true,
  }
}
