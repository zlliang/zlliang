import { tokensByLocale } from "../i18n"

import type { ResolvedThemeConfig } from "../config"
import type { Tokens } from "../i18n"
import type { ImageMetadata } from "astro"

// @ts-expect-error virtual module provided by the theme integration
import config from "virtual:zlliang-theme/config"
// @ts-expect-error virtual module provided by the theme integration
import logo from "virtual:zlliang-theme/logo"

export const themeConfig = config as Omit<ResolvedThemeConfig, "logo">

export const themeLogo = logo as ImageMetadata

export const t: Tokens = {
  ...tokensByLocale[themeConfig.locale],
  ...themeConfig.overrides,
}
