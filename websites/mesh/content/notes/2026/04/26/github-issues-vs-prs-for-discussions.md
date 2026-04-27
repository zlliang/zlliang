---
number: 76
title: GitHub issues vs PRs for discussions
created: 2026-04-26
---

I was working on a GitHub issue in one of my own repos today, and a question came to mind that I found interesting: **In general, where should discussions take place in a GitHub repo, like design decisions and thoughts? Issues or PRs?**

I asked my coding agent, and thought its answer was worth keeping:

> Short answer: **Issues for the what and why; PRs for the how.**
>
> A common convention:
>
> - **Issues** — problem framing, design decisions, architectural discussions, RFCs, feature requests, bug reports. Long-lived, discoverable, not tied to a specific code change. This is where "should we do X, and why" lives.
> - **Pull requests** — implementation review: discussions about the specific code, line-level feedback, trade-offs in this particular approach. Short-lived, tied to a diff.
> - **Discussions** (if enabled) — open-ended Q&A, ideas, announcements, community conversations that aren't actionable issues.
>
> Practical guidance:
>
> - Hash out design in an issue before opening a PR, especially for non-trivial work. The PR then references the issue (Closes #123) and focuses on reviewing the code, not relitigating the design.
> - For larger efforts, some projects use an RFC issue (or a docs/rfcs/ markdown PR) as the canonical design record.
> - Keep PR review comments scoped to the diff. If a fundamental design question surfaces mid-review, move it back to the issue.
> - Decisions worth preserving long-term should end up in the repo itself (ADRs, design docs in docs/), not just buried in issue threads.
>
> Rule of thumb: if someone six months from now needs to understand why the code looks this way, they should find it in an issue or a doc — not by scrolling through PR review comments.
