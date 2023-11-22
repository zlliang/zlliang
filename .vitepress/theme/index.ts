import DefaultTheme from 'vitepress/theme'

import Layout from '@/components/layout/Layout.vue'
import PostItem from '@/components/PostItem.vue'

import '@/styles/vars.css'
import '@/styles/main.css'

const enhanceApp: typeof DefaultTheme.enhanceApp = ({ app }) => {
  app.component('PostItem', PostItem)
}

const theme = {
  ...DefaultTheme,
  Layout,
  enhanceApp,
}

export default theme
