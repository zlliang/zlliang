import { type DefaultTheme } from "vitepress"

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "🏡 生活",
    activeMatch: "/life/",
    items: [{ text: "首页 - 洋屁君的生活瞬间", link: "/life/" }],
  },
  {
    text: "📚 书房",
    activeMatch: "/reading/",
    items: [{ text: "首页 - 洋屁君的书房", link: "/reading/" }],
  },
  {
    text: "🎮 游戏",
    activeMatch: "/game/",
    items: [{ text: "首页 - 洋屁君的游戏小窝", link: "/game/" }],
  },
  {
    text: "🛠️ 技术",
    activeMatch: "/tech/",
    items: [{ text: "首页 - 洋屁君的技术笔记", link: "/tech/" }],
  },
  {
    text: "关于洋屁君",
    activeMatch: "/about/",
    items: [
      { text: "🤔 洋屁君是谁", link: "/about/" },
      { text: "🤯 在忙什么", link: "/about/plan/" },
      { items: [{ text: "📃 历史档案", link: "/about/history" }] },
    ],
  },
]

export const sidebar: DefaultTheme.Sidebar = {
  "/tech/": [
    { text: "首页 - 洋屁君的技术笔记 ", link: "/tech/" },
    {
      text: "文章",
      collapsed: false,
      items: [
        {
          text: "我的个人网站，2023 版",
          link: "/tech/my-website-version-2023.md",
        },
      ],
    },
  ],
  "/about/plan/": [
    { text: "🤯 洋屁君在忙什么？", link: "/about/plan/" },
    {
      text: "已经忙完的",
      items: [
        {
          text: "更新记录 2023-02-13",
          link: "/about/plan/update-log-2023-02-13",
        },
      ],
    },
  ],
}
