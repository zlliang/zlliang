---
number: 78
title: Turned my Astro theme into an integration
created: 2026-04-29
---

Over the past four days, I completed a relatively large refactor of my websites: extracting the theme shared across [zlliang.me](https://zlliang.me), [mesh.zlliang.me](https://mesh.zlliang.me), and [muse.zlliang.me](https://muse.zlliang.me) into an Astro integration (GitHub issue [#80](https://github.com/zlliang/zlliang/issues/80))!

As I said in [one of the previous posts](https://mesh.zlliang.me/posts/2026/01/13/splitting-my-websites-and-finalizing-my-writing-framework), when I split my website from one piece into three, I simply duplicated the original blog's codebase. This led to a maintenance burden: every time I wanted to add features, update styles, or fix issues, I had to write nearly identical code across all three websites.

Simply put, the codebase violated the DRY principle severely.

To make the codebase more elegant, and ambitiously speaking, to leave open the possibility that one day my theme could be productized as an open-source Astro theme, I decided to extract the shared logic as an Astro integration. By the way, this idea is largely inspired by [Starlight](https://starlight.astro.build/), Astro's official documentation theme.

I used PR [#84](https://github.com/zlliang/zlliang/pull/84) to track this refactor. It took 26 commits to get me there. The refactor doesn't affect the websites' experience at all; it only makes the repo better-organized and makes future development simpler.

In this agentic engineering era, unsurprisingly this work was done mainly by [Amp](https://ampcode.com/), my favorite coding agent, though roughly 15% was still coded by hand. Astonishingly, it took me **23 threads** and **$92.82 ($33.51 free credits included)** to finish all the work. See this thread for the full analysis: [Analyze Amp usage and cost](https://github.com/zlliang/zlliang/pull/84).

I feel good about merging the refactor now, but I already have next steps in mind: productizing it into a polished, reusable Astro theme. I've opened issue [#86](https://github.com/zlliang/zlliang/issues/86) to track the follow-up tasks.
