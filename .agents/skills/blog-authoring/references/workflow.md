# Blog Authoring Workflow

There are notes and posts on the `tech` and `days` websites. Utility scripts at the project root help with the blog authoring workflow.

## Recommended flow

1. The author writes the draft
2. Ask AI to review structure, schema, formatting, and publishing readiness with `blog-authoring`; If the draft is in English, AI should also review grammar, phrasing, tone, and naturalness with `english-review`
3. The author revises or rewrites the draft based on the feedback
4. Ask AI to tag the note with `tag-governance` after the content is stable; If the tag registry changes, AI should also revisit older notes that may need retagging

## Notes

Notes are short-form entries, typically written and published within a day.

```bash
pnpm new tech note [--type <type>] [title]  # Create a new note on the `tech` website
pnpm new days note [--type <type>] [title]  # Create a new note on the `days` website
```

- Creates `notes/[year]/[month]/[day]/[slug].md`
- `type` must be one of the canonical note types from `content-schema.md`
- If an existing note needs a correction, a substantial clarification, or an update that changes how the original text should be read, add an update note near the end of the file, after the original body, wrapped in a single `<div class="update-note">...</div>` block

## Posts

Posts are long-form entries that take days to draft and polish.

### Create a draft

```bash
pnpm new tech post [title]  # Create a new post on the `tech` website
pnpm new days post [title]  # Create a new post on the `days` website
```

- Creates `posts/drafts/[slug].md` with `draft: true`
- Optionally set `pinned: true` in post frontmatter for living documents

### Ship the post

```bash
pnpm ship tech  # Ship a post on the `tech` website
pnpm ship days  # Ship a post on the `days` website
```

- Moves the draft to `posts/[year]/[month]/[day]/[slug].md`
- Removes `draft: true` from the post
- Creates an associated note with `type: post` and a `post:` reference
- If a published post later needs corrections, clarifications, or important follow-up context, append update notes near the end in a single `<div class="update-note">...</div>` block instead of scattering them through the body

### Pin a post

- Add `pinned: true` to a post's frontmatter when it should be treated as a long-lived reference document
- Pinned posts appear in the top sidebar section (`Pinned posts` on `tech`, `置顶文章` on `days`)
