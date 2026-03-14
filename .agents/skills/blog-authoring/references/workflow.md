# Blog Authoring Workflow

Use this file for the repo-specific sequence. Detailed frontmatter rules live in `content-schema.md`. Formatting and update-note rules live in `style-guide.md`.

## Default sequence

1. Identify the target site and entry type
2. Create the draft with `pnpm new <tech|days> <note|post> ...` when the built-in workflow fits
3. The author writes the draft
4. Review the draft for structure, schema, formatting, and publishing readiness
5. If the draft is in English, load `english-review` for prose quality, tone, and voice
6. The author revises or rewrites
7. Tag with `tag-governance` only after the content is stable
8. For posts, ship the draft with `pnpm ship <tech|days>` when it is ready

## Notes

- Notes live under `content/notes/YYYY/MM/DD/slug.md`
- Notes are short-form and usually move from draft to publish quickly
- Keep the body aligned with the selected note `type`
- If a published note later needs correction or qualification, append a single `<div class="update-note">...</div>` block near the end

## Posts

- New posts start in `content/posts/drafts/slug.md` with `draft: true`
- `pnpm ship <site>` publishes the draft, removes `draft: true`, and creates the associated `type: post` note
- `content/posts/drafts/images/` is moved to the published post's `images/` directory during shipping
- Use `pinned: true` only for long-lived reference posts
- Add later corrections or follow-up context as update notes instead of scattering them through the body

## Optional bilingual loop

For English-writing practice, especially on `tech`, the author may also use the optional loop in [bilingual-writing-workflow.md](./bilingual-writing-workflow.md).

This loop is not part of the normal publishing sequence. Use it when the goal includes training English thinking, comparing drafts, or collecting reusable expressions.
