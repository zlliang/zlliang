import vercel from "@astrojs/vercel"
import { defineConfig } from "astro/config"
import rehypeExternalLinks from "rehype-external-links"
import unocss from "unocss/astro"

import { rehypeImageCaption } from "./src/utils/rehype"

export default defineConfig({
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [768, 1280],
      domains: [],
    },
  }),
  integrations: [
    unocss(),
  ],
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
