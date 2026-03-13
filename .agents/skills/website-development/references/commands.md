# Commands

Run commands from the repository root.

## Core commands

```bash
pnpm install
pnpm dev <site>
pnpm build <site>
```

`<site>` must be one of `www`, `tech`, or `days`.

## Expected dev ports

- `www`: `3001`
- `tech`: `3002`
- `days`: `3003`

## Related tooling

- Use `pnpm new ...` and `pnpm ship ...` for content workflows rather than hand-creating files when the task is authoring-oriented
- Import shared rehype plugins from `@zlliang/rehype`
- Import shared styles, utilities, and components from `@zlliang/theme/*`

## Validation

- Run `pnpm build <site>` for each affected website before finishing
- If a change touches shared packages, build every dependent website that could be affected
