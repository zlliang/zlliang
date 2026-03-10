# AGENTS.md

This document defines how AI assistants (e.g., ChatGPT, Codex, Amp) help me develop and write for my personal websites.

## Websites in this repository

This repository contains my personal websites:

```
packages/
├── rehype/  # Shared rehype plugins (@zlliang/rehype)
└── theme/   # Shared theme package (styles, utilities, components) (@zlliang/theme)
websites/
├── www/     # zlliang.me – Personal landing page (English and Chinese)
├── tech/    # tech.zlliang.me – Tech learning and research (English)
└── days/    # days.zlliang.me – Daily life and reflections (Chinese)
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
websites/<tech|days>/
├── src/
│   ├── components/   # Astro components (.astro)
│   ├── pages/        # File-based routing
│   ├── styles/       # Global CSS (main.css)
│   └── utils/        # Helper functions
└── content/
    ├── notes/        # Short-form notes ([year]/[month]/[day]/[slug].md)
    └── posts/        # Long-form posts ([year]/[month]/[day]/[slug].md)
```

## Skills

This repository provides local skills for recurring tasks:

- **website-development:** For website and shared-package development
- **blog-authoring:** For note/post drafting, review, schema, and publishing workflow
- **english-review:** For English prose revision and voice coaching

For English blog drafts, use `blog-authoring` together with `english-review`.
