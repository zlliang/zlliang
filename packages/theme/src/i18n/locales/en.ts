import { format } from "date-fns"

import type { Tokens } from "../tokens"

const tokens: Tokens = {
  // Locale
  lang: "en",
  formatDate: (date) => format(date, "PP"),

  // Search
  searchTitle: "Search",
  searchTitleWithQuery: (q) => `Search results for "${q}"`,
  searchSubtitleEmpty: "Please enter a search query",
  searchSubtitleCount: (n) => `${n} total`,
  searchPlaceholder: "Search across notes and posts",
  searchSortedBy: "Sorted by",
  searchSortRelevance: "relevance",
  searchSortDate: "date",
  searchNoResults: (q) => `No content found for "${q}".`,

  // Notes
  notes: "Notes",
  noteUntitled: "Untitled note",
  notesUnit: (n) => `${n} total`,
  notesCountSubtitle: (n) => `${n} total`,
  notesEmpty: "No notes found.",
  noteIdLabel: (n) => `Note #${n}`,
  moreNotes: (n) => `More notes (${n} total)`,
  notesYearTitle: (year) => `Notes in ${year}`,
  notesMonthTitle: (date) => `Notes in ${format(date, "MMMM yyyy")}`,
  notesDayTitle: (date) => `Notes on ${format(date, "PP")}`,
  backToAllNotes: "Back to all notes",
  backToYear: (year) => `Back to ${year}`,
  backToMonth: (date) => `Back to ${format(date, "MMMM yyyy")}`,
  nextNote: "Next note",
  previousNote: "Previous note",

  // Posts
  posts: "Posts",
  postsUnit: (n) => `${n} total`,
  postsCountSubtitle: (n) => `${n} total`,
  postsEmpty: "No posts found.",
  pinnedPosts: "Pinned posts",
  recentPosts: "Recent posts",
  tableOfContents: "On this page",
  backToAllPosts: "Back to all posts",
  readPost: "Read the full post",
  nextPost: "Next post",
  previousPost: "Previous post",

  // Series
  series: "Series",
  seriesUnit: (n) => `${n} series`,
  seriesCountSubtitle: (n) => `${n} total`,
  postsInSeriesUnit: (n) => `${n} posts in this series`,
  viewAllPostsInSeries: (n) => `View all ${n} posts in this series`,
  seriesEmpty: "No series found.",
  partOfSeries: "Part of the series: ",
  oldestFirst: "Oldest first",
  backToAllSeries: "Back to all series",

  // Archive
  archive: "Archive",
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
  explore: "Explore",
  back: "Back",
  draft: "Draft",
  notFoundBack: "Back to home",
  imageTitle: (caption) => (caption ? `Image: ${caption}` : "Image"),
}

export default tokens
