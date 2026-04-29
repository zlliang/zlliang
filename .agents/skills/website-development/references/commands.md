# Commands

Run all commands from the repository root.

## Development and build

- `pnpm dev` and `pnpm build`: run or build all three sites in parallel; use these to catch cross-package or cross-site regressions.
- `pnpm <dev|build>:<home|mesh|muse>`: run or build a single site (e.g. `pnpm build:mesh`).

## Content workflow

`pnpm toolkit:mesh <command> [...]` and `pnpm toolkit:muse <command> [...]` run the `toolkit` CLI against `mesh` and `muse` from the root; they expand to `pnpm exec toolkit --dir websites/<site> ...`. The CLI assumes the shared `content/notes` and `content/posts` layout. Use `--help` (`pnpm toolkit:mesh --help`, `pnpm toolkit:muse --help`, or `pnpm exec toolkit --help`) for the command surface.

## Shared imports

In each site's `astro.config.ts` and source files:

- Theme integration: `@zlliang/theme/integration`
- Content schemas: `@zlliang/theme/schemas/content`
- Layout, section, and site-card components: `@zlliang/theme/components/*.astro`
- Site, author, and brand data: `@zlliang/data`
- Markdown plugins: `@zlliang/markdown/remark` and `@zlliang/markdown/rehype`

## Validation

- Build every affected site before finishing.
- When `@zlliang/theme` or its schemas change, build all three sites — `home` exercises `injectRoutes: false`, while `mesh` and `muse` exercise full route injection.
- When a site's content schema or registry changes, validate that site.
