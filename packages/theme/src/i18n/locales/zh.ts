import { format } from "date-fns"

import type { Tokens } from "../tokens"

const tokens: Tokens = {
  // Locale
  lang: "zh",
  formatDate: (date) => format(date, "yyyy 年 M 月 d 日"),

  // Search
  searchTitle: "搜索",
  searchTitleWithQuery: (q) => `搜索「${q}」的结果`,
  searchSubtitleEmpty: "请输入搜索关键词",
  searchSubtitleCount: (n) => `共 ${n} 则`,
  searchPlaceholder: "搜索手记与文章",
  searchSortedBy: "排序方式",
  searchSortRelevance: "相关度",
  searchSortDate: "日期",
  searchNoResults: (q) => `没有找到与「${q}」相关的内容。`,

  // Notes
  notes: "手记",
  noteUntitled: "无题手记",
  notesUnit: (n) => `${n} 则`,
  notesCountSubtitle: (n) => `共 ${n} 则`,
  notesEmpty: "暂无手记。",
  noteIdLabel: (n) => `手记 #${n}`,
  moreNotes: (n) => `更多手记 (共 ${n} 则)`,
  notesYearTitle: (year) => `${year} 年手记`,
  notesMonthTitle: (date) => `${format(date, "yyyy 年 M 月")}手记`,
  notesDayTitle: (date) => format(date, "yyyy 年 M 月 d 日手记"),
  backToAllNotes: "返回全部手记",
  backToYear: (year) => `返回 ${year} 年`,
  backToMonth: (date) => `返回 ${format(date, "M 月")}`,
  nextNote: "下一则",
  previousNote: "上一则",

  // Posts
  posts: "文章",
  postsUnit: (n) => `${n} 篇`,
  postsCountSubtitle: (n) => `共 ${n} 篇`,
  postsEmpty: "暂无文章。",
  pinnedPosts: "置顶文章",
  recentPosts: "近期文章",
  tableOfContents: "目录",
  backToAllPosts: "返回全部文章",
  readPost: "阅读全文",
  nextPost: "下一篇",
  previousPost: "上一篇",

  // Series
  series: "系列",
  seriesUnit: (n) => `${n} 个系列`,
  seriesCountSubtitle: (n) => `共 ${n} 个`,
  postsInSeriesUnit: (n) => `系列文章共 ${n} 篇`,
  seriesEmpty: "暂无系列。",
  partOfSeries: "连载于系列：",
  oldestFirst: "按时间顺序排列",
  backToAllSeries: "返回全部系列",

  // Archive
  archive: "归档",
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
  explore: "探索",
  back: "返回",
  draft: "草稿",
  notFoundBack: "返回首页",
  imageTitle: (caption) => (caption ? `图片：${caption}` : "图片"),
}

export default tokens
