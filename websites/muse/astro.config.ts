import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"
import theme from "@zlliang/theme/integration"
import { siteData, authorData } from "@zlliang/data"

export default defineConfig({
  site: "https://muse.zlliang.me",
  output: "server",
  integrations: [
    theme({
      locale: "zh",
      color: "indigo",
      title: `${authorData.zh.author} / ${siteData.muse.copy.zh.title}`,
      description: siteData.muse.copy.zh.descriptionLines.join(""),
      logo: "./src/assets/logo.png",
      footerAuthor: authorData.zh.author,
      slots: {
        headerSuffix: "./src/components/HeaderSuffix.astro",
        asideSuffix: "./src/components/AsideSuffix.astro",
      },
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
