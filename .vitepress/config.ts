import { env } from 'node:process'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

import { nav, sidebar } from '../src/data/nav'

export default defineConfig({
  // Website
  title: '梁子龙 Zilong Liang',
  titleTemplate: ':title - 梁子龙 Zilong Liang',
  description: '', // TODO

  // Build
  lang: 'zh-CN',
  srcDir: './src',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
    ],
    // [
    //   "link",
    //   {
    //     rel: "manifest",
    //     href: "/favicon/site.webmanifest",
    //   },
    // ],
    // [
    //   'meta',
    //   {
    //     name: 'msapplication-TileColor',
    //     content: '#cc6e19',
    //   },
    // ],
    [
      'link',
      {
        rel: 'preload',
        href: '/images/logo.webp',
        as: 'image',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://zlliang.me',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: '梁子龙 Zilong Liang',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: '梁子龙的个人网站', // TODO
      },
    ],
    // TODO
    // [
    //   'meta',
    //   {
    //     property: 'og:image',
    //     content: '/images/og-image.jpg',
    //   },
    // ],
    ...(env.NODE_ENV === 'production' ? [
      [
        'script',
        {
          defer: '',
          src: '/_vercel/insights/script.js',
        },
      ]
    ] : ([] as any)),
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  // Theme
  themeConfig: {
    // Basic
    logo: '/images/logo.webp',
    siteTitle: '梁子龙 Zilong Liang',

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
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./theme', import.meta.url)),
      },
    },
  },
})
