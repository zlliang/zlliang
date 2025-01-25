import { defineConfig, presetUno, presetIcons, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'width': '1.2em',
        'height': '1.2em',
        'vertical-align': 'text-bottom',
        'transform': 'scale(0.95)',
      }
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  content: {
    filesystem: [
      './src/**/*.md',
    ],
  },
})
