import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"
import theme from "@zlliang/theme/integration"

export default defineConfig({
  site: "https://zlliang.me",
  output: "server",
  integrations: [
    theme({
      color: "cyan",
      injectRoutes: false,
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
  i18n: {
    locales: ["en", { "path": "zh", "codes": ["zh", "zh-Hans", "zh-CN"] }],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  devToolbar: {
    enabled: false,
  },
})
