# Commands

Run commands from the repository root.

## Development and build

- `pnpm dev`: start the default local development workflow from the workspace root
- `pnpm build`: build the whole workspace and catch cross-package or cross-site regressions
- Root site scripts use the `task:site` pattern
- `pnpm dev:home`: run the `home` site locally
- `pnpm build:home`: build the `home` site for production validation
- `pnpm dev:mesh`: run the `mesh` site locally
- `pnpm build:mesh`: build the `mesh` site for production validation
- `pnpm dev:muse`: run the `muse` site locally
- `pnpm build:muse`: build the `muse` site for production validation

## Content workflow

- `pnpm scripts:mesh <command> [...]`: run the `scripts` CLI against the `mesh` site from the root.
- `pnpm scripts:muse <command> [...]`: run the `scripts` CLI against the `muse` site from the root.
- The root scripts expand to `pnpm exec scripts --dir websites/mesh ...` and `pnpm exec scripts --dir websites/muse ...`.
- `scripts` assumes the shared `content/notes` and `content/posts` layout; use `pnpm scripts:mesh --help`, `pnpm scripts:muse --help`, or `pnpm exec scripts --help` for the command surface and examples.

## Shared imports

- Import shared remark plugins from `@zlliang/remark`.
- Import shared rehype plugins from `@zlliang/rehype`.
- Import shared styles, utilities, and components from `@zlliang/theme/*`.

## Validation

- Build every affected site before finishing.
- If a shared package changes, build each dependent site that could be affected.
- If a registry or content schema changes, validate the site that owns it.
