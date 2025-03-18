import {
  defineConfig,
  presetWind4,
  presetIcons,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'width': '1.2em',
        'height': '1.2em',
        'vertical-align': 'text-bottom',
        'transform': 'scale(0.95)',
      },
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        'noto-serif-cn': ['Noto Serif SC:400,700', 'serif'],
        'noto-serif-jp': ['Noto Serif JP:400,700', 'serif'],
        'source-serif': ['Source Serif 4:400,700', 'serif'],
      }
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  content: {
    filesystem: [
      './src/**/*.md',
    ],
  },
})
