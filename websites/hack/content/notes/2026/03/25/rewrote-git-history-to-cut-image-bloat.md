---
no: 60
title: Rewrote Git history to cut image bloat
created: 2026-03-25
type: regular
---

I just finished a full Git history cleanup for my website monorepo to remove oversized historical image blobs. I used to track full-size images in the repo, which is not sustainable as my blogs grow.

I used [`sharp`](https://github.com/lovell/sharp) with a consistent baseline (size, edge limit, and quality ladder) to optimize images before rewriting history. The result was substantial: the total repo size, including history blobs in `.git`, dropped from about **500+ MB** to **70+ MB** (about **-86%**).

This was a Git history rewrite with [`git-filter-repo`](https://github.com/newren/git-filter-repo), so **all commit hashes changed**. I also updated commit references in my existing notes, including links in the `zlliang/zlliang@xxxxxxx` format and corresponding GitHub commit URLs.

After the migration, I also added a `pre-commit` hook that automatically optimizes newly added images to the same baseline, so future image growth stays controlled during normal commits. That setup was shipped in [zlliang/zlliang@c139c11](https://github.com/zlliang/zlliang/commit/c139c1103453420918a229d84af14873d70d23ee). At runtime, I still rely on Vercel's [image optimization](https://vercel.com/docs/image-optimization) to serve appropriate image variants for different devices and viewport sizes.

Most of the migration scripting, validation, and cleanup in this round was completed with help from [Amp](https://ampcode.com).
