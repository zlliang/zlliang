---
no: 60
title: Rewrote git history to cut image bloat
created: 2026-03-25
type: regular
---

I just finished a full Git history cleanup for my website monorepo, mainly to remove oversized historical image blobs.

The result is much better than I expected:

- Total repo size dropped from about **2092 MB** to **530 MB** (about **-74.65%**)
- `.git` dropped from about **584 MB** to **78 MB** (about **-86.60%**)
- History image blobs dropped from about **562 MB** to **66 MB** (about **-88.27%**)
- Tracked working-tree files stayed effectively unchanged in count and volume

So the cleanup mostly removed historical baggage without changing current content.

Because this was a real history rewrite, **all commit hashes changed**. I also updated commit references in my existing notes, including links in the `zlliang/zlliang@xxxxxxx` format and corresponding GitHub commit URLs. In total, this rewrite refreshed commit links across multiple notes to keep them accurate after migration.

The follow-up commit that finalized these note-link updates is [zlliang/zlliang@1c3c5af](https://github.com/zlliang/zlliang/commit/1c3c5af8446564982d40451da6ae3baaf6b58e5b).

After the migration, I also simplified my image workflow and added a `pre-commit` hook that automatically optimizes newly added images to a consistent baseline (size, edge limit, and quality ladder), so future image growth is controlled before commits land. That setup was shipped in [zlliang/zlliang@c139c11](https://github.com/zlliang/zlliang/commit/c139c1103453420918a229d84af14873d70d23ee).

At runtime, I will still rely on Vercel's image optimization pipeline to serve appropriate image variants for different devices and viewport sizes.

Most of the migration scripting, validation, and cleanup flow in this round was completed with help from [Amp](https://ampcode.com).
