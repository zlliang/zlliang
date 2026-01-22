# Content Authoring Workflow

There are notes and posts on the `tech` and `days` websites. Utility scripts at the project root help with the content authoring workflow.

## Notes

Notes are short-form entries, typically written and published within a day.

```bash
pnpm new tech note [--category <category>] [title]  # Create a new note on the `tech` website
pnpm new days note [--category <category>] [title]  # Create a new note on the `days` website
```

- Creates `notes/[year]/[month]/[day]/[slug].md` with `draft: true`
- Supported categories: `regular` (default), `link`, `collection`, `quote`, `til`, `post`
- Write, review, then remove `draft: true` to publish

## Posts

Posts are long-form entries that take days to draft and polish.

### Create a draft

```bash
pnpm new tech post [title]  # Create a new post on the `tech` website
pnpm new days post [title]  # Create a new post on the `days` website
```

- Creates `posts/drafts/[slug].md` with `draft: true`

### Ship the post

```bash
pnpm ship tech  # Ship a post on the `tech` website
pnpm ship days  # Ship a post on the `days` website
```

- Moves the draft to `posts/[year]/[month]/[day]/[slug].md`
- Removes `draft: true` from the post
- Creates an associated note with `category: post` and a `post:` reference
