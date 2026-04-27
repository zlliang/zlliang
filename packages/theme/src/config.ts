import colors from "tailwindcss/colors"

import type { AstroIntegration } from "astro"
import type { Locale, Tokens } from "./i18n"

/** Preset name. Determines which features the theme integration enables. */
export type ThemePresetName = "portfolio" | "journal"

/** Site-specific Astro components plugged into theme slots. Paths are relative to the site root. */
export interface ThemeSlots {
  /** Appended to the right end of the header menu, after the built-in mobile search link. */
  headerSuffix?: string
  /** Appended to the bottom of the journal aside, after the built-in sections. */
  asideSuffix?: string
}

/** Config items shared by every preset. */
export interface ThemeBaseConfig {
  /** Preset that controls which features the theme injects. */
  preset: ThemePresetName
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
}

/** Resolved config consumed by runtime modules. Includes every field; preset-specific entries get sensible defaults. */
export interface ResolvedThemeConfig {
  preset: ThemePresetName
  color: keyof typeof colors
  title: string
  logo: string
  footerAuthor: string
  twitterCreator: string | null
  /** Defaults to `"en"`; the runtime `t` is derived from this. */
  locale: Locale
  /** `""` when not provided by the preset. */
  description: string
  notesPerPage: number
  overrides: Partial<Tokens>
}

export const DEFAULT_TWITTER_CREATOR = "@zlliang96"
export const DEFAULT_NOTES_PER_PAGE = 20

/** Resolve fields shared across all presets. */
export function resolveBaseConfig(user: ThemeBaseConfig): Pick<
  ResolvedThemeConfig,
  "preset" | "color" | "title" | "logo" | "footerAuthor" | "twitterCreator"
> {
  return {
    preset: user.preset,
    color: user.color,
    title: user.title,
    logo: user.logo,
    footerAuthor: user.footerAuthor ?? user.title,
    twitterCreator: user.twitterCreator ?? DEFAULT_TWITTER_CREATOR,
  }
}

/** Astro hook params passed to a preset's `apply` function. */
export type ThemePresetSetupParams = Parameters<
  NonNullable<AstroIntegration["hooks"]["astro:config:setup"]>
>[0]

/** Context handed to a preset to wire up routes, middlewares, and other Astro-level settings. */
export interface ThemePresetContext<UserConfig extends ThemeBaseConfig> {
  userConfig: UserConfig
  config: ResolvedThemeConfig
  astro: ThemePresetSetupParams
}

/** A preset bundles a config resolver and an Astro setup function. */
export interface ThemePreset<UserConfig extends ThemeBaseConfig = ThemeBaseConfig> {
  name: ThemePresetName
  /** Resolve user-supplied options into a fully populated `ResolvedThemeConfig`. */
  resolveConfig(user: UserConfig): ResolvedThemeConfig
  /** Apply preset-specific Astro config: routes, middlewares, and other side effects. */
  apply(context: ThemePresetContext<UserConfig>): void
}
