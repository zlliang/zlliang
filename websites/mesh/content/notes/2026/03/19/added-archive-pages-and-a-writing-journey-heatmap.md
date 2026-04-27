---
number: 54
title: Added archive pages and a writing journey heatmap
created: 2026-03-19
---

I just finished a fairly big notes-navigation refresh for both [https://tech.zlliang.me](https://tech.zlliang.me) and [https://days.zlliang.me](https://days.zlliang.me). Archive pages by year, month, and day are now fully in place, and the sidebar now has a "Writing journey" heatmap.

This makes the notes feel much easier to browse as a body of work instead of a flat reverse-chronological list. For example, visit [/notes/2026](/notes/2026) for notes in 2026, [/notes/2026/03](/notes/2026/03) for notes in March 2026, and [/notes/2026/03/19](/notes/2026/03/19) for notes on Mar 19, 2026. Each cell in the heatmap takes you to the archive page for that specific day.

<div class="image-grid">

![The "Writing journey" heatmap in the sidebar, with links to archive pages by year available from the main /notes archive page](./images/notes-archive-and-heatmap.png)

![A monthly archive page, where you can switch to other months or jump to a specific day in the current month](./images/archive-for-months.png)

</div>

The work happened in two commits: [zlliang/zlliang@9ed325f](https://github.com/zlliang/zlliang/commit/9ed325f2f23be6d2fb526664ede57dacb9b4d3c6) and [zlliang/zlliang@9786f32](https://github.com/zlliang/zlliang/commit/9786f32233caba4f7ba2dd81fbef17033c9049d8). Most of the implementation was done with help from the [Codex app](https://openai.com/codex) and [Amp](https://ampcode.com).

<div class="update-note">

**Update Mar 30, 2026:** In late March, I renamed my two journal websites. They are now Hack [https://hack.zlliang.me](https://hack.zlliang.me) and Muse [https://muse.zlliang.me](https://muse.zlliang.me). See: [Renamed the two journal websites to Hack and Muse](/notes/2026/03/30/renamed-the-two-journal-websites-to-hack-and-muse).

**Update Apr 27, 2026:** I renamed the English site again — Hack is now Mesh at [https://mesh.zlliang.me](https://mesh.zlliang.me). The previous `hack.zlliang.me` redirects to the new domain. See: [Renamed Hack to Mesh](/notes/2026/04/27/renamed-hack-to-mesh).

</div>
