---
name: website-development
description: Develop and maintain the Astro-based websites in this monorepo. Use when building features, fixing bugs, refactoring code, running dev or build checks, or working on shared packages or any of the `home`, `mesh`, or `muse` websites.
---

# Website Development

Use this skill for implementation work on the websites, shared packages, and the `toolkit` CLI.

## When to use

- Use this skill to build features, fix bugs, refactor, or update styles and components.
- Use this skill for work in `websites/*`, `packages/*`, or root workspace commands in `package.json`.
- Use this skill when dev or build validation is part of the task.

## Read first

- Read [references/commands.md](./references/commands.md) before running dev, build, or content-related commands.
- Read [references/repo-structure.md](./references/repo-structure.md) when package boundaries or shared ownership matter.

## Responsibilities

- Start from the repository root unless a task clearly targets one package or website.
- Use shared package boundaries instead of duplicating code between websites.
- Preserve existing Astro, Tailwind, and TypeScript patterns unless the task explicitly changes them.
- Prefer reusable code over per-site duplication.
- When editing `package.json`, classify dependencies by runtime ownership instead of copying the current layout blindly.
- Account for the repository `pre-commit` hook, which runs `toolkit optimize-image` on staged images across the repo.
- Verify production builds for affected websites before finishing.

## Dependency classification

- For `websites/*` app packages, put build-time and config-only tools in `devDependencies`.
- For `websites/*` app packages, put packages directly imported by pages, components, server-rendered code, or client scripts in `dependencies`.
- For `packages/*` library packages, put anything imported by exported runtime code in `dependencies`.
- For `packages/*` library packages, keep types, local validation tools, and package-only build helpers in `devDependencies`.
- Prefer `peerDependencies` for framework and build-tool contracts that must be provided by the consuming app, especially shared Astro, Tailwind, and plugin packages.
- When using `peerDependencies`, usually keep the same package in `devDependencies` too so the shared package can type-check and develop locally.
- Keep dependency entries sorted in a stable package-name order consistent with `pnpm add`.
- Refresh `pnpm-lock.yaml` after reclassifying dependencies.

## Coordination with other skills

- Pair with `blog-authoring` only when a content task also changes code, behavior, or build output.
