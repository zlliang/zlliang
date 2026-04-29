import { format } from "date-fns"

import type { Tokens } from "../tokens"

const tokens: Tokens = {
  // Locale
  lang: "en",
  formatDate: (date) => format(date, "PP"),

  // Search
  search: "Search",
  searchPlaceholder: "Search across notes and posts",
  searchAriaLabel: "Search",
  searchTitle: "Search",
  searchTitleWithQuery: (q) => `Search results for "${q}"`,
  searchSubtitleEmpty: "Please enter a search query",
  searchSubtitleCount: (n) => `${n} total`,
  searchSortedBy: "Sorted by",
  searchSortRelevance: "relevance",
  searchSortDate: "date",
  searchNoResults: (q) => `No notes found for "${q}".`,

  // Navigation
  about: "About",
  explore: "Explore",
  archive: "Archive",
  back: "Back",
  next: "Next",
  previous: "Previous",
  morePostsBackToAll: "Back to all posts",
  backToAllNotes: "Back to all notes",
  backToYear: (year) => `Back to ${year}`,
  backToMonth: (date) => `Back to ${format(date, "MMMM yyyy")}`,
  backToAllSeries: "Back to all series",

  // Content labels and counts
  notes: "Notes",
  posts: "Posts",
  series: "Series",
  notesUnit: (n) => `${n} total`,
  postsUnit: (n) => `${n} total`,
  seriesUnit: (n) => `${n} series`,
  notesCountSubtitle: (n) => `${n} total`,
  postsCountSubtitle: (n) => `${n} total`,
  seriesCountSubtitle: (n) => `${n} total`,
  postsInSeriesUnit: (n) => `${n} posts in this series`,

  // Notes
  noteDraft: "Draft",
  noteUntitled: "Untitled note",
  notesEmpty: "No notes found.",
  noteIdLabel: (n) => `Note #${n}`,
  moreNotes: (n) => `More notes (${n} total)`,
  notesIndexTitle: "Notes",
  notesYearTitle: (year) => `Notes in ${year}`,
  notesMonthTitle: (date) => `Notes in ${format(date, "MMMM yyyy")}`,
  notesDayTitle: (date) => `Notes on ${format(date, "PP")}`,

  // Posts
  pinnedPosts: "Pinned posts",
  recentPosts: "Recent posts",
  postDraft: "Draft",
  postsEmpty: "No posts found.",
  readPost: "Read the full post",
  postsTitle: "Posts",
  tableOfContents: "On this page",

  // Series
  seriesEmpty: "No series found.",
  seriesTitle: "Series",
  partOfSeries: "Part of the series:",
  oldestFirst: "Oldest first",

  // Archive
  yearsLabel: "Years",
  yearLabel: (year) => `${year}`,
  monthYearLabel: (date) => format(date, "MMMM yyyy"),
  monthShortLabel: (date) => format(date, "MMM"),

  // Heatmap
  heatmapTitle: "Writing journey",
  heatmapEmpty: (date) => `No writing on ${format(date, "MMM d, yyyy")}`,
  heatmapNoteOnly: (n, date) => `${n} ${n === 1 ? "note" : "notes"} on ${format(date, "MMM d, yyyy")}`,
  heatmapPostOnly: (n, date) => `${n} ${n === 1 ? "post" : "posts"} on ${format(date, "MMM d, yyyy")}`,
  heatmapNoteAndPost: (notes, posts, date) => `${notes} ${notes === 1 ? "note" : "notes"} with ${posts} ${posts === 1 ? "post" : "posts"} on ${format(date, "MMM d, yyyy")}`,

  // Page chrome
  author: "Zilong Liang",
  builtWithPrefix: "Built with",
  builtWithSuffix: "",
  pageLabel: "Page",
  notFoundBack: "Back to home",
  imageTitle: (caption) => (caption ? `Image: ${caption}` : "Image"),
}

export default tokens
