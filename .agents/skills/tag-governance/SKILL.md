---
name: tag-governance
description: Manage note tags for the tech and days websites. Use when selecting tags for notes, reviewing tag quality, editing either site's tag registry, defining taxonomy rules, creating new tags, or migrating legacy tags.
---

# Tag governance

Use this skill when the task is about note tags rather than general authoring.

This skill comes after content review. Do not treat tag selection as part of line editing.

## Read first

- Open the relevant registry first and treat each tag's `description` field as the authoritative meaning:
  - [`tech` registry](../../../websites/tech/src/utils/tags.ts)
  - [`days` registry](../../../websites/days/src/utils/tags.ts)
- Read [references/workflow.md](./references/workflow.md) before creating, editing, or migrating tags

## Workflow

- Use this skill after the note has already been reviewed and revised for content
- Treat the registry as the only source of truth for active tags
- Treat tags as long-term navigation, not incidental annotations
- Ensure every note has at least one tag and usually no more than three
- Prefer broad, durable topics over one-off entities
- When adding, splitting, or redefining tags, revisit older notes that may need retagging
- When adding a new tag, update the relevant site's registry first, then validate the affected website
