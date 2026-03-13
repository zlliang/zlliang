---
name: website-development
description: Develop and maintain the Astro-based websites in this monorepo. Use when building features, fixing bugs, refactoring code, running dev or build checks, or working on shared packages or any of the `www`, `tech`, or `days` websites.
---

# Website Development

Use this skill for implementation work on the websites and shared packages.

## Read first

- Read [references/commands.md](./references/commands.md) before running dev, build, or content-related commands
- Read [references/repo-structure.md](./references/repo-structure.md) when package boundaries or shared ownership matter

## Workflow

- Start from the repository root unless a task clearly targets one package or website
- Use the shared package boundaries instead of duplicating code between websites
- Preserve existing Astro, Tailwind, and TypeScript patterns unless the task explicitly changes them
- Verify production builds for affected websites before finishing
