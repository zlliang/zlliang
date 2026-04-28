import type { ImageMetadata } from "astro"
import type { ResolvedThemeConfig } from "./config"

// @ts-expect-error virtual module provided by the theme integration
import config from "virtual:zlliang-theme/config"
// @ts-expect-error virtual module provided by the theme integration
import logo from "virtual:zlliang-theme/logo"

export const themeConfig = config as Omit<ResolvedThemeConfig, "logo">
export const themeLogo = logo as ImageMetadata
