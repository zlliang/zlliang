import { format } from "date-fns"

import type { Tokens } from "../types"

const tokens: Tokens = {
  htmlLocale: "en",
  segmenterLocale: "en",

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

  about: "About",

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

  pinnedPosts: "Pinned posts",
  recentPosts: "Recent posts",
  explore: "Explore",
  archive: "Archive",
  yearsLabel: "Years",
  yearLabel: (year) => `${year}`,
  monthYearLabel: (date) => format(date, "MMMM yyyy"),
  monthShortLabel: (date) => format(date, "MMM"),
  otherSide: "The other side of me",

  noteDraft: "Draft",
  postDraft: "Draft",
  noteUntitled: "Untitled note",
  notesEmpty: "No notes found.",
  postsEmpty: "No posts found.",
  seriesEmpty: "No series found.",
  readPost: "Read the full post",
  partOfSeries: "Part of the series:",
  oldestFirst: "Oldest first",

  notFoundBack: "Back to home",
  back: "Back",
  imageTitle: (caption) => (caption ? `Image: ${caption}` : "Image"),

  builtWithPrefix: "Built with",
  builtWithSuffix: "",
  pageLabel: "Page",

  next: "Next",
  previous: "Previous",
  noteIdLabel: (n) => `Note #${n}`,
  morePostsBackToAll: "Back to all posts",
  backToAllNotes: "Back to all notes",
  backToYear: (year) => `Back to ${year}`,
  backToMonth: (date) => `Back to ${format(date, "MMMM yyyy")}`,
  backToAllSeries: "Back to all series",
  moreNotes: (n) => `More notes (${n} total)`,

  notesIndexTitle: "Notes",
  notesYearTitle: (year) => `Notes in ${year}`,
  notesMonthTitle: (date) => `Notes in ${format(date, "MMMM yyyy")}`,
  notesDayTitle: (date) => `Notes on ${format(date, "PP")}`,
  postsTitle: "Posts",
  seriesTitle: "Series",
  tableOfContents: "On this page",

  heatmapTitle: "Writing journey",
  heatmapEmpty: (date) => `No writing on ${format(date, "MMM d, yyyy")}`,
  heatmapNoteOnly: (n, date) => `${n} ${n === 1 ? "note" : "notes"} on ${format(date, "MMM d, yyyy")}`,
  heatmapPostOnly: (n, date) => `${n} ${n === 1 ? "post" : "posts"} on ${format(date, "MMM d, yyyy")}`,
  heatmapNoteAndPost: (notes, posts, date) =>
    `${notes} ${notes === 1 ? "note" : "notes"} with ${posts} ${posts === 1 ? "post" : "posts"} on ${format(date, "MMM d, yyyy")}`,

  formatDate: (date) => format(date, "PP"),
  formatDateLong: (date) => format(date, "PP"),
  formatDateForGroup: (date) => format(date, "PP"),
}

export default tokens
