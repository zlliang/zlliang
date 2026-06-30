---
name: developing-websites
description: Develop and maintain the Astro-based websites in this monorepo. Use when building features, fixing bugs, refactoring code, running dev or build checks, or working on shared packages or any of the `home`, `mesh`, or `muse` websites.
---

# Developing Websites

Implementation work on the websites, the shared packages, and the `toolkit` CLI: features, bug fixes, refactors, styling, dependency edits, and dev/build validation in `websites/*` or `packages/*`.

## Routing between skills

- Pair with `authoring-blogs` only when a content task also changes code, behavior, or build output.
- Pair with `reviewing-english` for prose-quality work on `home` fragments.

## Read first

- [references/commands.md](./references/commands.md) — before running dev, build, or content commands, and for what to validate.
- [references/repo-structure.md](./references/repo-structure.md) — package boundaries, theme integration, slots, virtual modules, and shared ownership.

## Key constraints

- Treat `@zlliang/theme` as the integration surface for `mesh` and `muse`; add shared behavior there instead of re-implementing it per site.
- Changing the public API of `@zlliang/theme/integration` (`ThemeConfig`, exported components, virtual modules, or slot names) requires updating all three sites' `astro.config.ts` and any site-level overrides.
- Preserve existing Astro, Tailwind, and TypeScript patterns unless the task explicitly changes them.
- The pre-commit hook runs `toolkit optimize-image` on staged images.

## Dependency classification

- **Apps (`websites/*`)**: runtime imports in `dependencies`; build-time and config-only tools in `devDependencies`.
- **Libraries (`packages/*`)**: anything used by exported runtime code in `dependencies`; types, local validation tools, and package-only build helpers in `devDependencies`.
- **Framework and build-tool contracts** (Astro, Tailwind, plugin packages): prefer `peerDependencies`, and usually mirror the package in `devDependencies` so the shared package can type-check and develop locally.
- Keep entries sorted in the order `pnpm add` produces, and refresh `pnpm-lock.yaml` after reclassifying.
