import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"
import theme from "@zlliang/theme/integration"
import { siteData, authorData } from "@zlliang/data"

export default defineConfig({
  site: "https://mesh.zlliang.me",
  output: "server",
  integrations: [
    theme({
      color: "blue",
      title: `${authorData.en.author} / ${siteData.mesh.copy.en.title}`,
      description: siteData.mesh.copy.en.descriptionLines.join(""),
      logo: "./src/assets/logo.png",
      footerAuthor: authorData.en.author,
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
