---
name: tag-governance
description: Manage note tags for the tech and days websites. Use when selecting tags for notes, reviewing tag quality, editing either site's tag registry, defining taxonomy rules, creating new tags, or migrating legacy tags.
---

# Tag governance

Use this skill when the task is about note tags rather than general authoring.

## When to use

- Use this skill for note tag selection, tag review, tag creation, taxonomy changes, and tag migration
- Use this skill only after the author has stabilized the note content

## When not to use

- Do not treat tag selection as part of line editing or prose revision
- Do not use this skill as a general content-review workflow guide

## Read first

- Open the relevant registry first and treat each tag's `description` field as the authoritative meaning:
  - [`tech` registry](../../../websites/tech/src/utils/tags.ts)
  - [`days` registry](../../../websites/days/src/utils/tags.ts)
- Read [references/workflow.md](./references/workflow.md) before creating, editing, or migrating tags

## Responsibilities

- Treat the registry as the only source of truth for active tags
- Treat tags as long-term navigation, not incidental annotations
- Ensure every note has at least one tag and usually no more than three
- Prefer broad, durable topics over one-off entities
- When adding, splitting, or redefining tags, revisit older notes that may need retagging
- When adding a new tag, update the relevant site's registry first, then validate the affected website

## Coordination with other skills

- Run this skill after `blog-authoring` or other content-review work is complete
- Do not replace `english-review` or `blog-authoring`; this skill starts after content decisions are already settled
