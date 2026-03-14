# Repository Guide

This repository contains Zilong's personal websites, shared packages, and a small set of root scripts. Use this file as the high-level map. Use the local skills for task-specific workflow.

## What lives here

- `websites/www`: bilingual landing site for `zlliang.me`
- `websites/tech`: English site for technical notes and posts
- `websites/days`: Chinese site for daily-life notes and posts
- `packages/rehype`: shared rehype plugins
- `packages/theme`: shared styles, utilities, and Astro components
- `scripts`: root commands for dev, build, and content operations

All websites are built with [Astro](https://astro.build/) and are deployed on [Vercel](https://vercel.com/).

## Content model

- `www` uses two collections:
  - `content/fragments/*.md` for reusable localized fragments
  - `content/places/places.json` for map and travel data
- `tech` and `days` share the same note/post model:
  - notes live under `content/notes/YYYY/MM/DD/slug.md`
  - post drafts live under `content/posts/drafts/slug.md`
  - published posts live under `content/posts/YYYY/MM/DD/slug.md`
- Schema source of truth is each site's `src/content.config.ts`
- Tag meaning source of truth is each site's `src/utils/tags.ts`

## Root commands

Run commands from the repository root.

```bash
pnpm dev <www|tech|days>
pnpm build <www|tech|days>
pnpm new <tech|days> <note|post> [--type <type>] [title]
pnpm ship <tech|days>
```

- Use the root scripts instead of hand-creating dated content files when the existing workflow fits
- `pnpm ship` publishes a post draft and creates the associated `type: post` note

## Working principles

- Keep authorial ownership explicit. AI may help review, compare, structure, and implement, but it should not replace the author's thinking
- Prefer existing shared packages and site conventions over per-site duplication
- Treat tagging as a late-stage content decision, not part of drafting
- When docs summarize behavior, code wins if there is a conflict
- Preserve the repo's update-note convention and language-specific style when editing content

## Skills

- `website-development`: website code, shared packages, root scripts, builds, and validation
- `blog-authoring`: note/post workflow, schema, style, publishing readiness, and the optional bilingual English-writing loop
- `english-review`: English prose review, comparison, synthesis, and voice coaching
- `tag-governance`: note tagging, registry changes, and retagging after taxonomy changes

## How to combine skills

- Use `blog-authoring` with `english-review` for English notes and posts
- Use `blog-authoring` with `tag-governance` after the content is stable and ready for tagging
- Use `website-development` alongside content skills only when the task changes site behavior, shared code, or build output
