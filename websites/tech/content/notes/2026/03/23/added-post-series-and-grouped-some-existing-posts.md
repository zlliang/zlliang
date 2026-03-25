---
no: 58
title: Added post series and grouped some existing posts
created: 2026-03-23
type: regular
---

I just added support for **post series** on both https://tech.zlliang.me and https://days.zlliang.me. There is now a [/posts/series](/posts/series) index page, each series has its own page, and individual post pages can show the other posts in the same series in the sidebar.

This felt worth adding because some posts are clearly part of a longer thread rather than standalone pieces. On the `tech` site, [Starting a Blog at the End of 2025](/posts/2025/12/25/starting-a-blog-at-the-end-of-2025) and [Splitting My Websites and Finalizing My Writing Framework](/posts/2026/01/13/splitting-my-websites-and-finalizing-my-writing-framework) are now grouped under [How I Write](/posts/series/how-i-write). On the `days` site, my January and February monthly posts are now grouped under the [Life Monthly](https://days.zlliang.me/posts/series/life-monthly) series.

The commit is [zlliang/zlliang@e858356](https://github.com/zlliang/zlliang/commit/e858356d3fabde7f212909b339a44349b0a0884e), which also closed [issue #79](https://github.com/zlliang/zlliang/issues/79). Unlike several recent blog infrastructure changes, this one was surprisingly mostly handwritten. I only used a coding agent for a few small parts.
