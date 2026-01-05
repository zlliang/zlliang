import { format } from "date-fns"

export type Lang = typeof languages[number]

const languages = ["en", "zh"] as const

/** Creates a i18n translation function */
export function createI18n(lang: Lang) {
  /** Translation function */
  function t(key: keyof typeof messages[Lang], ...args: any[]) {
    const message = messages[lang][key] ?? messages["en"][key]
    return typeof message === "function"
      ? (message as (...args: any[]) => string)(...args)
      : message
  }

  return t
}

const messages = {
  en: {
    // Website
    "code": "en",
    "ui.name": "Zilong Liang",
    "ui.siteTitle": "Zilong Liang",
    "ui.pageTitle": (title?: string) => title ? `${title} - Zilong Liang` : "Zilong Liang",
    "ui.siteDescription": "Personal website of Zilong Liang",
    "ui.total": (total: number) => `${total} in total`,
    "ui.date": (date: Date) => format(date, "MMM d, yyyy"),
    "ui.pagination": (currentPage: number, lastPage: number) => `Page ${currentPage} / ${lastPage}`,
    "ui.untitled": "Untitled",
    "ui.aside.recentPosts": "Recent posts",
    "ui.aside.archive": "Archive",
    "ui.footer.builtWith.prefix": "Built with",
    "ui.footer.builtWith.suffix": "",
    "ui.draft": "Draft",
    // Notes
    "notes": "Notes",
    "notes.pageTitle": (no: number, title?: string) => [title, `Note #${no}`].filter(Boolean).join(" - "),
    "notes.next": "Next",
    "notes.prev": "Previous",
    "notes.total": (total: number) => `${total} ${total >=2 ? "notes" : "note"} in total`,
    "notes.notFound": "No notes found.",
    "notes.untitled": "Untitled note",
    "notes.more": (total: number) => `More notes (${total} in total)`,
    "notes.readFullPost": "Read the full post",
    "notes.categories": "Categories",
    "notes.categories.indexTitle": "Note Categories",
    "notes.categories.pageTitle": (category: string) => `${category} Notes`,
    "notes.categories.notFound": "No categories found.",
    "notes.categories.regular": "Regular",
    "notes.categories.link": "Link",
    "notes.categories.quote": "Quote",
    "notes.categories.til": "TIL (Today I Learned)",
    "notes.categories.post": "Post",
    "notes.tags": "Tags",
    "notes.tags.indexTitle": "Note Tags",
    "notes.tags.pageTitle": (tag: string) => `Notes on "${tag}"`,
    "notes.tags.notFound": "No tags found.",
    // Posts
    "posts": "Posts",
    "posts.total": (total: number) => `${total} ${total >=2 ? "posts" : "post"} in total`,
    "posts.notFound": "No posts found.",
    "posts.tableOfContents": "Table of contents",
    // Tags
  },
  zh: {
    // Website
    "code": "zh-Hans",
    "ui.name": "梁子龙",
    "ui.siteTitle": "梁子龙",
    "ui.pageTitle": (title?: string) => title ? `${title} - 梁子龙` : "梁子龙",
    "ui.siteDescription": "梁子龙的个人网站",
    "ui.total": (total: number) => `共 ${total} 个`,
    "ui.date": (date: Date) => format(date, "yyyy-MM-dd"),
    "ui.pagination": (currentPage: number, lastPage: number) => `页面 ${currentPage} / ${lastPage}`,
    "ui.untitled": "无标题",
    "ui.aside.recentPosts": "最近的文章",
    "ui.aside.archive": "所有内容",
    "ui.footer.builtWith.prefix": "使用",
    "ui.footer.builtWith.suffix": "构建",
    "ui.draft": "草稿",
    // Notes
    "notes": "笔记",
    "notes.pageTitle": (no: number, title?: string) => [title, `笔记 #${no}`].filter(Boolean).join(" - "),
    "notes.next": "下一则",
    "notes.prev": "上一则",
    "notes.total": (total: number) => `共 ${total} 则笔记`,
    "notes.notFound": "没有找到笔记。",
    "notes.untitled": "无标题笔记",
    "notes.more": (total: number) => `查看更多笔记 (${total} 则)`,
    "notes.readFullPost": "阅读完整文章",
    "notes.categories": "分类",
    "notes.categories.indexTitle": "笔记分类",
    "notes.categories.pageTitle": (category: string) => `${category}笔记`,
    "notes.categories.notFound": "没有找到分类。",
    "notes.categories.regular": "常规",
    "notes.categories.link": "链接",
    "notes.categories.quote": "引用",
    "notes.categories.til": "今日所学",
    "notes.categories.post": "文章",
    "notes.tags": "标签",
    "notes.tags.indexTitle": "笔记标签",
    "notes.tags.pageTitle": (tag: string) => `关于"${tag}"的笔记`,
    "notes.tags.notFound": "没有找到标签。",
    // Posts
    "posts": "文章",
    "posts.total": (total: number) => `共 ${total} 篇文章`,
    "posts.notFound": "没有找到文章。",
    "posts.tableOfContents": "目录",
  },
} as const
