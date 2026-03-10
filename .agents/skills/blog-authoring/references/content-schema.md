# Content Schema

Use these frontmatter rules for content on `tech` and `days`.

## Notes

Notes live under `content/notes/[year]/[month]/[day]/[slug].md`.

```yaml
no: 1
title: ...
created: YYYY-MM-DD
category: regular
post: ...
tags: []
draft: true
```

### Fields

- `no`: required unique note number
- `title`: optional
- `created`: required date in `YYYY-MM-DD`
- `category`: required, one of `regular`, `link`, `collection`, `quote`, `til`, `post`
- `post`: optional reference to an associated post
- `tags`: optional, sorted alphabetically
- `draft: true`: remove to publish

## Posts

Draft posts are created in `content/posts/drafts/` and published posts live under `content/posts/[year]/[month]/[day]/[slug].md`.

```yaml
title: ...
created: YYYY-MM-DD
draft: true
```

### Fields

- `title`: required
- `created`: required date in `YYYY-MM-DD`
- `draft: true`: remove to publish
