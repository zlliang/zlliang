# AGENTS.md

This document defines how AI assistants (e.g., ChatGPT, Codex, Amp) help me develop and write for my personal websites.

## Monorepo structure

This repository contains three Astro websites:

```
websites/
├── www/    # zlliang.me – Personal index
├── tech/   # tech.zlliang.me – Tech notes and posts (English)
└── days/   # days.zlliang.me – Daily life and reflections (Chinese)
```

## Tech stack

- **Framework:** [Astro](https://docs.astro.build/llms.txt)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Iconify](https://iconify.design/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Bun](https://bun.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## Commands

From the repository root:

```bash
bun install              # Install all dependencies

bun run dev:www          # Start www dev server
bun run dev:tech         # Start tech dev server
bun run dev:days         # Start days dev server

bun run build:www        # Build www for production
bun run build:tech       # Build tech for production
bun run build:days       # Build days for production
```

## Conventions

- **Path alias:** Use `@/*` for `src/*` imports within each site
- **Components:** PascalCase `.astro` files
- **Content:** Organized by `[year]/[month]/[day]/[slug].md`
- **Styling:** Tailwind utilities; global styles in `src/styles/main.css`
- **Code themes:** `github-light-default` / `github-dark-default` ([Shiki](https://shiki.style/))
- **Git commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/); for notes and posts, use `docs:` type with the title in the message

## Development guidelines

- Check existing components before creating new ones
- Follow Astro patterns for data fetching (`getCollection`, `getEntry`)
