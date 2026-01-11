# AGENTS.md

This document defines how AI assistants (e.g., ChatGPT, Codex, Amp) help me develop and write for my personal websites.

## Websites in this repository

This repository contains my personal websites:

```
websites/
├── www/  # zlliang.me – Personal index (English and Chinese)
├── tech/ # tech.zlliang.me – Tech learning and research (English)
└── days/ # days.zlliang.me – Daily life and reflections (Chinese)
```

The websites are built with [Astro](https://astro.build/) and are deployed on [Vercel](https://vercel.com/).

## Structure of the `www` website

```
websites/www/
├── src/
│   ├── assets/     # Static assets (images, etc.)
│   ├── components/ # Astro components (.astro)
│   ├── pages/      # File-based routing
│   ├── styles/     # Global CSS
│   └── utils/      # Helper functions
└── content/
    └── fragments/  # Reusable content fragments with i18n (bio-en.md, bio-zh.md)
```

## Structure of the `tech` and `days` websites

Currently the `tech` and `days` websites share a similar structure:

```
websites/[tech|days]/
├── src/
│   ├── components/   # Astro components (.astro)
│   ├── pages/        # File-based routing
│   ├── styles/       # Global CSS (main.css)
│   └── utils/        # Helper functions
├── content/
│   ├── notes/        # Short-form notes ([year]/[month]/[day]/[slug].md)
│   ├── posts/        # Long-form posts ([year]/[month]/[day]/[slug].md)
└── scripts/          # CLI scripts
```

## Content schema

Notes use frontmatter with these fields:

```yaml
no: 1               # Required, unique note number (auto-incremented)
title: ...          # Optional
created: YYYY-MM-DD # Required
category: regular   # Required
post: ...           # Optional, refers to a post
tags: []            # Optional, sorted alphabetically
draft: true         # Remove this field to publish
```

Posts use frontmatter with these fields:

```yaml
title: ...          # Required
created: YYYY-MM-DD # Required
draft: true         # Remove this field to publish
```

## Skills

This repository provides several skills for specialized tasks. Load the appropriate skill when working on related tasks:

- **developing:** For building features, fixing bugs, or running dev/build commands for any of the websites
- **content-authoring:** For creating, drafting, editing, or publishing notes and posts on `tech` or `days`
- **english-writing:** For reviewing and improving English prose, fixing grammar, or refining writing style
