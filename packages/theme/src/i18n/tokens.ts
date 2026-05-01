export interface Tokens {
  // Locale
  lang: string
  formatDate: (date: Date) => string

  // Search
  searchTitle: string
  searchTitleWithQuery: (query: string) => string
  searchSubtitleEmpty: string
  searchSubtitleCount: (count: number) => string
  searchPlaceholder: string
  searchSortedBy: string
  searchSortRelevance: string
  searchSortDate: string
  searchNoResults: (query: string) => string

  // Notes
  notes: string
  noteUntitled: string
  notesUnit: (count: number) => string
  notesCountSubtitle: (count: number) => string
  notesEmpty: string
  noteIdLabel: (number: number) => string
  moreNotes: (count: number) => string
  notesYearTitle: (year: number) => string
  notesMonthTitle: (date: Date) => string
  notesDayTitle: (date: Date) => string
  backToAllNotes: string
  backToYear: (year: number) => string
  backToMonth: (date: Date) => string
  nextNote: string
  previousNote: string

  // Posts
  posts: string
  postsUnit: (count: number) => string
  postsCountSubtitle: (count: number) => string
  postsEmpty: string
  pinnedPosts: string
  recentPosts: string
  tableOfContents: string
  backToAllPosts: string
  readPost: string
  nextPost: string
  previousPost: string

  // Series
  series: string
  seriesUnit: (count: number) => string
  seriesCountSubtitle: (count: number) => string
  postsInSeriesUnit: (count: number) => string
  viewAllPostsInSeries: (count: number) => string
  seriesEmpty: string
  partOfSeries: string
  oldestFirst: string
  backToAllSeries: string

  // Archive
  archive: string
  yearsLabel: string
  yearLabel: (year: number) => string
  monthYearLabel: (date: Date) => string
  monthShortLabel: (date: Date) => string

  // Heatmap
  heatmapTitle: string
  heatmapEmpty: (date: Date) => string
  heatmapNoteOnly: (count: number, date: Date) => string
  heatmapPostOnly: (count: number, date: Date) => string
  heatmapNoteAndPost: (notes: number, posts: number, date: Date) => string

  // Page chrome
  author: string
  builtWithPrefix: string
  builtWithSuffix: string
  pageLabel: string
  explore: string
  back: string
  draft: string
  notFoundBack: string
  imageTitle: (caption: string | null | undefined) => string
}
