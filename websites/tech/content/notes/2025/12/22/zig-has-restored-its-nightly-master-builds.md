---
no: 6
title: Zig has restored its nightly master builds
created: 2025-12-22
category: regular
tags: [Zig]
---

Since [Zig](https://ziglang.org/) hasn't hit 1.0 and is still evolving rapidly, following the master branch is common practice for trying out new features and tracking where the language is heading.
Even its [release notes](https://ziglang.org/download/0.15.1/release-notes.html#This-Release-Contains-Bugs) say "working on a non-trivial project using Zig may require participating in the development process."

However, nightly master builds quietly stopped on November 26, 2025, when the Zig team announced the [migration from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/). I assumed the builds were provided by some automation tied to GitHub.

Today, I found that nightly master builds have resumed! The [download index JSON](https://ziglang.org/download/index.json) used by version managers like [ZVM](https://www.zvm.app/) is now being updated again, though the [download page](https://ziglang.org/download/) hasn't caught up yet.

Nevertheless, good news! I'm looking forward to trying out exciting [follow-ups](https://codeberg.org/ziglang/zig/issues/30150) on the [new async I/O](https://andrewkelley.me/post/zig-new-async-io-text-version.html).

![Zig download page](./images/zig-download-page.png)

**Update Dec 23, 2025:** The download page is now updating again!
