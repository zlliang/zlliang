# Content Schema

This file is a working summary for `tech` and `days`. The code-level source of truth is each site's `src/content.config.ts`.

## Notes

- Path: `content/notes/YYYY/MM/DD/slug.md`

```yaml
no: 1
title: Example title
created: 2026-03-14
type: regular
post: 2026/03/14/example-post
draft: true
```

### Rules

- `no`: required unique note number
- `title`: optional, but preferred when the note has a clear title
- `created`: required, `YYYY-MM-DD`
- `type`: `regular`, `link`, `collection`, `quote`, `til`, or `post`; choose `type` by note intent; see [note-types.md](./note-types.md) for the goal and default body shape of each type
- `post`: optional reference to the related post; only for post notes
- `draft`: optional boolean; omit it or set it to `false` when published

## Posts

- Draft path: `content/posts/drafts/slug.md`
- Published path: `content/posts/YYYY/MM/DD/slug.md`

```yaml
title: Example title
created: 2026-03-14
pinned: true
draft: true
```

### Rules

- `title`: required
- `created`: required, `YYYY-MM-DD`
- `pinned`: optional; use it for long-lived reference posts
- `draft`: optional boolean; drafts are created with `true`, and shipping removes it
