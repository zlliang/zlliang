export interface Tokens {
  /** `<html lang>` value */
  htmlLocale: string
  /** Locale tag for `Intl.Segmenter` */
  segmenterLocale: string

  // Search
  search: string
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

  // Header
  about: string

  // Aside / counts
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

  pinnedPosts: string
  recentPosts: string
  explore: string
  archive: string
  yearsLabel: string
  yearLabel: (year: number) => string
  monthYearLabel: (date: Date) => string
  monthShortLabel: (date: Date) => string
  otherSide: string

  // Content states
  noteDraft: string
  postDraft: string
  noteUntitled: string
  notesEmpty: string
  postsEmpty: string
  seriesEmpty: string
  readPost: string
  partOfSeries: string
  oldestFirst: string

  // 404 / image
  notFoundBack: string
  back: string
  imageTitle: (caption: string | null | undefined) => string

  // Footer / pagination
  builtWithPrefix: string
  builtWithSuffix: string
  pageLabel: string

  // Adjacency / nav
  next: string
  previous: string
  noteIdLabel: (number: number) => string
  morePostsBackToAll: string
  backToAllNotes: string
  backToYear: (year: number) => string
  backToMonth: (date: Date) => string
  backToAllSeries: string
  moreNotes: (count: number) => string

  // Page titles
  notesIndexTitle: string
  notesYearTitle: (year: number) => string
  notesMonthTitle: (date: Date) => string
  notesDayTitle: (date: Date) => string
  postsTitle: string
  seriesTitle: string
  tableOfContents: string

  // Heatmap
  heatmapTitle: string
  heatmapEmpty: (date: Date) => string
  heatmapNoteOnly: (count: number, date: Date) => string
  heatmapPostOnly: (count: number, date: Date) => string
  heatmapNoteAndPost: (notes: number, posts: number, date: Date) => string

  // Date formatting
  formatDate: (date: Date) => string
  formatDateLong: (date: Date) => string
  formatDateForGroup: (date: Date) => string
}
