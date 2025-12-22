# Content Workflow

## Notes

Notes are short-form entries, typically written and published within a day.

```bash
bun run new note [title]
```

- Creates `notes/[year]/[month]/[day]/[slug].md` with `draft: true`
- Write, review, then remove `draft: true` to publish

## Posts

Posts are long-form entries that take days to draft and polish.

### Create a draft

```bash
bun run new post [title]
```

- Creates `posts/drafts/[slug].md` with `draft: true`

### Ship the post

```bash
bun run ship
```

- Moves the draft to `posts/[year]/[month]/[day]/[slug].md`
- Removes `draft: true` from the post
- Creates an associated note with a `post:` reference
