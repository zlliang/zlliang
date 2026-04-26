import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"
import zlliangTheme from "@zlliang/theme/integration"

export default defineConfig({
  site: "https://mesh.zlliang.me",
  output: "server",
  integrations: [
    zlliangTheme({
      type: "blog",
      locale: "en",
      primaryColor: "blue",
      title: "Zilong Liang / Mesh",
      description: "In this ever-changing world of technology, trying to see things a little more clearly.",
      logo: "./src/assets/images/logo.png",
      sister: { site: "muse", lang: "en" },
      footerAuthor: "Zilong Liang",
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
