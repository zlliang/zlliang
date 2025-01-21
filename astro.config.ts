import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'

export default defineConfig({
  integrations: [
    unocss({ configFile: 'uno.config.ts', injectReset: true }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light-default',
    },
  },
})
