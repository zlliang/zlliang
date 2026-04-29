# Repository Guide

This repository contains Zilong's personal websites, shared packages, and a small set of root workspace commands. Use this file as the high-level map; load the local skills for task-specific workflow.

## What lives here

Websites (all built with [Astro](https://astro.build/), deployed on [Vercel](https://vercel.com/)):

- `websites/home`: bilingual landing site for `zlliang.me`; consumes the theme without route injection
- `websites/mesh`: English site for technical notes and posts; full theme route injection
- `websites/muse`: Chinese site for musing notes and posts; full theme route injection

Shared packages:

- `@zlliang/data`: site, author, and brand data consumed by all websites
- `@zlliang/markdown`: shared remark and rehype plugins, exposed as `@zlliang/markdown/remark` and `@zlliang/markdown/rehype`
- `@zlliang/theme`: Astro integration that ships shared routes, middleware, content schemas, layout, components, and styles
- `@zlliang/toolkit`: CLI for the shared note and post workflow

## Content model

- `home` defines a `fragments` collection in `src/content.config.ts` for reusable localized fragments under `content/fragments/*.md`.
- `mesh` and `muse` share the same note/post model:
  - Notes live under `content/notes/YYYY/MM/DD/slug.md`.
  - Post drafts live under `content/posts/drafts/slug.md`.
  - Published posts live under `content/posts/YYYY/MM/DD/slug.md`.
- The shared `notes`, `posts`, and `series` schemas are defined in `packages/theme/src/schemas/content.ts`; `mesh` and `muse` re-export them through their own `src/content.config.ts`.

## Skills

- `website-development`: website code, shared packages, the `toolkit` CLI, builds, and validation
- `blog-authoring`: note/post workflow, schema, style, and publishing readiness for `mesh` and `muse` (including the optional bilingual English-writing practice loop)
- `english-review`: English prose review, comparison, synthesis, and voice coaching

How to combine:

- Pair `blog-authoring` with `english-review` for English notes and posts.
- Use `website-development` alongside content skills only when the task changes site behavior, shared code, or build output.
- For `home` fragment or copy edits, use `website-development` for file ownership and `english-review` when prose quality matters; `blog-authoring` does not cover `home`.

## Repo conventions

- Run commands from the repository root. See the `website-development` skill for the command surface.
- A pre-commit hook runs `toolkit optimize-image` on staged image files (`*.{jpg,jpeg,png,webp,avif}`).
- Treat `Deploy`, `发布`, and similar short commands as a request to write a Conventional Commit message, commit the current work, and push to GitHub so Vercel can deploy automatically.

## Working principles

- Keep authorial ownership explicit. AI may help review, compare, structure, and implement, but it should not replace the author's thinking.
- Prefer existing shared packages and site conventions over per-site duplication.
- When docs summarize behavior, code wins if there is a conflict.
- Preserve the repo's update note convention and language-specific style when editing content.
