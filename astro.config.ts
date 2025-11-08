import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"
import tailwindcss from "@tailwindcss/vite"
import rehypeExternalLinks from "rehype-external-links"

import { rehypeImageCaption } from "./src/utils/rehype"

export default defineConfig({
  site: "https://zlliang.me",
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [768, 1280],
      domains: [],
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light-default", dark: "github-dark-default" },
    },
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] }],
      [rehypeImageCaption, {}],
    ],
  },
  devToolbar: {
    enabled: false,
  },
})
