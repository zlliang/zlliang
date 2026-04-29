import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"
import theme from "@zlliang/theme/integration"
import { siteData, authorData } from "@zlliang/data"

export default defineConfig({
  site: "https://mesh.zlliang.me",
  output: "server",
  integrations: [
    theme({
      title: `${authorData.en.author} / ${siteData.mesh.copy.en.title}`,
      locale: "en",
      color: "blue",
    }),
  ],
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 960, 1280],
      domains: [],
      formats: ["image/avif", "image/webp"],
    },
  }),
  devToolbar: {
    enabled: false,
  },
})
