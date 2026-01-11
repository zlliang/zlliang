# Content Authoring Workflow

There are notes and posts on the `tech` and `days` websites. I created some utility scripts in each website to help with the content authoring workflow.

## Notes

Notes are short-form entries, typically written and published within a day.

```bash
bun run new:tech note [--category <category>] [title] # Create a new note on the `tech` website from the project root
bun run new:days note [--category <category>] [title] # Create a new note from the `days` website from the project root

bun run new note [--category <category>] [title]      # From each website
```

- Creates `notes/[year]/[month]/[day]/[slug].md` with `draft: true`
- Supported categories: `regular` (default), `link` (only for `tech`), `quote`, `til` (only for `tech`), `post`
- Write, review, then remove `draft: true` to publish

## Posts

Posts are long-form entries that take days to draft and polish.

### Create a draft

```bash
bun run new:tech post [title] # Create a new post on the `tech` website from the project root
bun run new:days post [title] # Create a new post from the `days` website from the project root

bun run new post [title]      # From each website
```

- Creates `posts/drafts/[slug].md` with `draft: true`

### Ship the post

```bash
bun run ship:tech # Ship a post on the `tech` website from the project root
bun run ship:days # Ship a post on the `days` website from the project root

bun run ship      # Ship a post from each website
```

- Moves the draft to `posts/[year]/[month]/[day]/[slug].md`
- Removes `draft: true` from the post
- Creates an associated note with `category: post` and a `post:` reference
