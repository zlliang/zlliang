---
name: tag-governance
description: Manage note tags for the tech and days websites. Use when selecting tags for notes, reviewing tag quality, editing either site's tag registry, defining taxonomy rules, creating new tags, or migrating legacy tags.
---

# Tag Governance

Use this skill for note tags on `tech` and `days`. Start only after the note itself is stable.

## When to use

- Use this skill to choose tags for a finished or nearly finished note
- Use this skill for tag review, registry edits, taxonomy changes, and retagging work
- Use this skill only after content decisions are mostly settled

## When not to use

- Do not pick tags while the note's main topic is still moving
- Do not treat tag selection as part of line editing or prose revision
- Do not use this skill as a general content-review workflow guide
- Do not create new tags for one-off entities or temporary trends

## Read first

- Open the relevant registry first and treat each tag's `description` field as authoritative:
  - [`tech` registry](../../../websites/tech/src/utils/tags.ts)
  - [`days` registry](../../../websites/days/src/utils/tags.ts)
- Read [references/workflow.md](./references/workflow.md) before creating, editing, or migrating tags

## Responsibilities

- Treat the registry as the only source of truth for active tags
- Keep each registry sorted by tag `slug` in ascending lexicographic order
- Treat tags as long-term navigation, not incidental annotations
- Ensure every note has at least one tag and usually no more than three
- Prefer broad, durable topics over one-off entities
- When adding, splitting, or redefining tags, revisit older notes that may need retagging
- When adding a new tag, update the relevant site's registry first, then validate the affected website

## Coordination with other skills

- Run this skill after `blog-authoring` or other content-review work is complete
- Leave prose and structure to `blog-authoring` and `english-review`
