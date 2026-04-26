import { fileURLToPath } from "node:url"
import { resolve as resolvePath, dirname } from "node:path"

import { fontProviders } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import { remarkCjkFriendly, remarkCodeTitles } from "@zlliang/remark"
import {
  rehypeHeadingIds,
  rehypeAutolinkHeadings,
  rehypeFootnotePrefixes,
  rehypeImageCaptions,
  rehypeImageLinks,
  rehypeCodeCopy,
} from "@zlliang/rehype"

import { resolveThemeConfig } from "./config"

import type { AstroIntegration } from "astro"
import type { Plugin as VitePlugin } from "vite"
import type { ThemeUserConfig } from "./config"

const PACKAGE_DIR = dirname(fileURLToPath(import.meta.url))

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

function virtualModulePlugin(opts: {
  serializableConfig: string
  logoImportPath: string
}): VitePlugin {
  const ids = {
    config: "virtual:zlliang-theme/config",
    logo: "virtual:zlliang-theme/logo",
  }
  const resolved = Object.fromEntries(Object.entries(ids).map(([k, v]) => [k, "\0" + v])) as Record<keyof typeof ids, string>

  return {
    name: "zlliang-theme:virtual",
    enforce: "pre",
    resolveId(id) {
      if (id === ids.config) return resolved.config
      if (id === ids.logo) return resolved.logo
      return null
    },
    load(id) {
      if (id === resolved.config) {
        return `export default ${opts.serializableConfig}`
      }
      if (id === resolved.logo) {
        return `import logo from ${JSON.stringify(opts.logoImportPath)}\nexport default logo`
      }
      return null
    },
  }
}

export default function theme(userConfig: ThemeUserConfig): AstroIntegration {
  const config = resolveThemeConfig(userConfig)

  return {
    name: "@zlliang/theme",
    hooks: {
      "astro:config:setup": ({ config: astroConfig, updateConfig, addMiddleware, injectRoute, logger }) => {
        const siteRoot = fileURLToPath(astroConfig.root)
        const logoAbsPath = resolvePath(siteRoot, config.logo)
        const primaryCssPath = resolvePath(PACKAGE_DIR, "styles", "primary", `${config.primaryColor}.css`)

        const { logo: _omitLogo, overrides: _omitOverrides, ...serializableConfig } = config
        const serializableWithOverrides = { ...serializableConfig, overrides: {} }

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
            plugins: [
              tailwindcss(),
              virtualModulePlugin({
                serializableConfig: JSON.stringify(serializableWithOverrides),
                logoImportPath: logoAbsPath,
              }),
            ],
            resolve: {
              alias: [
                { find: "virtual:zlliang-theme/primary.css", replacement: primaryCssPath },
              ],
            },
          },
        })

        addMiddleware({
          entrypoint: new URL("./middleware/index.ts", import.meta.url),
          order: "pre",
        })

        for (const { pattern, entrypoint } of ROUTES) {
          injectRoute({
            pattern,
            entrypoint: new URL(`./${entrypoint}`, import.meta.url),
          })
        }

        logger.info(`Configured for site "${config.title}" (${config.locale}, ${config.primaryColor})`)
      },
    },
  }
}
