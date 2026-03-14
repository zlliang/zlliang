# Commands

Run commands from the repository root.

## Development and build

```bash
pnpm dev <www|tech|days>
pnpm build <www|tech|days>
```

## Content workflow

```bash
pnpm new <tech|days> <note|post> [--type <type>] [title]
pnpm ship <tech|days>
```

- `pnpm new ... note` creates a dated note file
- `pnpm new ... post` creates a post draft under `content/posts/drafts/`
- `pnpm ship ...` publishes a post draft, creates the associated `type: post` note, and moves draft images if present

## Shared imports

- Import shared rehype plugins from `@zlliang/rehype`
- Import shared styles, utilities, and components from `@zlliang/theme/*`

## Validation

- Build every affected site before finishing
- If a shared package changes, build each dependent site that could be affected
- If a registry or content schema changes, validate the site that owns it
