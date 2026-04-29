# Blog Authoring Workflow

Repo-specific sequence for `mesh` and `muse`. Frontmatter rules live in [content-schema.md](./content-schema.md); formatting and update note rules live in [style-guide.md](./style-guide.md).

## Default sequence

1. Identify the target site and entry type.
2. Create or ship content with `toolkit` when the built-in workflow fits; use `pnpm toolkit:<mesh|muse> --help` from the root, or `pnpm exec toolkit --help`, and pass `--dir` to target a site explicitly.
3. The author writes the draft.
4. Review the draft for structure, schema, formatting, and publishing readiness.
5. If the draft is in English, load `english-review` for prose quality, tone, and voice.
6. The author revises or rewrites.
7. For posts, ship the draft with `toolkit` when it is ready.

## Notes

- Path: `content/notes/YYYY/MM/DD/slug.md`.
- Short-form, usually moves from draft to publish quickly.
- Let each note's body follow what it is trying to do — capture, respond, curate, share, or introduce a post — without forcing a single shape.

## Posts

- New posts start in `content/posts/drafts/slug.md` with `draft: true`.
- Shipping removes `draft: true` and creates an associated note that links to the post via `post:`.
- `content/posts/drafts/images/` is moved to the published post's `images/` directory during shipping.
- Posts may join a series with `series: <series-id>`.
- Use `pinned: true` only for long-lived reference posts.

## Updating an existing published entry

- Treat a published note or post as a historical snapshot. Edit the body in place only for typos, punctuation, grammar, awkward phrasing, light wording, formatting, or links that do not change the original meaning, conclusions, or structure.
- Put all later corrections, reversals, clarifications, and important follow-up context into an update note. See [style-guide.md](./style-guide.md) for the format.

## Optional bilingual practice loop

For English-writing practice, especially on `mesh`, the author may use the optional loop in [english-writing-practice.md](./english-writing-practice.md). It is not part of the normal publishing sequence.
