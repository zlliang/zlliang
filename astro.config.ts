import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import unocss from 'unocss/astro'
import rehypeExternalLinks from 'rehype-external-links'
import { rehypeImageCaption } from './src/utils/rehype'

export default defineConfig({
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [768, 1280],
      domains: [],
    },
    isr: {
      expiration: 60 * 60, // 1 hour
      bypassToken: process.env.ISR_BYPASS_TOKEN,
      exclude: ['/api/[...path]'],
    },
  }),
  integrations: [
    unocss({ injectReset: true }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light-default',
    },
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }],
      [rehypeImageCaption, {}],
    ],
  },
  devToolbar: {
    enabled: false,
  },
})
