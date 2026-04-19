# Repo Structure

Use this file when ownership or shared boundaries matter.

## Top-level layout

- `websites/home`: landing site with a `fragments` content collection
- `websites/hack`: English note and post site
- `websites/muse`: Chinese note and post site
- `packages/journal`: CLI for the shared note and post workflow
- `packages/remark`: shared remark plugins
- `packages/rehype`: shared rehype plugins
- `packages/theme`: shared CSS, utilities, and Astro components

## Shared rules

- `hack` and `muse` share the same content model and note types
- Each site owns its own `src/content.config.ts`
- Use `@/*` for within-site `src/*` imports
- Keep Astro components in PascalCase
- Prefer moving reusable logic or styles into shared packages instead of copying them between sites
