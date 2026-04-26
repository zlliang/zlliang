import { fileURLToPath } from "node:url"
import { resolve as resolvePath } from "node:path"

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
import { primaryColorPlugin } from "./styles/primary"

import type { AstroIntegration } from "astro"
import type { ThemeRouteConfig, ThemeUserConfig } from "./config"
import type { ThemeVitePlugin } from "./styles/primary"

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

function hasThemeRoutes(config: ThemeUserConfig): config is ThemeRouteConfig {
  return config.routes !== false
}

function virtualModulePlugin(opts: {
  serializableConfig: string
  logoImportPath: string
}): ThemeVitePlugin {
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
  return {
    name: "@zlliang/theme",
    hooks: {
      "astro:config:setup": ({ config: astroConfig, updateConfig, addMiddleware, injectRoute, logger }) => {
        const injectRoutes = hasThemeRoutes(userConfig)
        const content = userConfig.content ?? injectRoutes
        const vitePlugins = [primaryColorPlugin(userConfig.primaryColor), tailwindcss()]

        let config: ReturnType<typeof resolveThemeConfig> | null = null
        if (injectRoutes) {
          config = resolveThemeConfig(userConfig)
          const siteRoot = fileURLToPath(astroConfig.root)
          const logoAbsPath = resolvePath(siteRoot, config.logo)
          const { logo: _omitLogo, overrides: _omitOverrides, ...serializableConfig } = config
          const serializableWithOverrides = { ...serializableConfig, overrides: {} }

          vitePlugins.push(virtualModulePlugin({
            serializableConfig: JSON.stringify(serializableWithOverrides),
            logoImportPath: logoAbsPath,
          }))
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
          entrypoint: new URL(content ? "./middleware/index.ts" : "./middleware/cache.ts", import.meta.url),
          order: "pre",
        })

        if (injectRoutes) {
          for (const { pattern, entrypoint } of ROUTES) {
            injectRoute({
              pattern,
              entrypoint: new URL(`./${entrypoint}`, import.meta.url),
            })
          }
        }

        if (config) {
          logger.info(`Configured for site "${config.title}" (${config.locale}, ${config.primaryColor})`)
        } else {
          logger.info(`Configured shared setup (${userConfig.primaryColor})`)
        }
      },
    },
  }
}
