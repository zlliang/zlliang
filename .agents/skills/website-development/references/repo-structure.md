# Repo Structure

This monorepo contains three Astro websites plus shared `rehype` and `theme` packages.

## Shared packages

- `@zlliang/rehype`: shared Markdown and rehype plugins used across the sites
- `@zlliang/theme`: shared global CSS, style helpers, and Astro components

## Conventions

- `www` is the landing site; `tech` and `days` share the note and post content model
- Use `@/*` for `src/*` imports within a website
- Keep Astro components in PascalCase
- Keep content files under date-based directories when applicable
- Prefer shared packages when logic or styling is reused across websites
