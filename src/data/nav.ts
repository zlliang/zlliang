import { type DefaultTheme } from 'vitepress'

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
          text: '加入离职赛道',
          link: '/evolving-me/leaving-tencent',
        },
        {
          text: '什么是 37signals',
          link: '/evolving-me/what-is-37signals',
        },
        {
          text: '警惕“Work Life Balance”中的话语陷阱',
          link: '/evolving-me/the-trap-of-wlb',
        }
      ],
    },
    {
      text: '生活瞬间',
      items: [
        {
          text: '我的买车故事',
          link: '/evolving-me/sparkles/buying-a-car',
        }
      ],
    }
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
          text: 'Shell 脚本中的单引号、引号和反引号',
          link: '/tech-notes/quotes-in-shell-script',
        },
        {
          text: 'Rust 社区两年以来的闹剧',
          link: '/tech-notes/chaos-in-rust-community',
        },
        {
          text: '通配符（Globbing）和正则表达式（Regular Expression）的异同',
          link: '/tech-notes/globbing-and-regex',
        },
        {
          text: '一次无事生非的工具切换尝试',
          link: '/tech-notes/giving-up-migrating-my-code-editor',
        },
        {
          text: '从命令式（Imperative）到声明式（Declarative）',
          link: '/tech-notes/from-imperative-to-declarative',
        },
        {
          text: '编程中的性能损耗（Overhead）',
          link: '/tech-notes/overhead-in-programming',
        },
        {
          text: '什么是 Advent of Code',
          link: '/tech-notes/what-is-aoc',
        }
      ],
    },
    {
      text: 'Code Snippets',
      items: [
        {
          text: 'JavaScript / TypeScript',
          link: '/tech-notes/code-snippets/js',
        },
      ],
    },
  ],
}
