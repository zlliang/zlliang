import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '🛠️ Tech Notes',
    activeMatch: '/tech-notes/',
    items: [
      {
        text: '首页 - Tech Notes',
        link: '/tech-notes/',
      },
    ],
  },
  {
    text: '💭 Evolving Me',
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
      text: '首页 - Evolving Me',
      link: '/evolving-me/',
    },
    {
      text: '笔记列表',
      items: [
        {
          text: '迈入 2025：保持高能量',
          link: '/evolving-me/into-2025',
        },
        {
          text: '警惕“Work Life Balance”中的话语陷阱',
          link: '/evolving-me/the-trap-of-wlb',
        }
      ],
    },
  ],
  '/tech-notes/': [
    {
      text: '首页 - Tech Notes',
      link: '/tech-notes/',
    },
    {
      text: '笔记列表',
      items: [
        {
          text: '什么是 Advent of Code',
          link: '/tech-notes/what-is-aoc',
        }
      ],
    },
  ],
}
