import { defineConfig, presetIcons, presetWind4, transformerDirectives } from "unocss"

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { reset: true },
      dark: 'media',
    }),
    presetIcons({
      extraProperties: {
        "display": "inline-block",
        "width": "1.2em",
        "height": "1.2em",
        "vertical-align": "text-bottom",
        "transform": "scale(0.95)",
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  content: {
    filesystem: [
      "./src/**/*.md",
    ],
  },
})
