import {
  DEFAULT_NOTES_PER_PAGE,
  resolveBaseConfig,
  type ResolvedThemeConfig,
  type ThemeBaseConfig,
} from "../../config"

/** Portfolio preset user config. */
export interface ThemePortfolioConfig extends ThemeBaseConfig {
  preset: "portfolio"
}

export function resolvePortfolioConfig(user: ThemePortfolioConfig): ResolvedThemeConfig {
  return {
    ...resolveBaseConfig(user),
    locale: "en",
    description: "",
    notesPerPage: DEFAULT_NOTES_PER_PAGE,
    overrides: {},
  }
}
