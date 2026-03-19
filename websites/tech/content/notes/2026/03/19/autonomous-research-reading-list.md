---
no: 55
title: Autonomous research reading list
created: 2026-03-19
type: collection
draft: true
---

I wanted a deeper map of what people currently mean by *autoresearch*: not just one product demo, but the actual operating pattern across independent builders and major labs.

Below is a layered reading list, starting from primary sources and then moving outward.

**Layer 1: Primary sources (the pattern as built)**

- [Andrej Karpathy: `autoresearch` repository](https://github.com/karpathy/autoresearch)
- [Andrej Karpathy: `program.md` in `autoresearch`](https://github.com/karpathy/autoresearch/blob/master/program.md)
- [Andrej Karpathy on X (Mar 7, 2026): packaging `autoresearch` as a minimal repo](https://x.com/karpathy/status/2030371219518931079)
- [Andrej Karpathy on X (Mar 8, 2026): next step as asynchronously collaborative agents](https://x.com/karpathy/status/2030705271627284816)
- [Andrej Karpathy on X (Mar 5, 2026): agents iterating on `nanochat` before `autoresearch` release](https://x.com/karpathy/status/2029701092347630069)

What stands out to me in Karpathy’s framing:

- The loop is explicit and measurable: agent edits `train.py`, runs fixed-budget experiments (5 minutes), and optimizes a single target metric (`val_bpb`)
- The human’s main job shifts from writing model code to writing and iterating the *meta-program* (`program.md`), i.e. instructions, constraints, and workflow
- Git is used as the memory and selection mechanism: keep good commits, discard bad ones, branch for parallel ideas
- The March 8 post hints at a larger design jump: from one autonomous researcher to many collaborating agent branches, with lightweight “papers” as summaries

**Layer 2: Commentary and method (the pattern as practiced)**

- [Simon Willison: AI assisted search-based research actually works now](https://simonwillison.net/2025/Apr/21/ai-assisted-search/)
- [Simon Willison: Code research projects with async coding agents like Claude Code and Codex](https://simonwillison.net/2025/Nov/6/async-code-research/)
- [Simon Willison: deep-research tag archive](https://simonwillison.net/tags/deep-research/)

Willison’s posts add practical constraints that I think are easy to miss in hype cycles:

- “Useful now” does not mean “trust blindly”: citation-backed reports are better, but omission and subtle mistakes still happen
- Async agents shine when tasks are *verifiable by execution* (code runs, benchmarks pass, artifacts render) rather than judged by prose quality alone
- A dedicated sandbox repo with clear scope and disposable outputs can dramatically improve safety and speed for exploratory runs
- Research quality depends heavily on loop transparency: seeing search/refinement steps matters more than polished final wording

**Layer 3: Productized deep research (the pattern as sold)**

- [OpenAI: Introducing deep research](https://openai.com/index/introducing-deep-research/)
- [Google: Gemini Deep Research launch post](https://blog.google/products/gemini/google-gemini-deep-research/)
- [Perplexity: Introducing Perplexity Deep Research](https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research)

Common product pattern across all three:

- Multi-step web exploration in a tool-using loop
- Iterative search and plan refinement
- Long-form report synthesis with citations
- Minutes-level latency instead of chat-level latency

Differences that matter in practice are mostly around transparency, controllability, and workflow fit:

- How much of the process is inspectable while it runs
- Whether I can constrain sources or environments
- Whether outputs are easy to export, diff, and reuse in my own pipeline

**My current synthesis**

I think “autoresearch” is splitting into two related but different tracks:

1. **Code-loop autoresearch** (Karpathy-style): optimize an executable system through autonomous experiment loops, with objective metrics and git-native evolution
2. **Web-loop deep research** (consumer tools): optimize information gathering and synthesis over web sources, usually ending in report artifacts

The most important shared idea is not “agent autonomy”, but **loop engineering**:

- Pick a target that can be evaluated repeatedly
- Make iteration cheap and frequent
- Keep traces so good steps compound and bad steps are reversible

Where this still breaks:

- Weak or fuzzy objective functions
- Low source quality and hidden omission errors
- Prompt-injection and trust-boundary issues in open web workflows
- Poor mechanisms for multi-agent branch coordination and result selection

If I had to summarize the 2026 state in one line: **autoresearch is now operationally real, but only in domains where verification and loop design are stronger than narrative polish**.
