---
name: website-development
description: Develop and maintain the Astro-based websites in this monorepo. Use when building features, fixing bugs, refactoring code, running dev or build checks, or working on shared packages or any of the `home`, `mesh`, or `muse` websites.
---

# Website Development

Use this skill for implementation work on the websites, the shared packages, and the `toolkit` CLI.

## When to use

- Building features, fixing bugs, refactoring, or styling work in `websites/*` or `packages/*`.
- Dev or build validation, dependency edits, or any change that affects build output.

## Read first

- [references/commands.md](./references/commands.md) before running dev, build, or content commands.
- [references/repo-structure.md](./references/repo-structure.md) when package boundaries, the theme integration, or shared ownership matter.

## Responsibilities

- Start from the repository root unless the task clearly targets a single package or site.
- Treat `@zlliang/theme` as the integration surface for `mesh` and `muse`; add shared behavior there instead of re-implementing it per site.
- When changing the public API of `@zlliang/theme/integration` (`ThemeConfig`, exported components, virtual modules, or slot names), update the `astro.config.ts` files of all three sites and any site-level overrides.
- Preserve existing Astro, Tailwind, and TypeScript patterns unless the task explicitly changes them.
- Account for the pre-commit hook, which runs `toolkit optimize-image` on staged images.
- Verify production builds for affected sites before finishing.

## Dependency classification

- **Apps (`websites/*`)**: runtime imports in `dependencies`; build-time and config-only tools in `devDependencies`.
- **Libraries (`packages/*`)**: anything used by exported runtime code in `dependencies`; types, local validation tools, and package-only build helpers in `devDependencies`.
- **Framework and build-tool contracts** (Astro, Tailwind, plugin packages): prefer `peerDependencies`, and usually mirror the package in `devDependencies` so the shared package can type-check and develop locally.
- Keep entries sorted in the order `pnpm add` produces, and refresh `pnpm-lock.yaml` after reclassifying.

## Coordination with other skills

- Pair with `blog-authoring` only when a content task also changes code, behavior, or build output.
- Pair with `english-review` for prose-quality work on `home` fragments.
