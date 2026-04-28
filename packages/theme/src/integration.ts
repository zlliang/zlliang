import { fileURLToPath } from "node:url"
import { resolve as resolvePath } from "node:path"

import { fontProviders } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import { remarkCjkFriendly, remarkCodeTitles } from "@zlliang/markdown/remark"
import { rehypeHeadingIds, rehypeAutolinkHeadings, rehypeFootnotePrefixes, rehypeImageCaptions, rehypeImageLinks, rehypeCodeCopy } from "@zlliang/markdown/rehype"

import { resolveThemeConfig } from "./config"
import { virtualConfigPlugin } from "./plugins/virtual-config"
import { virtualLogoPlugin } from "./plugins/virtual-logo"
import { virtualColorPlugin } from "./plugins/virtual-color"
import { virtualSlotsPlugin, SLOT_KEYS } from "./plugins/virtual-slots"

import type { AstroIntegration } from "astro"
import type { ThemeConfig } from "./config"
import type { SlotKey } from "./plugins/virtual-slots"

const routes = [
  { pattern: "/", entrypoint: new URL("./routes/index.astro", import.meta.url) },
  { pattern: "/404", entrypoint: new URL("./routes/404.astro", import.meta.url) },
  { pattern: "/image", entrypoint: new URL("./routes/image.astro", import.meta.url) },
  { pattern: "/search", entrypoint: new URL("./routes/search.astro", import.meta.url) },
  { pattern: "/notes", entrypoint: new URL("./routes/notes/index.astro", import.meta.url) },
  { pattern: "/notes/[...slug]", entrypoint: new URL("./routes/notes/[...slug].astro", import.meta.url) },
  { pattern: "/notes/[year]", entrypoint: new URL("./routes/notes/[year]/index.astro", import.meta.url) },
  { pattern: "/notes/[year]/[month]", entrypoint: new URL("./routes/notes/[year]/[month]/index.astro", import.meta.url) },
  { pattern: "/notes/[year]/[month]/[day]", entrypoint: new URL("./routes/notes/[year]/[month]/[day].astro", import.meta.url) },
  { pattern: "/posts", entrypoint: new URL("./routes/posts/index.astro", import.meta.url) },
  { pattern: "/posts/[...slug]", entrypoint: new URL("./routes/posts/[...slug].astro", import.meta.url) },
  { pattern: "/posts/series", entrypoint: new URL("./routes/posts/series/index.astro", import.meta.url) },
  { pattern: "/posts/series/[series]", entrypoint: new URL("./routes/posts/series/[series].astro", import.meta.url) },
]

export default function theme(themeConfig: ThemeConfig): AstroIntegration {
  return {
    name: "@zlliang/theme",
    hooks: {
      "astro:config:setup": ({ config: astroConfig, updateConfig, addMiddleware, injectRoute }) => {
        const config = resolveThemeConfig(themeConfig)
        const siteRoot = fileURLToPath(astroConfig.root)
        const logoAbsPath = resolvePath(siteRoot, config.logo)
        const { logo: _omitLogo, overrides: _omitOverrides, ...serializableConfig } = config
        const serializedConfig = JSON.stringify({ ...serializableConfig, overrides: {} })

        const resolvedSlots: Partial<Record<SlotKey, string>> = {}
        for (const key of SLOT_KEYS) {
          const relPath = themeConfig.slots?.[key]
          if (relPath) resolvedSlots[key] = resolvePath(siteRoot, relPath)
        }

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
            rehypePlugins: [
              [rehypeHeadingIds, {}],
              [rehypeAutolinkHeadings, { behavior: "wrap", properties: { class: "nocolor" } }],
              [rehypeFootnotePrefixes, {}],
              [rehypeImageCaptions, {}],
              [rehypeImageLinks, {}],
              [rehypeCodeCopy, {}],
            ],
            remarkRehype: {
              footnoteLabel: " ",
              footnoteLabelTagName: "div",
              footnoteBackContent: "↵",
            },
          },
          vite: {
            plugins: [
              virtualColorPlugin(config.color),
              virtualConfigPlugin(serializedConfig),
              virtualLogoPlugin(logoAbsPath),
              virtualSlotsPlugin(resolvedSlots),
              tailwindcss(),
            ],
          }
        })

        addMiddleware({
          entrypoint: new URL("./middlewares/index.ts", import.meta.url),
          order: "pre",
        })

        routes.forEach((route) => {
          injectRoute(route)
        })
      },
    },
  }
}
