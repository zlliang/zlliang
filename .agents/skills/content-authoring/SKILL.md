---
name: content-authoring
description: Guides writing and publishing notes and posts for the `tech` and `days` websites. Use when creating, drafting, editing, or shipping blog content, or when reviewing writing style.
---

# Content authoring

Currently the `tech` and `days` websites share a similar structure. Here are instructions for the content authoring on both sites.

## Content types

- **Notes:** Short-form entries in `content/notes/[year]/[month]/[day]/[slug].md`
- **Posts:** Long-form entries in `content/posts/[year]/[month]/[day]/[slug].md` (drafts in `content/posts/drafts/`)

## Commands

From the repository root:

```bash
pnpm run new:tech note [--category <category>] [title]  # Create note on `tech`
pnpm run new:days note [--category <category>] [title]  # Create note on `days`
pnpm run new:tech post [title]                          # Create post draft on `tech`
pnpm run new:days post [title]                          # Create post draft on `days`
pnpm run ship:tech                                      # Ship post on `tech`
pnpm run ship:days                                      # Ship post on `days`
```

## Style guide

There's a detailed writing style guide in [style-guide.md](./style-guide.md). This guide is language-agnostic. Use it proactively when reviewing writing style.

## Workflow

1. **Notes:** Create → write → remove `draft: true` → commit
2. **Posts:** Create draft → write/polish → `pnpm run ship` → commit

For the detailed workflow, see [workflow.md](./workflow.md).
