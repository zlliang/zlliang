# Content Schema

Working summary for `mesh` and `muse`. Source of truth: `packages/theme/src/schemas/content.ts`. Both sites re-export it through their own `src/content.config.ts`.

## Notes

Path: `content/notes/YYYY/MM/DD/slug.md`

```yaml
number: 1
title: Example title
created: 2026-03-14
post: 2026/03/14/example-post
draft: true
```

- `number`: required, unique note number.
- `title`: optional; preferred when the note has a clear title.
- `created`: required, `YYYY-MM-DD`.
- `post`: optional reference to a related published post; only for notes that introduce one.
- `draft`: optional; omit or set to `false` when published.

## Posts

- Draft path: `content/posts/drafts/slug.md`
- Published path: `content/posts/YYYY/MM/DD/slug.md`

```yaml
title: Example title
created: 2026-03-14
series: example-series
pinned: true
draft: true
```

- `title`: required.
- `created`: required, `YYYY-MM-DD`.
- `series`: optional reference to a registered series id in `content/posts/series.json`.
- `pinned`: optional; for long-lived reference posts.
- `draft`: optional; drafts start with `true`, shipping removes it.

## Series

Path: `content/posts/series.json`. Each site owns its own registry; `mesh` and `muse` do not share series entries.

```json
[
  {
    "id": "example-series",
    "title": "Example series",
    "description": "Optional short summary"
  }
]
```

- `id`: required slug used by post frontmatter and by `/posts/series/[series]`.
- `title`: required display name.
- `description`: optional summary shown on the series index page.
- Add the series entry before assigning `series: ...` in a post frontmatter block.
