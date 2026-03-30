# Content Style Guide

Use this file for repo-specific style decisions for notes and posts on `hack` and `muse`.

## Terms

- `note` / `手记`: short-form entry
- `post` / `文章`: long-form entry
- `type` / `分类`: note type

## Titles and headings

- Post titles use title case
- Note titles usually use sentence case; for `link` and `post` notes, match the linked item's or post's title when that reads better
- Section headings use sentence case
- Keep headings short and avoid trailing punctuation

## English italics

- Do not italicize linked article, post, note, video, or thread titles; write them as plain links
- Use italics for complete work titles such as books, films, shows, and publications
- Use italics sparingly for words used as words, such as _slop_

## English quotation marks

- Use double quotation marks for ordinary quoted words and phrases in prose
- Use double quotation marks, not italics, for short work titles when needed in running text
- Keep punctuation inside quotation marks only when it belongs to the quoted material

## Note types

- Read [note-types.md](./note-types.md) when the task depends on the note's goal, mindset, or "done" criteria
- `regular`: free-form note; keep capture and speed over polish
- `link`: start with `[Link](url)`, then comment
- `collection`: short intro plus a curated list
- `quote`: blockquote with source attribution, then commentary
- `til`: in English, usually start with `**TIL:** ...`
- `post`: introduce the related post, create interest, and set `post:` in frontmatter

## Update notes

- Use update notes for later corrections, reversals, clarifications, or important follow-up context
- Keep all updates for one entry inside a single `<div class="update-note">...</div>` block
- Put the block near the end by default
- Format each update as `**Update MMM D, YYYY:** ...` in English or `**YYYY 年 M 月 D 日更新：**...` in Chinese
- Order multiple updates from earliest to latest
- Move the update note to the top only if the original text would otherwise mislead readers before they reach the end

## Dates and spacing

- Frontmatter dates use `YYYY-MM-DD`
- English prose dates use `MMM D, YYYY`
- Chinese prose dates use `YYYY 年 M 月 D 日`
- Insert spaces between English words and CJK characters
