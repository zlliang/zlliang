# Commands

Run commands from the repository root.

## Development and build

- `pnpm dev`: start the default local development workflow from the workspace root
- `pnpm build`: build the whole workspace and catch cross-package or cross-site regressions
- Root site scripts use the `task:site` pattern
- `pnpm dev:home`: run the `home` site locally
- `pnpm build:home`: build the `home` site for production validation
- `pnpm dev:hack`: run the `hack` site locally
- `pnpm build:hack`: build the `hack` site for production validation
- `pnpm dev:muse`: run the `muse` site locally
- `pnpm build:muse`: build the `muse` site for production validation

## Content workflow

- `pnpm journal:hack <command> [...]`: run the `journal` CLI against the `hack` site from the root
- `pnpm journal:muse <command> [...]`: run the `journal` CLI against the `muse` site from the root
- Use `pnpm journal:hack ...` or `pnpm journal:muse ...` from the root, or `pnpm journal ...` inside `websites/hack` or `websites/muse`
- `journal` assumes the shared `content/notes` and `content/posts` layout; use `pnpm journal:hack --help`, `pnpm journal:muse --help`, or `pnpm journal --help` for the command surface and examples

## Shared imports

- Import shared rehype plugins from `@zlliang/rehype`
- Import shared styles, utilities, and components from `@zlliang/theme/*`

## Validation

- Build every affected site before finishing
- If a shared package changes, build each dependent site that could be affected
- If a registry or content schema changes, validate the site that owns it
