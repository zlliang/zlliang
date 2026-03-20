# Commands

Run commands from the repository root.

## Development and build

- `pnpm dev`: start the default local development workflow from the workspace root
- `pnpm build`: build the whole workspace and catch cross-package or cross-site regressions
- `pnpm www:dev`: run the `www` site locally
- `pnpm www:build`: build the `www` site for production validation
- `pnpm tech:dev`: run the `tech` site locally
- `pnpm tech:build`: build the `tech` site for production validation
- `pnpm days:dev`: run the `days` site locally
- `pnpm days:build`: build the `days` site for production validation

## Content workflow

- `pnpm journal:tech <command> [...]`: run the `journal` CLI against the `tech` site from the root
- `pnpm journal:days <command> [...]`: run the `journal` CLI against the `days` site from the root
- Use `pnpm journal:tech ...` or `pnpm journal:days ...` from the root, or `pnpm journal ...` inside `websites/tech` or `websites/days`
- `journal` assumes the shared `content/notes` and `content/posts` layout; use `pnpm journal:tech --help`, `pnpm journal:days --help`, or `pnpm journal --help` for the command surface and examples

## Shared imports

- Import shared rehype plugins from `@zlliang/rehype`
- Import shared styles, utilities, and components from `@zlliang/theme/*`

## Validation

- Build every affected site before finishing
- If a shared package changes, build each dependent site that could be affected
- If a registry or content schema changes, validate the site that owns it
