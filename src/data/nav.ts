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
  {
    text: '📚 阅读',
    activeMatch: '/reading/',
    items: [
      {
        text: '首页 - 阅读日志',
        link: '/reading/',
      },
    ],
  },
  {
    text: '🌁 生活',
    activeMatch: '/life/',
    items: [
      {
        text: '首页 - 生活所思',
        link: '/life/',
      },
    ],
  },
  {
    text: '关于我',
    activeMatch: '/about/',
    items: [
      {
        text: '🤯 在忙什么',
        link: '/about/plan/',
      },
      {
        items: [
          {
            text: '📃 历史档案',
            link: '/about/history.html',
          },
        ],
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
  '/reading/': [
    {
      text: '📚 阅读日志',
      link: '/reading/',
    },
    {
      text: '文章列表',
      items: [
        // {
        //   text: '读库 2400：开启新一年的阅读生活',
        //   link: '/reading/duku-2400.html',
        // }
      ],
    },
  ],
  '/life/': [
    {
      text: '🌁 生活所思',
      link: '/life/',
    },
    {
      text: '文章列表',
      items: [
        // {
        //   text: '2024 年，又是一条好汉（汗 😓）',
        //   link: '/life/2023-to-2024.html',
        // },
      ],
    },
  ],
  '/about/plan/': [
    {
      text: '🤯 我在忙什么？',
      link: '/about/plan/',
    },
  ],
}
