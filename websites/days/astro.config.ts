import { defineConfig, fontProviders } from "astro/config"
import vercel from "@astrojs/vercel"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

import { rehypeHeadingIds, rehypeAutolinkHeadings, rehypeExternalLinks, rehypeFootnotePrefixes, rehypeImageCaptions } from "@zlliang/rehype"

export default defineConfig({
  site: "https://days.zlliang.me",
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
