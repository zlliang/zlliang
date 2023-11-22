import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '📚 读书',
    activeMatch: '/reading/',
    items: [
      {
        text: '首页 - 我的读书笔记',
        link: '/reading/',
      },
    ],
  },
  {
    text: '🛠️ 技术',
    activeMatch: '/tech/',
    items: [
      {
        text: '首页 - 我的技术笔记',
        link: '/tech/',
      },
    ],
  },
  {
    text: '关于我',
    activeMatch: '/about/',
    items: [
      {
        text: '🤔 我是谁',
        link: '/about/',
      },
      {
        text: '🤯 在忙什么',
        link: '/about/plan/',
      },
      {
        items: [
          {
            text: '📃 历史档案',
            link: '/about/history',
          },
        ],
      },
    ],
  },
]

export const sidebar: DefaultTheme.Sidebar = {
  '/reading/': [
    {
      text: '📚 读书笔记',
      link: '/reading/',
    },
  ],
  '/tech/': [
    {
      text: '🛠️ 技术笔记',
      link: '/tech/',
    },
  ],
  '/about/plan/': [
    {
      text: '🤯 我在忙什么？',
      link: '/about/plan/',
    },
    {
      text: '已经忙完的',
      items: [
        {
          text: '🔄 初始化：搭建我的 2023 版个人网站',
          link: '/about/plan/personal-website-version-2023',
        },
      ],
    },
  ],
}
