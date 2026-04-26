# Repository Guide

This repository contains Zilong's personal websites, shared packages, and a small set of root workspace commands. Use this file as the high-level map. Use the local skills for task-specific workflow.

## What lives here

- `websites/home`: bilingual landing site for `zlliang.me`
- `websites/hack`: English site for technical notes and posts
- `websites/muse`: Chinese site for musing notes and posts
- `packages/journal`: CLI for note and post workflow based on the shared content structure used by `hack` and `muse`
- `packages/remark`: shared remark plugins
- `packages/rehype`: shared rehype plugins
- `packages/theme`: shared styles, utilities, and Astro components

All websites are built with [Astro](https://astro.build/) and are deployed on [Vercel](https://vercel.com/).

## Content model

- `home` uses one collection:
  - `content/fragments/*.md` for reusable localized fragments.
- `hack` and `muse` share the same note/post model:
  - Notes live under `content/notes/YYYY/MM/DD/slug.md`.
  - Post drafts live under `content/posts/drafts/slug.md`.
  - Published posts live under `content/posts/YYYY/MM/DD/slug.md`.
- Schema source of truth is each site's `src/content.config.ts`.

## Root commands

Run commands from the repository root. Use the `website-development` skill for the command list and brief usage notes.

## Working principles

- Keep authorial ownership explicit. AI may help review, compare, structure, and implement, but it should not replace the author's thinking.
- Prefer existing shared packages and site conventions over per-site duplication.
- When docs summarize behavior, code wins if there is a conflict.
- Preserve the repo's update note convention and language-specific style when editing content.
- Treat `Deploy`, `发布`, and similar short commands as a request to write a Conventional Commit message, commit the current work, and push to GitHub so Vercel can deploy automatically.

## Skills

- `website-development`: website code, shared packages, the `journal` CLI, builds, and validation
- `blog-authoring`: note/post workflow, schema, style, publishing readiness, and the optional bilingual English-writing loop
- `english-review`: English prose review, comparison, synthesis, and voice coaching

## How to combine skills

- Use `blog-authoring` with `english-review` for English notes and posts.
- Use `website-development` alongside content skills only when the task changes site behavior, shared code, or build output.
