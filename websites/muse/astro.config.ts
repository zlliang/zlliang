import { defineConfig, fontProviders } from "astro/config"
import vercel from "@astrojs/vercel"
import tailwindcss from "@tailwindcss/vite"
import { remarkCjkFriendly, remarkCodeTitles } from "@zlliang/remark"

import { rehypeHeadingIds, rehypeAutolinkHeadings, rehypeFootnotePrefixes, rehypeImageCaptions, rehypeCodeCopy } from "@zlliang/rehype"

export default defineConfig({
  site: "https://muse.zlliang.me",
  output: "server",
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
  vite: {
    plugins: [tailwindcss()],
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
      [rehypeCodeCopy, {}],
    ],
  },
  devToolbar: {
    enabled: false,
  },
})
