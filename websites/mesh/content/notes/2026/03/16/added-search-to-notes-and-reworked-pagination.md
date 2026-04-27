---
number: 48
title: Added search to notes and reworked pagination
created: 2026-03-16
---

I just added a search page for notes on both [https://tech.zlliang.me](https://tech.zlliang.me) and [https://days.zlliang.me](https://days.zlliang.me). There is now a search button in the header, plus a small search form in the sidebar on larger screens and on the home page on mobile. The search indexes note titles and bodies, and for post notes it also includes the full content of the related post. The implementation uses [MiniSearch](https://github.com/lucaong/minisearch).

![Enjoy the search feature!](./images/search.png)

While doing this, I also reworked note pagination across both sites. Instead of URLs like `/notes/2`, note archive pages now use query parameters such as `/notes?page=2` and `/notes/types/link?page=2`. I wanted the pagination model to be simpler and closer to common blog conventions, especially after reading Google's [documentation on pagination](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading).

The commit is [zlliang/zlliang@5388c6d](https://github.com/zlliang/zlliang/commit/5388c6d21de694d238f18a08254bacfca83e6ff8), which also closed [issue #72](https://github.com/zlliang/zlliang/issues/72).

<div class="update-note">

**Update Mar 22, 2026:** This pagination change also changed note archive URLs, but I later added middleware-based redirects so legacy paths such as `/notes/2` still resolve to the new query-parameter URLs. That should also make it easier for search engines to consolidate the old pagination routes.

**Update Mar 30, 2026:** In late March, I renamed my two journal websites. They are now Hack [https://hack.zlliang.me](https://hack.zlliang.me) and Muse [https://muse.zlliang.me](https://muse.zlliang.me). See: [Renamed the two journal websites to Hack and Muse](/notes/2026/03/30/renamed-the-two-journal-websites-to-hack-and-muse).

**Update Apr 25, 2026:** I removed note types entirely, so the `/notes/types/link?page=2` URL referenced above no longer exists; type URLs now redirect to `/notes`. See: [Eliminated note types](/notes/2026/04/25/eliminated-note-types).

</div>
