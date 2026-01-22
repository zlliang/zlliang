---
name: developing
description: Guides development of the Astro-based personal websites in this monorepo. Use when building features, fixing bugs, or running dev and build commands for `www`, `tech`, or `days` sites.
---

# Developing

## Tech stack

- **Framework:** [Astro](https://astro.build/) ([Astro's llms.txt](https://docs.astro.build/llms.txt))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Iconify](https://iconify.design/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package manager:** [pnpm](https://pnpm.io/)
- **Deployment:** [Vercel](https://vercel.com/)

## Monorepo structure

This repository contains three Astro websites:

```
websites/
├── www/    # zlliang.me – Personal landing page (English and Chinese, with [Astro's i18n support](https://docs.astro.build/guides/internationalization/))
├── tech/   # tech.zlliang.me – Tech learning and research (English)
└── days/   # days.zlliang.me – Daily life and reflections (Chinese)
```

## Commands

From the repository root:

```bash
pnpm install         # Install all dependencies

pnpm dev <site>      # Start dev server (www: 3001, tech: 3002, days: 3003)
pnpm build <site>    # Build for production
```

Where `<site>` is one of: `www`, `tech`, `days`.

## Conventions

- **Path alias:** Use `@/*` for `src/*` imports within each site
- **Components:** Use PascalCase for `.astro` files
- **Content:** Organized by `[year]/[month]/[day]/[slug].md`
- **Styling:** Tailwind utilities; global styles in `src/styles/main.css`
- **Git commits:** Follow [Conventional Commits](https://www.conventionalcommits.org/); for content authoring, use `docs:` type with the relevant title in the message

## Misc

- Use `lodash-es` and `date-fns` for utilities
- Custom rehype plugins go in `src/utils/rehype.ts` on each site
- Always verify production builds
