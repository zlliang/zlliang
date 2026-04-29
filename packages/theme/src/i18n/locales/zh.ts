import { format } from "date-fns"

import type { Tokens } from "../tokens"

const tokens: Tokens = {
  // Locale
  lang: "zh",
  formatDate: (date) => format(date, "yyyy 年 M 月 d 日"),

  // Search
  search: "搜索",
  searchPlaceholder: "搜索手记与文章",
  searchAriaLabel: "搜索",
  searchTitle: "搜索",
  searchTitleWithQuery: (q) => `搜索「${q}」的结果`,
  searchSubtitleEmpty: "请输入搜索关键词",
  searchSubtitleCount: (n) => `共 ${n} 则`,
  searchSortedBy: "排序方式",
  searchSortRelevance: "相关度",
  searchSortDate: "日期",
  searchNoResults: (q) => `没有找到与「${q}」相关的手记。`,

  // Navigation
  about: "关于",
  explore: "探索",
  archive: "归档",
  back: "返回",
  next: "下一则",
  previous: "上一则",
  morePostsBackToAll: "返回全部文章",
  backToAllNotes: "返回全部手记",
  backToYear: (year) => `返回 ${year} 年`,
  backToMonth: (date) => `返回 ${format(date, "M 月")}`,
  backToAllSeries: "返回全部系列",

  // Content labels and counts
  notes: "手记",
  posts: "文章",
  series: "系列",
  notesUnit: (n) => `${n} 则`,
  postsUnit: (n) => `${n} 篇`,
  seriesUnit: (n) => `${n} 个系列`,
  notesCountSubtitle: (n) => `共 ${n} 则`,
  postsCountSubtitle: (n) => `共 ${n} 篇`,
  seriesCountSubtitle: (n) => `共 ${n} 个`,
  postsInSeriesUnit: (n) => `系列文章共 ${n} 篇`,

  // Notes
  noteDraft: "草稿",
  noteUntitled: "无题手记",
  notesEmpty: "暂无手记。",
  noteIdLabel: (n) => `第 ${n} 则手记`,
  moreNotes: (n) => `更多手记 (共 ${n} 则)`,
  notesIndexTitle: "手记",
  notesYearTitle: (year) => `${year} 年手记`,
  notesMonthTitle: (date) => `${format(date, "yyyy 年 M 月")}手记`,
  notesDayTitle: (date) => format(date, "yyyy 年 M 月 d 日手记"),

  // Posts
  pinnedPosts: "置顶文章",
  recentPosts: "近期文章",
  postDraft: "草稿",
  postsEmpty: "暂无文章。",
  readPost: "阅读全文",
  postsTitle: "文章",
  tableOfContents: "目录",

  // Series
  seriesEmpty: "暂无系列。",
  seriesTitle: "系列",
  partOfSeries: "连载于系列：",
  oldestFirst: "按时间顺序排列",

  // Archive
  yearsLabel: "年份",
  yearLabel: (year) => `${year} 年`,
  monthYearLabel: (date) => format(date, "yyyy 年 M 月"),
  monthShortLabel: (date) => format(date, "M 月"),

  // Heatmap
  heatmapTitle: "写作历程",
  heatmapEmpty: (date) => `${format(date, "yyyy 年 M 月 d 日")}：无写作`,
  heatmapNoteOnly: (n, date) => `${format(date, "yyyy 年 M 月 d 日")}：${n} 则手记`,
  heatmapPostOnly: (n, date) => `${format(date, "yyyy 年 M 月 d 日")}：${n} 篇文章`,
  heatmapNoteAndPost: (notes, posts, date) => `${format(date, "yyyy 年 M 月 d 日")}：${notes} 则手记 和 ${posts} 篇文章`,

  // Page chrome
  author: "梁子龙",
  builtWithPrefix: "使用",
  builtWithSuffix: "构建",
  pageLabel: "页面",
  notFoundBack: "返回首页",
  imageTitle: (caption) => (caption ? `图片：${caption}` : "图片"),
}

export default tokens
