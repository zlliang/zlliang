import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

import { nav, sidebar } from '../src/data/nav'

export default defineConfig({
  // Website
  title: '子龙的笔记本',
  titleTemplate: ':title - 子龙的笔记本',
  description: '子龙的笔记本',

  // Build
  lang: 'zh-CN',
  srcDir: './src',
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
  ],
  transformPageData(pageData, context) {
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(...[
      [
        'meta',
        {
          property: 'og:title',
          content: typeof pageData.titleTemplate === 'string'
            ? pageData.titleTemplate.replace(':title', pageData.title)
            : (typeof context.siteConfig.site.titleTemplate === 'string'
              ? context.siteConfig.site.titleTemplate.replace(':title', pageData.title)
              : pageData.title),
        },
      ],
      [
        'meta',
        {
          property: 'og:description',
          content: pageData.frontmatter.summary || context.siteConfig.site.description,
        },
      ],
      [
        'meta',
        {
          property: 'og:url',
          content: `https://zlliang.me/${pageData.relativePath}`
            .replace(/index\.md$/, '')
            .replace(/\.md$/, '.html'),
        },
      ],
      [
        'meta',
        {
          property: 'og:type',
          content: 'website',
        },
      ],
    ])
  },

  // Theme
  themeConfig: {
    // Basic
    logo: '/favicon-96x96.png',
    siteTitle: '子龙的笔记本',

    // Content related
    nav,
    sidebar,

    // Labels
    outline: { level: 'deep', label: '目录' },
    docFooter: { prev: '上一则', next: '下一则' },
    darkModeSwitchLabel: '亮 / 暗',
    sidebarMenuLabel: '栏目',
    returnToTopLabel: '回到顶部',
  },

  // Vite
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./theme', import.meta.url)),
      },
    },
  },
})
