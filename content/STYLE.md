# Content Style Guide

A formatting reference for blog posts and notes.

## Titles and headings

- **Post titles:** Use title case (capitalize major words)
  - ✅ "Building a Parser from Scratch"
  - ❌ "Building a parser from scratch"
- **Note titles:** Use sentence case generally; for `link` and `post` notes, match the associated link or post title's casing
- **Section headings (`h2`, `h3`, etc.):** Use sentence case (capitalize first word only)
  - ✅ "How it works"
  - ❌ "How It Works"
- **Keep headings short:** Aim for 3–8 words; avoid punctuation at the end

## Note categories

Notes are categorized by a `category` field in frontmatter. Available values: `regular`, `link`, `til`, `post`.

| Category | Description | Content format |
|----------|-------------|----------------|
| `regular` | General notes, observations, thoughts | No convention |
| `link` | Link notes with commentary | Start with `[Link](url) ([via](url)). ...` (the source is optional) |
| `til` | Today I Learned entries | Start with `**TIL:** ...` |
| `post` | Notes introducing a blog post | Introduce the corresponding post; set `post:` reference |

More categories may be added in the future.

## Tags

Tags are taxonomic nouns used to categorize content.

- **Singular vs. plural:**
  - Use singular for uncountable concepts: "blogging", "design", "music"
  - Use plural for countable classes: "coding agents", "tools", "frameworks"
- **Casing:** Use sentence case; only capitalize acronyms, names, and proper nouns
  - ✅ "coding agents", "blogging", "JavaScript", "Simon Willison", "API design"
  - ❌ "Coding Agents", "simon willison", "api design"

## Links

- **Link text:** Use sentence case; never capitalize for emphasis
  - ✅ "See the [official documentation](...)."
  - ❌ "See the [Official Documentation](...)."
  - Exception: Respect original casing when using a page's actual title
- **Be descriptive:** Avoid generic text like "click here" or "this link"
  - ✅ "Read the [Astro routing guide](...)."
  - ❌ "[Click here](...) for more info."
- **Prefer inline links** over reference-style for short posts

## Emphasis

- **Bold (`**text**`):** Use for key terms on first introduction, UI elements, or strong warnings
- **Italics (`_text_`):** Use for book/article titles, foreign words, or slight emphasis
- **Avoid overuse:** If everything is bold, nothing is bold

## Lists

- Use **bullet lists** for unordered items
- Use **numbered lists** only when order matters (steps, rankings)
- Keep list items parallel in structure
- No period at the end unless items are complete sentences

## Code

- Inline code (`` `code` ``): Variable names, function names, file paths, commands
- Code blocks: Multi-line code, terminal output, configuration files
- Always specify the language for syntax highlighting

## Punctuation

- Use **serial comma** (Oxford comma): "apples, oranges, and bananas"
- Use **em dash** (`—`) for interruptions or asides
- Use **en dash** (`–`) for ranges: "pages 10–15", "2020–2024"
- One space after periods, not two

## Numbers

- Spell out one through nine; use numerals for 10 and above
- Always use numerals for: code, measurements, percentages, versions
- Use numerals when comparing: "3 bugs vs. 12 bugs"

## Misc

- Write dates as `YYYY-MM-DD` in frontmatter; "Dec 18, 2025" in prose
- Avoid abbreviations on first use; introduce with full term
- Keep paragraphs short (3–5 sentences max)
