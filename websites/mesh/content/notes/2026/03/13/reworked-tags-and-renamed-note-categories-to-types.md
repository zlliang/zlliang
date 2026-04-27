---
number: 43
title: Reworked tags and renamed note categories to types
created: 2026-03-13
---

I just finished another round of cleanup on my [https://tech.zlliang.me](https://tech.zlliang.me) and [https://days.zlliang.me](https://days.zlliang.me) websites. This time I reworked the note tags across both sites, aiming for a smaller and more durable taxonomy that better reflects long-term themes instead of one-off entities.

At the same time, I renamed the note `category` field to `type` for both websites. The canonical page is now [/notes/types](/notes/types). This is a small breaking change, but I think the new naming is clearer.

Recently, I've started using [Codex](https://openai.com/codex) and [GPT-5.4](https://openai.com/index/introducing-gpt-5-4/) heavily. They did an excellent job helping me complete this work and saved me a lot of time. Here are the commits: [zlliang/zlliang@1e0c72b](https://github.com/zlliang/zlliang/commit/1e0c72b7860e952286dda1248de48384f16e3e20) and [zlliang/zlliang@97fb17a](https://github.com/zlliang/zlliang/commit/97fb17ac0016084dab0de7f9b0f24058df199174).

<div class="update-note">

**Update Mar 22, 2026:** This introduced URL-level breaking changes, but I later added middleware-based redirects so old `/notes/categories/...` URLs continue to work. That should also help search engines consolidate signals more cleanly toward the new `/notes/types/...` routes.

**Update Mar 30, 2026:** In late March, I renamed my two journal websites. They are now Hack [https://hack.zlliang.me](https://hack.zlliang.me) and Muse [https://muse.zlliang.me](https://muse.zlliang.me). See: [Renamed the two journal websites to Hack and Muse](/notes/2026/03/30/renamed-the-two-journal-websites-to-hack-and-muse).

**Update Apr 25, 2026:** I removed note types entirely. The `/notes/types` page is gone, and old `/notes/types/...` and `/notes/categories/...` URLs now redirect to `/notes`. See: [Eliminated note types](/notes/2026/04/25/eliminated-note-types).

**Update Apr 27, 2026:** I renamed the English site again — Hack is now Mesh at [https://mesh.zlliang.me](https://mesh.zlliang.me). The previous `hack.zlliang.me` redirects to the new domain. See: [Renamed Hack to Mesh](/notes/2026/04/27/renamed-hack-to-mesh).

</div>
