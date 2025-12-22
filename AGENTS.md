# AGENTS.md

This document defines how AI assistants (e.g., ChatGPT, Codex, Amp) help me develop and write for my personal website.

## Part 1: Development

### Tech stack

- **Framework:** [Astro](https://docs.astro.build/llms.txt)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Iconify](https://iconify.design/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Bun](https://bun.com/)
- **Deployment:** [Vercel](https://vercel.com/)

### Commands

```bash
bun run dev       # Start dev server
bun run build     # Build for production
bun run preview   # Preview production build
bun run new <note|post> [title]  # Create a new note or post
```

### Project structure

```
src/
├── components/    # Astro components (.astro)
├── content/       # Content collections
│   ├── notes/     # Short-form notes ([year]/[month]/[day]/[slug].md)
│   ├── posts/     # Long-form posts ([year]/[month]/[day]/[slug].md)
│   └── fragments/ # Reusable content fragments
├── pages/         # File-based routing
├── styles/        # Global CSS (main.css)
└── utils/         # Helper functions
```

### Content schema

Notes use frontmatter with these fields:

```yaml
no: 1               # Required, unique note number (auto-incremented)
title: ...          # Optional
post: ...           # Optional, refers to a post
created: YYYY-MM-DD # Required
tags: []            # Optional, sorted alphabetically
draft: true         # Remove this field to publish
```

Posts use frontmatter with these fields:

```yaml
title: ...          # Required
created: YYYY-MM-DD # Required
draft: true         # Remove this field to publish
```

### Conventions

- **Path alias:** Use `@/*` for `src/*` imports
- **Components:** PascalCase `.astro` files
- **Content:** Organized by `[year]/[month]/[day]/[slug].md`
- **Styling:** Tailwind utilities; global styles in `src/styles/main.css`
- **Code themes:** `github-light-default` / `github-dark-default` ([Shiki](https://shiki.style/))
- **Git commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/)

### Development guidelines

- Check existing components before creating new ones
- Follow Astro patterns for data fetching (`getCollection`, `getEntry`)
- Use `lodash-es` and `date-fns` for utilities (already installed)
- Custom rehype plugins go in `src/utils/rehype.ts`
- Run `bun run build` to verify production build

## Part 2: Writing

### Purpose

My native language is Chinese, and I have never lived in an English-speaking country. I'm now writing an English blog with a clear goal: not just to publish polished posts, but to **internalize native-style writing intuition** and **build my own distinctive English writing style** — to write with precision, logic, and quiet confidence.

### Quick reference: Common issues to watch

Watch for these patterns in my writing:

- **Missing articles:** "I wrote code" → "I wrote the code" or "I wrote some code"
- **Wrong prepositions:** "focus to" → "focus on" / "different with" → "different from"
- **Passive voice overuse:** "The function was called" → "We called the function"
- **Awkward transitions:** "So, ..." / "Then, ..." → Use varied connectors
- **Noun-heavy phrases:** "make a decision" → "decide" / "give consideration" → "consider"
- **Redundancy:** "in order to" → "to" / "the reason is because" → "because"

### Writing focus

I write **technical essays** and gradually expand into **personal growth and life reflections**.

Writers I admire: Bob Nystrom, Simon Willison, Alex Kladov (matklad), Josh Comeau, Mitchell Hashimoto, Paul Graham.

### Core principles

1. **Clarity before complexity.** Use simple, direct language to explain complex ideas.
2. **Precision and correctness.** Technical accuracy outweighs literary flourish.
3. **Gradual personality.** Begin with neutral, professional tone; add subtle personal warmth over time.
4. **Active, vivid verbs.** Prefer "measure," "observe," "refactor" over noun-heavy abstractions.
5. **Readable structure.** Each post should guide the reader step by step; avoid info dumps.
6. **Learning through iteration.** Each revision must teach me something about rhythm, syntax, or clarity.

### Tone & style directives

**General register:** Semi-formal → precise, human, and conversational in rhythm.  
**Voice:** Curious, patient, pragmatic. Never pretentious.

Do:
- Start paragraphs with a clear statement or question
- Keep sentences short-to-medium length (12–25 words)
- Use examples, metaphors, or analogies to clarify, not to decorate
- For technical writing:
  - Use "you" sparingly; prefer "we" or neutral descriptions
  - Introduce code naturally with explanation before and after
- For reflective writing:
  - Keep language sincere, not sentimental
  - Balance emotion with analysis

Avoid:
- **Marketing tone:** "This amazing feature will revolutionize..." → "This feature simplifies..."
- **Overly formal:** "One must consider..." → "Consider..." or "We should consider..."
- **Filler phrases:** "It is important to note that" → just state it directly
- **Vague language:** "pretty good" / "kind of" / "somewhat" → be precise or omit

For detailed style guide, see @content/STYLE.md.

### Code & technical terminology

- **Always use backticks** for code elements: `function`, `const`, `npm install`
- **Proper names stay unchanged:** React, TypeScript, PostgreSQL (not "Postgres" unless informal)
- **Keep code snippets minimal:** Show only relevant lines; use comments sparingly
- **Format consistently:**
  - File paths: `src/components/Button.tsx`
  - Commands: `npm run build`
  - Variables: `userName`, `isActive`
- **Explain unfamiliar terms** on first use, then use freely

### How to help

#### When reviewing my writing:

- Fix grammar, punctuation, and unnatural phrasing (especially Chinese → English translation patterns)
- Ensure technical accuracy and logical flow
- Simplify complex sentences; prefer active, vivid verbs
- Maintain consistent formatting for code and terminology
- Keep tone balanced: confident yet approachable
- Help develop my voice, not impose yours — make it sound like me, just clearer

#### When making edits:

Show before/after comparisons with brief explanations:

Example:
> ❌ Before: "In order to make the application run faster, we need to do optimization for the database queries."
> 
> ✅ After: "To speed up the application, we need to optimize database queries."
> 
> Why: Removed "in order to" → "to", changed "make run faster" → "speed up", changed "do optimization for" → "optimize"

Point out recurring issues so I can learn:
> "Watch for 'make + noun' constructions — often there's a direct verb: make a decision → decide, make improvements → improve"

#### Final check:

- ✅ Technically accurate
- ✅ Grammatically natural
- ✅ Readable aloud

### Daily workflow

1. **Draft freely** in Markdown — don't self-edit too early
2. **Self-review** against Quick Reference list above
3. **Request AI review** for one section at a time (not whole post)
4. **Study the edits** — understand why, not just what changed
5. **Revise and finalize** — make it sound like me, not the AI

**Don't aim for perfection.** Ship when it's clear, accurate, and helpful.

For my notes and posts drafting workflow, see @content/WORKFLOW.md.

### Long-term goals

- Build the ability to **think and write in English** about technical systems fluently
- Develop a distinct, trustworthy technical voice
- Gradually integrate emotional and philosophical depth into technical subjects
- Maintain an evolving AGENTS.md that reflects growth from clarity → confidence → expressiveness

---

> **Note:** This file evolves alongside my codebase and writing maturity. Major blog milestones (e.g., yearly review) should revisit and update tone, domains, and agent instructions.
