# Repo Structure

Use this file when ownership or shared boundaries matter.

## Top-level layout

- `websites/www`: landing site with `fragments` and `places` content collections
- `websites/tech`: English note and post site
- `websites/days`: Chinese note and post site
- `packages/rehype`: shared Markdown and rehype plugins
- `packages/theme`: shared CSS, utilities, and Astro components
- `scripts`: root entry points for dev, build, and content workflow

## Shared rules

- `tech` and `days` share the same content model and note types
- Each site owns its own `src/content.config.ts` and `src/utils/tags.ts`
- Use `@/*` for within-site `src/*` imports
- Keep Astro components in PascalCase
- Prefer moving reusable logic or styles into shared packages instead of copying them between sites
