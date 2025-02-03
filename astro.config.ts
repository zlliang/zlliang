import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import rehypeExternalLinks from 'rehype-external-links'
import { rehypeImageCaption } from './src/utils/rehype'

export default defineConfig({
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
