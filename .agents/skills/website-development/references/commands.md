# Commands

Run commands from the repository root.

## Development and build

```bash
pnpm dev
pnpm build
pnpm www:dev
pnpm www:build
pnpm tech:dev
pnpm tech:build
pnpm days:dev
pnpm days:build
```

## Content workflow

```bash
pnpm journal:tech <command> [...]
pnpm journal:days <command> [...]
```

- Use `pnpm journal:tech ...` or `pnpm journal:days ...` from the root, or `pnpm journal ...` inside `websites/tech` or `websites/days`
- `journal` assumes the shared `content/notes` and `content/posts` layout; use `pnpm journal:tech --help`, `pnpm journal:days --help`, or `pnpm journal --help` for the command surface and examples

## Shared imports

- Import shared rehype plugins from `@zlliang/rehype`
- Import shared styles, utilities, and components from `@zlliang/theme/*`

## Validation

- Build every affected site before finishing
- If a shared package changes, build each dependent site that could be affected
- If a registry or content schema changes, validate the site that owns it
