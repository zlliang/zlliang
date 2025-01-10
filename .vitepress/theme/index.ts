import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { inject as injectAnalytics } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

import Layout from '@/components/layout/Layout.vue'

import '@/styles/vars.css'
import '@/styles/main.css'

injectAnalytics()
injectSpeedInsights()

export default {
  ...DefaultTheme,
  Layout,
} satisfies Theme
