# Content Schema

This file is a working summary for `hack` and `muse`. The code-level source of truth is each site's `src/content.config.ts`.

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
- Series registry path: `content/posts/series.json`

```yaml
title: Example title
created: 2026-03-14
series: example-series
pinned: true
draft: true
```

### Rules

- `title`: required
- `created`: required, `YYYY-MM-DD`
- `series`: optional reference to a registered series id in `content/posts/series.json`
- `pinned`: optional; use it for long-lived reference posts
- `draft`: optional boolean; drafts are created with `true`, and shipping removes it

## Series

- Path: `content/posts/series.json`

```json
[
  {
    "id": "example-series",
    "title": "Example series",
    "description": "Optional short summary"
  }
]
```

### Rules

- Each site owns its own series registry; `hack` and `muse` do not share series entries
- `id`: required slug used by post frontmatter and by `/posts/series/[series]`
- `title`: required display name
- `description`: optional summary shown on the series index page
- Add the series entry before assigning `series: ...` in a post frontmatter block
