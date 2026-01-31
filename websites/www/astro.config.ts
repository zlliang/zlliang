import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

import { rehypeHeadingIds, rehypeAutolinkHeadings, rehypeExternalLinks, rehypeFootnotePrefixes, rehypeImageCaptions } from "@zlliang/rehype"

export default defineConfig({
  site: "https://zlliang.me",
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 960, 1280],
      domains: [],
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
  integrations: [
    sitemap({
      i18n: {
        locales: { en: "en", zh: "zh-Hans" },
        defaultLocale: "en",
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light-default", dark: "github-dark-default" },
    },
    remarkRehype: {
      footnoteLabel: " ",
      footnoteLabelTagName: "div",
      footnoteBackContent: "↵",
    },
    rehypePlugins: [
      [rehypeHeadingIds, {}],
      [rehypeAutolinkHeadings, { behavior: "wrap", properties: { class: "nocolor" } }],
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener"] }],
      [rehypeFootnotePrefixes, {}],
      [rehypeImageCaptions, {}],
    ],
  },
  devToolbar: {
    enabled: false,
  },
})
