import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

import { rehypeHeadingIds, rehypeAutolinkHeadings, rehypeExternalLinks, rehypeFootnotePrefixes, rehypeImageCaptions } from "@zlliang/rehype"

export default defineConfig({
  site: "https://tech.zlliang.me",
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 960, 1280],
      domains: [],
    },
  }),
  integrations: [sitemap()],
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
