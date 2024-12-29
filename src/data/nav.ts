import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
   {
    text: '🛠️ 技术',
    activeMatch: '/tech/',
    items: [
      {
        text: '首页 - 技术笔记',
        link: '/tech/',
      },
    ],
  },
]

export const sidebar: DefaultTheme.Sidebar = {
  '/tech/': [
    {
      text: '🛠️ 技术笔记',
      link: '/tech/',
    },
    {
      text: '文章列表',
      items: [],
    },
  ],
}
