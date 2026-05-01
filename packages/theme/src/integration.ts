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
import { virtualSlotsPlugin } from "./plugins/virtual-slots"

import type { AstroIntegration } from "astro"
import type { ThemeConfig } from "./config"

const routes = [
  { pattern: "/", entrypoint: "./routes/index.astro" },
  { pattern: "/404", entrypoint: "./routes/404.astro" },
  { pattern: "/image", entrypoint: "./routes/image.astro" },
  { pattern: "/search", entrypoint: "./routes/search.astro" },
  { pattern: "/notes", entrypoint: "./routes/notes/index.astro" },
  { pattern: "/notes/threads", entrypoint: "./routes/notes/threads/index.astro" },
  { pattern: "/notes/threads/[thread]", entrypoint: "./routes/notes/threads/[thread].astro" },
  { pattern: "/notes/[...slug]", entrypoint: "./routes/notes/[...slug].astro" },
  { pattern: "/notes/[year]", entrypoint: "./routes/notes/[year]/index.astro" },
  { pattern: "/notes/[year]/[month]", entrypoint: "./routes/notes/[year]/[month]/index.astro" },
  { pattern: "/notes/[year]/[month]/[day]", entrypoint: "./routes/notes/[year]/[month]/[day].astro" },
  { pattern: "/posts", entrypoint: "./routes/posts/index.astro" },
  { pattern: "/posts/[...slug]", entrypoint: "./routes/posts/[...slug].astro" },
  { pattern: "/posts/series", entrypoint: "./routes/posts/series/index.astro" },
  { pattern: "/posts/series/[series]", entrypoint: "./routes/posts/series/[series].astro" },
] as const

export default function theme(themeConfig: ThemeConfig): AstroIntegration {
  return {
    name: "@zlliang/theme",
    hooks: {
      "astro:config:setup": ({ config: astroConfig, updateConfig, addMiddleware, injectRoute }) => {
        const config = resolveThemeConfig(themeConfig)
        const { logo, ...serializableConfig } = config
        const serializedConfig = JSON.stringify(serializableConfig)
        const siteRoot = fileURLToPath(astroConfig.root)
        const logoPath = resolvePath(siteRoot, logo)

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
          compressHTML: "jsx",
          vite: {
            plugins: [
              virtualConfigPlugin(serializedConfig),
              virtualColorPlugin(config.color),
              virtualLogoPlugin(logoPath),
              virtualSlotsPlugin(siteRoot),
              tailwindcss(),
            ],
          }
        })

        const middlewarePath = config.injectRoutes ? "./middlewares/all.ts" : "./middlewares/cache.ts"
        addMiddleware({
          entrypoint: new URL(middlewarePath, import.meta.url),
          order: "pre",
        })

        if (config.injectRoutes) {
          routes.forEach(({ pattern, entrypoint }) => {
            injectRoute({
              pattern,
              entrypoint: new URL(entrypoint, import.meta.url),
            })
          })
        }
      },
    },
  }
}
