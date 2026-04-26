import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"
import zlliangTheme from "@zlliang/theme/integration"

export default defineConfig({
  site: "https://muse.zlliang.me",
  output: "server",
  integrations: [
    zlliangTheme({
      locale: "zh",
      primaryColor: "indigo",
      title: "梁子龙 / 随想手记",
      description: "慢慢记下一些小事和随想，还有那些停留更久的念头。",
      logo: "./src/assets/images/logo.png",
      sister: { site: "mesh", lang: "zh" },
      footerAuthor: "梁子龙",
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
