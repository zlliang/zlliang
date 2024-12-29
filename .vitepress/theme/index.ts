import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import Layout from '@/components/layout/Layout.vue'

import '@/styles/vars.css'
import '@/styles/main.css'

export default {
  ...DefaultTheme,
  Layout,
} satisfies Theme
