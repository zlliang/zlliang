---
name: website-development
description: Develop and maintain the Astro-based websites in this monorepo. Use when building features, fixing bugs, refactoring code, running dev or build checks, or working on shared packages or any of the `www`, `tech`, or `days` websites.
---

# Website Development

Use this skill for implementation work on the websites, shared packages, and root scripts.

## When to use

- Use this skill to build features, fix bugs, refactor, or update styles and components
- Use this skill for work in `websites/*`, `packages/*`, or the root `scripts/` directory
- Use this skill when dev or build validation is part of the task

## Read first

- Read [references/commands.md](./references/commands.md) before running dev, build, or content-related commands
- Read [references/repo-structure.md](./references/repo-structure.md) when package boundaries or shared ownership matter

## Responsibilities

- Start from the repository root unless a task clearly targets one package or website
- Use shared package boundaries instead of duplicating code between websites
- Preserve existing Astro, Tailwind, and TypeScript patterns unless the task explicitly changes them
- Prefer reusable code over per-site duplication
- Verify production builds for affected websites before finishing

## Coordination with other skills

- Pair with `blog-authoring` only when a content task also changes code, behavior, or build output
