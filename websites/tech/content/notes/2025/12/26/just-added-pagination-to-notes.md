---
no: 10
title: Just added pagination to notes
created: 2025-12-26
category: regular
tags: [Astro, blogging, releases]
---

I just added pagination to note pages like [/notes](/notes) and [/notes/categories/link](/notes/categories/link), as the number of notes grows. Each page now shows up to 20 notes, and a tiny pagination indicator lets you navigate between pages without scrolling endlessly. I used [Astro's built-in pagination feature](https://docs.astro.build/en/guides/routing/#pagination). Here's the commit: [zlliang/zlliang@0b22dda](https://github.com/zlliang/zlliang/commit/0b22dda7077d7db7eaa7304ef9d11fefcc7f3a4b).

<div class="image-grid">

![Pagination indicator on the notes page](./images/pagination-indicator-on-the-note-pages.png "Pagination indicator on the notes page")

![Pagination indicator on the notes page](./images/pagination-indicator-on-the-index-page.png "Pagination indicator on the index page, guiding you to the second page of notes")

</div>
