import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  // {
  //   text: '🛠️ 技术',
  //   activeMatch: '/tech-notes/',
  //   items: [
  //     {
  //       text: '首页 - Tech Notes',
  //       link: '/tech-notes/',
  //     },
  //   ],
  // },
  {
    text: '💭 成长',
    activeMatch: '/evolving-me/',
    items: [
      {
        text: '首页 - Evolving Me',
        link: '/evolving-me/',
      },
    ],
  },
]

export const sidebar: DefaultTheme.Sidebar = {
  '/evolving-me/': [
    {
      text: '主页 - Evolving Me',
      link: '/evolving-me/',
    },
    {
      text: '笔记列表',
      items: [
        {
          text: '迈入 2025',
          link: '/evolving-me/into-2025',
        },
      ],
    },
  ],
}
