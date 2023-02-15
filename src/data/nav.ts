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
  "/about/plan/": [
    { text: "🤯 洋屁君在忙什么？", link: "/about/plan/" },
    {
      text: "已经忙完的",
      items: [
        {
          text: "洋屁君的初始化：搭建我的 2023 版个人网站",
          link: "/about/plan/foreignfart-version-2023",
        },
      ],
    },
  ],
}
