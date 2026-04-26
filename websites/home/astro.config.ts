import { fileURLToPath } from "node:url"

import { defineConfig, fontProviders } from "astro/config"
import vercel from "@astrojs/vercel"
import tailwindcss from "@tailwindcss/vite"
import { remarkCjkFriendly, remarkCodeTitles } from "@zlliang/remark"

import { rehypeHeadingIds, rehypeAutolinkHeadings, rehypeFootnotePrefixes, rehypeImageCaptions, rehypeImageLinks, rehypeCodeCopy } from "@zlliang/rehype"

const primaryCssPath = fileURLToPath(new URL("../../packages/theme/src/styles/primary/home.css", import.meta.url))

export default defineConfig({
  site: "https://zlliang.me",
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
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 960, 1280],
      domains: [],
      formats: ["image/avif", "image/webp"],
    },
  }),
  i18n: {
    locales: ["en", { "path": "zh", "codes": ["zh", "zh-Hans", "zh-CN"] }],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        { find: "virtual:zlliang-theme/primary.css", replacement: primaryCssPath },
      ],
    },
  },
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
  devToolbar: {
    enabled: false,
  },
})
