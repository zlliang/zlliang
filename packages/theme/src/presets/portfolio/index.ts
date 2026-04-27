import { resolvePortfolioConfig, type ThemePortfolioConfig } from "./config"

import type { ThemePreset } from "../../config"

export const portfolioPreset: ThemePreset<ThemePortfolioConfig> = {
  name: "portfolio",
  resolveConfig: resolvePortfolioConfig,
  apply() {
    // The portfolio preset relies entirely on the shared base setup.
  },
}

export type { ThemePortfolioConfig }
