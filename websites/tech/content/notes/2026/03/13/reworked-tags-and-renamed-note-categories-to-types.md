---
no: 43
title: Reworked tags and renamed note categories to types
created: 2026-03-13
type: regular
---

I just finished another round of cleanup on my https://tech.zlliang.me and https://days.zlliang.me websites. This time I reworked the note tags across both sites, aiming for a smaller and more durable taxonomy that better reflects long-term themes instead of one-off entities.

At the same time, I renamed the note `category` field to `type` for both websites. The canonical page is now [/notes/types](/notes/types). This is a small breaking change, but I think the new naming is clearer.

Recently, I've started using [Codex](https://openai.com/codex) and [GPT-5.4](https://openai.com/index/introducing-gpt-5-4/) heavily. They did an excellent job helping me complete this work and saved me a lot of time. Here are the commits: [zlliang/zlliang@a29aa0d](https://github.com/zlliang/zlliang/commit/a29aa0dfba5aacdcee4dedca593ea82ce314e4b3) and [zlliang/zlliang@22cf364](https://github.com/zlliang/zlliang/commit/22cf364b7c67d61cf74a69ff9f7596af12b1a036).

<div class="update-note">

**Update Mar 22, 2026:** This introduced URL-level breaking changes, but I later added middleware-based redirects so old `/notes/categories/...` URLs continue to work. That should also help search engines consolidate signals more cleanly toward the new `/notes/types/...` routes.

</div>
