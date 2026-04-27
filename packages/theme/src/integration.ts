import { fileURLToPath } from "node:url"
import { resolve as resolvePath } from "node:path"

import { fontProviders } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import { remarkCjkFriendly, remarkCodeTitles } from "@zlliang/remark"
import {rehypeHeadingIds, rehypeAutolinkHeadings, rehypeFootnotePrefixes, rehypeImageCaptions, rehypeImageLinks, rehypeCodeCopy } from "@zlliang/rehype"

import { virtualConfigPlugin } from "./plugins/virtual-config"
import { virtualLogoPlugin } from "./plugins/virtual-logo"
import { virtualColorPlugin } from "./plugins/virtual-color"
import { virtualSlotsPlugin, SLOT_KEYS } from "./plugins/virtual-slots"
import { journalPreset, type ThemeJournalConfig } from "./presets/journal"
import { portfolioPreset, type ThemePortfolioConfig } from "./presets/portfolio"

import type { AstroIntegration } from "astro"
import type { PluginOption as VitePluginOption } from "vite"
import type { ThemePreset } from "./config"
import type { SlotKey } from "./plugins/virtual-slots"

export type ThemeUserConfig = ThemeJournalConfig | ThemePortfolioConfig

const PRESETS = {
  journal: journalPreset,
  portfolio: portfolioPreset,
} satisfies Record<string, ThemePreset<never>>

export default function theme(userConfig: ThemeUserConfig): AstroIntegration {
  return {
    name: "@zlliang/theme",
    hooks: {
      "astro:config:setup": (astro) => {
        const { config: astroConfig, updateConfig, addMiddleware, logger } = astro

        const preset = PRESETS[userConfig.preset] as ThemePreset<ThemeUserConfig>
        const config = preset.resolveConfig(userConfig)

        const siteRoot = fileURLToPath(astroConfig.root)
        const logoAbsPath = resolvePath(siteRoot, config.logo)
        const { logo: _omitLogo, overrides: _omitOverrides, ...serializableConfig } = config
        const serializedConfig = JSON.stringify({ ...serializableConfig, overrides: {} })

        const resolvedSlots: Partial<Record<SlotKey, string>> = {}
        for (const key of SLOT_KEYS) {
          const relPath = userConfig.slots?.[key]
          if (relPath) resolvedSlots[key] = resolvePath(siteRoot, relPath)
        }

        const vitePlugins: VitePluginOption[] = [
          virtualColorPlugin(userConfig.color),
          tailwindcss(),
          virtualConfigPlugin(serializedConfig),
          virtualLogoPlugin(logoAbsPath),
          virtualSlotsPlugin(resolvedSlots),
        ]

        updateConfig({
          fonts: [
            {
              provider: fontProviders.fontsource(),
              name: "Public Sans",
              cssVariable: "--font-public-sans",
              weights: [400, 700],
              styles: ["normal", "italic"],
              subsets: ["latin"],
              fallbacks: ["sans-serif"],
            },
            {
              provider: fontProviders.fontsource(),
              name: "Roboto Mono",
              cssVariable: "--font-roboto-mono",
              weights: [400],
              styles: ["normal"],
              subsets: ["latin"],
              fallbacks: ["monospace"],
            },
          ],
          markdown: {
            shikiConfig: {
              themes: { light: "github-light-default", dark: "github-dark-default" },
            },
            remarkPlugins: [
              [remarkCjkFriendly, {}],
              [remarkCodeTitles, {}],
            ],
            remarkRehype: {
              footnoteLabel: " ",
              footnoteLabelTagName: "div",
              footnoteBackContent: "↵",
            },
            rehypePlugins: [
              [rehypeHeadingIds, {}],
              [rehypeAutolinkHeadings, { behavior: "wrap", properties: { class: "nocolor" } }],
              [rehypeFootnotePrefixes, {}],
              [rehypeImageCaptions, {}],
              [rehypeImageLinks, {}],
              [rehypeCodeCopy, {}],
            ],
          },
          vite: {
            plugins: vitePlugins,
          },
        })

        addMiddleware({
          entrypoint: new URL("./middleware/cache.ts", import.meta.url),
          order: "pre",
        })

        preset.apply({ userConfig, config, astro })

        logger.info(`Configured ${config.preset} site "${config.title}" (${config.locale}, ${config.color})`)
      },
    },
  }
}
