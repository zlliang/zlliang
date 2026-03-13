# Content Schema

Use these frontmatter rules for content on `tech` and `days`.

## Notes

Notes live under `content/notes/[year]/[month]/[day]/[slug].md`.

```yaml
no: 1
title: ...
created: YYYY-MM-DD
type: regular
post: ...
tags: [demo]
draft: true
```

### Fields

- `no`: required unique note number
- `title`: optional
- `created`: required date in `YYYY-MM-DD`
- `type`: required, one of `regular`, `link`, `collection`, `quote`, `til`, `post`
- `post`: optional reference to an associated post
- `tags`: required, must contain one or more canonical slugs from the site's registry, sorted alphabetically by slug
- `draft: true`: remove to publish

## Posts

Draft posts are created in `content/posts/drafts/` and published posts live under `content/posts/[year]/[month]/[day]/[slug].md`.

```yaml
title: ...
created: YYYY-MM-DD
pinned: false
draft: true
```

### Fields

- `title`: required
- `created`: required date in `YYYY-MM-DD`
- `pinned`: optional boolean, defaults to `false`; set `true` for living documents that should appear in the sidebar's pinned section
- `draft: true`: remove to publish
