# Blog Authoring Workflow

There are notes and posts on the `tech` and `days` websites. Utility scripts at the project root help with the blog authoring workflow.

## Recommended flow

1. Write the draft
2. Review wording, structure, and style with `blog-authoring`
3. If the draft is in English, use `english-review` for grammar, phrasing, and naturalness
4. Revise the draft
5. Tag the note with `tag-governance`
6. If the tag registry changes, revisit older notes that may need retagging

## Notes

Notes are short-form entries, typically written and published within a day.

```bash
pnpm new tech note [--type <type>] [title]  # Create a new note on the `tech` website
pnpm new days note [--type <type>] [title]  # Create a new note on the `days` website
```

- Creates `notes/[year]/[month]/[day]/[slug].md` with `draft: true`
- `type` must be one of the canonical note types from `content-schema.md`
- Write first, review and revise the content, then assign or confirm tags before removing `draft: true`

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

### Pin a post

- Add `pinned: true` to a post's frontmatter when it should be treated as a long-lived reference document
- Pinned posts appear in the top sidebar section (`Pinned posts` on `tech`, `置顶文章` on `days`)
