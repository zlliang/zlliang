# Content Style Guide

A repo-specific formatting reference for blog notes and posts.

## Glossary

Here are clarifications for the shared terms:

| Term | Definition | English | Chinese | Chinese quantifier |
|------|------------|---------|---------|--------------------|
| note | Short-form notes | note | 手记 | 则 |
| post | Long-form posts | post | 文章 | 篇 |
| type | Note type | type | 分类 | 个 |
| tag | Note topic | tag | 标签 | 个 |

## Titles and headings

- **Post titles:** Use title case (capitalize major words)
  - ✅ "Building a Parser from Scratch"
  - ❌ "Building a parser from scratch"
- **Note titles:** Use sentence case generally; for `link` and `post` notes, match the associated link or post title's casing
- **Section headings (`h2`, `h3`, etc.):** Use sentence case (capitalize first word only)
  - ✅ "How it works"
  - ❌ "How It Works"
- **Keep headings short:** Aim for 3–8 words; avoid punctuation at the end

## Type-specific content shape

- `regular`: No special content shape
- `link`: Start with `[Link](url)`, optionally followed by `([via](url))`, then add commentary
- `collection`: Use a short intro line followed by a bullet list of links or items
- `quote`: Use blockquote syntax with source attribution, then optional commentary
- `til`: English notes usually start with `**TIL:** ...`
- `post`: Introduce the related post and set the `post:` reference in frontmatter

## Misc

- Write dates as `YYYY-MM-DD` in frontmatter; "Dec 18, 2025" in English prose and "2025 年 12 月 18 日" in Chinese prose
- Insert spaces between English words and CJK characters
