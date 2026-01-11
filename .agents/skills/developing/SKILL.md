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
- **Runtime:** [Bun](https://bun.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## Monorepo structure

This repository contains three Astro websites:

```
websites/
├── www/    # zlliang.me – Personal index (English and Chinese, with [Astro's i18n support](https://docs.astro.build/guides/internationalization/))
├── tech/   # tech.zlliang.me – Tech learning and research (English)
└── days/   # days.zlliang.me – Daily life and reflections (Chinese)
```

## Commands

From the repository root:

```bash
bun install        # Install all dependencies

bun run dev:www    # Start www dev server, on port 3001
bun run dev:tech   # Start tech dev server, on port 3002
bun run dev:days   # Start days dev server, on port 3003

bun run build:www  # Build www for production
bun run build:tech # Build tech for production
bun run build:days # Build days for production

bun run dev        # Start all dev servers concurrently
bun run build      # Build all sites for production
```

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
