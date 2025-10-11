import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { reset: true },
    }),
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
        'noto-serif-cn': ['Noto Serif SC:400,700'],
        'noto-serif-jp': ['Noto Serif JP:400,700'],
        'source-serif': ['Source Serif 4:400,700'],
      },
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
