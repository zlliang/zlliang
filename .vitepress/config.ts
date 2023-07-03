import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

import { nav, sidebar } from '../src/data/nav'

export default defineConfig({
  // Website
  title: '洋屁君',
  titleTemplate: ':title - 洋屁君',
  description: '这里是洋屁君的老巢。既然拨冗光临，那就不要吝惜 —— 敬请放洋屁！',

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
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
    ],
    // [
    //   "meta",
    //   {
    //     name: "theme-color",
    //     content: "#ffffff",
    //     media: "(prefers-color-scheme: light)",
    //   },
    // ],
    // [
    //   "meta",
    //   {
    //     name: "theme-color",
    //     content: "#1e1e20",
    //     media: "(prefers-color-scheme: dark)",
    //   },
    // ],
    [
      'link',
      {
        rel: 'preload',
        href: '/images/logo.svg',
        as: 'image',
      },
    ],
    [
      'link',
      {
        rel: 'preload',
        href: '/fonts/MFYouRan_Noncommercial-Regular.otf',
        as: 'font',
        crossorigin: 'anonymous',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://foreignfart.com',
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
        content: '洋屁君',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: '这里是洋屁君的老巢。既然拨冗光临，那就不要吝惜 —— 敬请放洋屁！',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/og-image.jpg',
      },
    ],
    [
      'script',
      {
        defer: '',
        src: '/_vercel/insights/script.js',
      },
    ],
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  // Theme
  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: false,

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
