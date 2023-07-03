import DefaultTheme from 'vitepress/theme'

import Layout from '@/components/layout/Layout.vue'
import PostItem from '@/components/PostItem.vue'
import TitleWithImage from '@/components/TitleWithImage.vue'
import TitleWithEmoji from '@/components/TitleWithEmoji.vue'

// import BlackWhiteImage from "@/components/BlackWhiteImage.vue"

import '@/styles/vars.css'
import '@/styles/fonts.css'
import '@/styles/main.css'

const enhanceApp: typeof DefaultTheme.enhanceApp = ({ app }) => {
  app.component('PostItem', PostItem)
  app.component('TitleWithImage', TitleWithImage)
  app.component('TitleWithEmoji', TitleWithEmoji)
  // app.component("BlackWhiteImage", BlackWhiteImage)
}

const theme = {
  ...DefaultTheme,
  Layout,
  enhanceApp,
}

export default theme
