import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'

import Layout from '@/components/layout/Layout.vue'

import '@/styles/vars.css'
import '@/styles/main.css'

inject()

export default {
  ...DefaultTheme,
  Layout,
} satisfies Theme
