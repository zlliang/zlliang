import DefaultTheme from 'vitepress/theme'

import Layout from '@/components/layout/Layout.vue'
import PostLink from '@/components/PostLink.vue'

import '@/styles/vars.css'
import '@/styles/main.css'

const enhanceApp: typeof DefaultTheme.enhanceApp = ({ app }) => {
  app.component('PostLink', PostLink)
}

const theme = {
  ...DefaultTheme,
  Layout,
  enhanceApp,
}

export default theme
