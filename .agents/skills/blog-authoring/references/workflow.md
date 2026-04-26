# Blog Authoring Workflow

Use this file for the repo-specific sequence. Detailed frontmatter rules live in `content-schema.md`. Formatting and update note rules live in `style-guide.md`.

## Default sequence

1. Identify the target site and entry type.
2. Create or ship content with `journal` when the built-in workflow fits; use `pnpm journal:<hack|muse> --help` from the root, or `pnpm exec journal --help`, and pass `--dir` when you need to target a site explicitly.
3. The author writes the draft.
4. Review the draft for structure, schema, formatting, and publishing readiness.
5. If the draft is in English, load `english-review` for prose quality, tone, and voice.
6. The author revises or rewrites.
7. For posts, ship the draft with `journal` when it is ready.

## Notes

- Notes live under `content/notes/YYYY/MM/DD/slug.md`.
- Notes are short-form and usually move from draft to publish quickly.
- Let each note's body follow what it is trying to do — capture, respond, curate, share, or introduce a post — without forcing a single shape.

## Posts

- New posts start in `content/posts/drafts/slug.md` with `draft: true`.
- Shipping removes `draft: true` and creates an associated note that links to the post via `post:`.
- `content/posts/drafts/images/` is moved to the published post's `images/` directory during shipping.
- Posts may optionally join a series with `series: <series-id>`.
- Use `pinned: true` only for long-lived reference posts.

## Updating an existing published entry

- Treat a published note or post as a historical snapshot. Edit the body in place only for typos, punctuation, grammar, obviously awkward phrasing, light wording, formatting, or links that do not change the original meaning, conclusions, or narrative structure.
- Put all later corrections, reversals, clarifications, and important follow-up context into an update note. Follow [style-guide.md](./style-guide.md) for the format.

## Optional bilingual loop

For English-writing practice, especially on `hack`, the author may also use the optional loop in [bilingual-writing-workflow.md](./bilingual-writing-workflow.md).

This loop is not part of the normal publishing sequence. Use it when the goal includes training English thinking, comparing drafts, or collecting reusable expressions.
