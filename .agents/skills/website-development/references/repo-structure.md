# Repo Structure

Use this file when ownership or shared boundaries matter.

## Top-level layout

- `websites/home`: bilingual landing site; consumes the theme as a component library and opts out of route injection
- `websites/mesh`: English note and post site; full theme route injection
- `websites/muse`: Chinese note and post site; full theme route injection
- `packages/data`: shared site, author, and brand data
- `packages/markdown`: shared remark and rehype plugins, exposed via subpath exports `/remark` and `/rehype`
- `packages/theme`: Astro integration that ships shared routes, middleware, content schemas, layout, components, and styles
- `packages/toolkit`: CLI for the shared note and post workflow

## Site shape

- `mesh` and `muse` are minimal: each owns `src/assets/`, a one-line `src/content.config.ts` that re-exports the shared schemas, and `src/theme/*.astro` slot overrides. They have no `src/pages`, `src/components`, or `src/utils`.
- `home` is the exception: it keeps its own `src/pages`, `src/components`, `src/i18n`, and `src/utils` because it sets `injectRoutes: false`.
- `mesh` and `muse` share `content/notes/` and `content/posts/`; `home` uses `content/fragments/`.

## Theme integration

Each site registers the theme in `astro.config.ts`:

```ts
import theme from "@zlliang/theme/integration"
```

`ThemeConfig` fields: `title`, `locale`, `color` (Tailwind palette name), `logo` (path relative to the site root), and `injectRoutes`.

- `injectRoutes: true` (default; `mesh` and `muse`): injects shared routes for the home page, 404, search, image redirect, notes, and posts (including series), plus the full middleware stack.
- `injectRoutes: false` (`home`): still configures fonts, the markdown pipeline, and Vite virtual modules, but skips route and most middleware injection so the site can keep its own pages.

The integration always wires shared fonts, the remark/rehype pipeline from `@zlliang/markdown`, and the Tailwind Vite plugin.

## Slot overrides

Sites add per-route UI by dropping Astro files into `src/theme/<SlotName>.astro`. The `virtualSlotsPlugin` auto-discovers them and re-exports each as a named export of `virtual:zlliang-theme/slots`; missing files are exported as `null` so theme components can render defaults without dynamic imports. Source of truth for slot names: [`packages/theme/src/plugins/virtual-slots.ts`](../../../../packages/theme/src/plugins/virtual-slots.ts).

## Virtual modules

Site-specific values reach theme components through Vite virtual modules:

- `virtual:zlliang-theme/config`: the resolved `ThemeConfig`
- `virtual:zlliang-theme/logo`: the resolved logo `ImageMetadata`
- `virtual:zlliang-theme/color`: the resolved primary color palette
- `virtual:zlliang-theme/slots`: the slot overrides above

## Shared rules

- Schema source of truth: `@zlliang/theme/schemas/content`. Each site re-exports it through its own `src/content.config.ts`; `mesh` and `muse` share schema shape but own separate series registries.
- Astro components use PascalCase.
- Move reusable logic, components, or styles into `@zlliang/theme` (or another shared package) instead of copying them between sites.
