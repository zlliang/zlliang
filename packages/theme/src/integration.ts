import { fileURLToPath } from "node:url"
import { resolve as resolvePath } from "node:path"

import { fontProviders } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import { remarkCjkFriendly, remarkCodeTitles } from "@zlliang/remark"
import {rehypeHeadingIds, rehypeAutolinkHeadings, rehypeFootnotePrefixes, rehypeImageCaptions, rehypeImageLinks, rehypeCodeCopy } from "@zlliang/rehype"

import { resolveThemeConfig } from "./config"
import { virtualConfigPlugin } from "./plugins/virtual-config"
import { virtualLogoPlugin } from "./plugins/virtual-logo"
import { virtualColorPlugin } from "./plugins/virtual-color"
import { virtualSlotsPlugin, SLOT_KEYS } from "./plugins/virtual-slots"

import type { AstroIntegration } from "astro"
import type { PluginOption as VitePluginOption } from "vite"
import type { ThemeUserConfig } from "./config"
import type { SlotKey } from "./plugins/virtual-slots"

const ROUTES: Array<{ pattern: string; entrypoint: string }> = [
  { pattern: "/", entrypoint: "routes/index.astro" },
  { pattern: "/404", entrypoint: "routes/404.astro" },
  { pattern: "/image", entrypoint: "routes/image.astro" },
  { pattern: "/search", entrypoint: "routes/search.astro" },
  { pattern: "/notes", entrypoint: "routes/notes/index.astro" },
  { pattern: "/notes/[...slug]", entrypoint: "routes/notes/[...slug].astro" },
  { pattern: "/notes/[year]", entrypoint: "routes/notes/[year]/index.astro" },
  { pattern: "/notes/[year]/[month]", entrypoint: "routes/notes/[year]/[month]/index.astro" },
  { pattern: "/notes/[year]/[month]/[day]", entrypoint: "routes/notes/[year]/[month]/[day].astro" },
  { pattern: "/posts", entrypoint: "routes/posts/index.astro" },
  { pattern: "/posts/[...slug]", entrypoint: "routes/posts/[...slug].astro" },
  { pattern: "/posts/series", entrypoint: "routes/posts/series/index.astro" },
  { pattern: "/posts/series/[series]", entrypoint: "routes/posts/series/[series].astro" },
]

export default function theme(userConfig: ThemeUserConfig): AstroIntegration {
  return {
    name: "@zlliang/theme",
    hooks: {
      "astro:config:setup": ({ config: astroConfig, updateConfig, addMiddleware, injectRoute, logger }) => {
        const config = resolveThemeConfig(userConfig)
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
          entrypoint: new URL(userConfig.type === "blog" ? "./middleware/index.ts" : "./middleware/cache.ts", import.meta.url),
          order: "pre",
        })

        if (userConfig.type === "blog") {
          for (const { pattern, entrypoint } of ROUTES) {
            injectRoute({
              pattern,
              entrypoint: new URL(`./${entrypoint}`, import.meta.url),
            })
          }
        }

        logger.info(`Configured ${config.type} site "${config.title}" (${config.locale}, ${config.color})`)
      },
    },
  }
}
