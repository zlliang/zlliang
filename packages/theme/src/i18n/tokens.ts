export interface Tokens {
  // Locale
  lang: string
  formatDate: (date: Date) => string

  // Search
  searchPlaceholder: string
  searchAriaLabel: string
  searchTitle: string
  searchTitleWithQuery: (query: string) => string
  searchSubtitleEmpty: string
  searchSubtitleCount: (count: number) => string
  searchSortedBy: string
  searchSortRelevance: string
  searchSortDate: string
  searchNoResults: (query: string) => string

  // Navigation
  about: string
  explore: string
  archive: string
  back: string
  next: string
  previous: string
  morePostsBackToAll: string
  backToAllNotes: string
  backToYear: (year: number) => string
  backToMonth: (date: Date) => string
  backToAllSeries: string

  // Content labels and counts
  notes: string
  posts: string
  series: string
  notesUnit: (count: number) => string
  postsUnit: (count: number) => string
  seriesUnit: (count: number) => string
  notesCountSubtitle: (count: number) => string
  postsCountSubtitle: (count: number) => string
  seriesCountSubtitle: (count: number) => string
  postsInSeriesUnit: (count: number) => string

  // Notes
  noteDraft: string
  noteUntitled: string
  notesEmpty: string
  noteIdLabel: (number: number) => string
  moreNotes: (count: number) => string
  notesIndexTitle: string
  notesYearTitle: (year: number) => string
  notesMonthTitle: (date: Date) => string
  notesDayTitle: (date: Date) => string

  // Posts
  pinnedPosts: string
  recentPosts: string
  postDraft: string
  postsEmpty: string
  readPost: string
  postsTitle: string
  tableOfContents: string

  // Series
  seriesEmpty: string
  seriesTitle: string
  partOfSeries: string
  oldestFirst: string

  // Archive
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
  notFoundBack: string
  imageTitle: (caption: string | null | undefined) => string
}
