# Note Types

Use this file when the task depends on what a note is trying to do, not only how it is formatted.

## General rule

- Choose the note type by the note's job for the author and the reader
- Let structure follow intent: each type can stay short, but it should leave a clear trace of why it exists
- Prefer a small, complete note over an over-expanded one
- Do not force every note into the same essay-like shape

## Type registry

| Slug | English display | Chinese display | English description | Chinese description |
|---|---|---|---|---|
| `daily` | Daily | 日常 | A fresh thought, moment, or observation. | 鲜活的想法、片段或观察。 |
| `bookmark` | Bookmark | 书签 | Findings worth keeping, with my commentary. | 值得记录的发现，附上我的评论和想法。 |
| `til` | TIL (Today I Learned) | 小知识 | New knowledge worth sharing. | 值得分享的新知识、新收获。 |
| `post` | Post | 文章 | An introduction to a newly published post. | 介绍一篇新文章。 |

## `daily`

- Goal: capture something quickly while it is still alive
- Mindset: improvise first; record before polishing
- Shape: one or more paragraphs, fragments, or scenes; anything is acceptable if it preserves the moment, thought, or observation
- Done when: the note keeps the raw thing worth remembering; completeness matters less than traceability

## `bookmark`

- Goal: consume findings and show why they matter to you
- Mindset: your voice is the actual note, not the source; do not stop at clipping or bare linking
- Shape: flexible — a single annotated link, a curated list of related items, or a quoted passage with commentary; the common requirement is that your response is present, not just the source
  - For a single link: start with `[Link](url)`, then explain what stood out, what you think, or how it connects to earlier topics
  - For a curated set: short intro plus a grouped list; add light framing around why these items belong together and what pattern or theme they share
  - For a quoted passage: blockquote plus source attribution, then commentary that interprets, contextualizes, or connects
- Done when: a future reader can tell why this material matters to you, not only what the source is

## `til`

- Goal: share an exciting new thing you learned that may help someone else
- Mindset: stay flexible about form and scope; optimize for useful transfer, not rigid format
- Shape: in English, usually start with `**TIL:** ...`, then explain the new knowledge, why it was surprising, and how it may be useful
- Done when: the reader can quickly grasp the takeaway and why it is worth passing on

## `post`

- Goal: introduce a newly published post and pull readers into it
- Mindset: write a trailhead, not a flat metadata stub
- Shape: set `post:` in frontmatter, then use a few sentences or short paragraphs to say what the post covers, why it matters, and what may make someone click through
- Done when: the note creates curiosity and gives a reason to read the full post
