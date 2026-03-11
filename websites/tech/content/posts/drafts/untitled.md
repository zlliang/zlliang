---
title: What's next in this world of agents
created: 2026-03-06
---

It's a world of agents, and changing every single day. Amp is still my daily driver, but new concepts like [Pi] and new models like [GPT-5.4](https://openai.com/index/introducing-gpt-5-4/) announced earlier today made me confused.

I like what Amp delivers, the out-of-box experience on the frontier. What it gives is always the state-of-the-art workflow with the latest models.

Somehow, major agent labs are all secretly cooking new products. OpenClaw-like remote control experience? Multi-agent orchestration? Anyway, new harnesses. Andrej, OpenAI and the industry experienced the "vibe coding" era are all take it seriously now and turning to a new term "agentic engineering" [text](https://x.com/karpathy/status/2004607146781278521) [text](https://x.com/karpathy/status/2026731645169185220) [text](https://x.com/search?q=from%3Akarpathy%20vibe%20coding&src=typed_query&f=live) and there's also a common view that the core of agent engineering is "harness engineering", meaning how system prompts, tools, subagents, verification loops and agent loops are we providing to control the agent's behavior.

New practices are borning.

Readings:

- Amp, The Coding Agent is Dead
- Mario Zechner's [text](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/), and Armin Ronacher's [text](https://lucumr.pocoo.org/2026/1/31/pi/)
- OpenAI: [text](https://openai.com/index/harness-engineering/), Anthropic: [text](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- Thorsten Ball's teaser on what's coming to Amp [text](https://x.com/thorstenball/status/2026632226771959871)

Why not Claude Code / Codex? - Not to lock in, but feasible to exploring.

More curious things:

- Agentic Enginnering Patterns [text](https://simonwillison.net/guides/agentic-engineering-patterns/)

- Agent contribution auditing, Git-AI or Entire
- Agent sandboxing
- Agents running in Cloud VMs, [text](https://cursor.com/blog/agent-computer-use), [text](https://cursor.com/blog/third-era), [text](https://x.com/karpathy/status/2027501331125239822), [text](https://x.com/cursor_ai/status/2026369873321013568)
- CLI over MCP [text](https://ejholmes.github.io/2026/02/28/mcp-is-dead-long-live-the-cli.html) [text](https://x.com/karpathy/status/2026360908398862478)
- [text](https://x.com/karpathy/status/2015883857489522876)
- Claws [text](https://x.com/karpathy/status/2024987174077432126)

Raycast?

---

Agent practices tracker:

_As of 2026-03-10. `✓` = first-class support, `~` = partial / emerging / indirect, `×` = no public first-class support I found._

| Practice | Claude Code | Codex | Amp | Cursor | OpenCode | I'm using |
| --- | --- | --- | --- | --- | --- | --- |
| Project instruction files (`AGENTS.md`, `CLAUDE.md`, rules) | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| MCP tool integration | ✓ | ✓ | ✓ | ✓ | ✓ | 🟡 |
| Subagents | ✓ | × | ✓ | ✓ | ✓ | 🟡 |
| Skills / hooks / reusable workflow units | ✓ | ✓ | ✓ | ✓ | × | 🟡 |
| Cloud / background agents | × | ✓ | × | ✓ | × | 🔴 |
| Multi-agent parallel work | ✓ | ✓ | ✓ | ✓ | ✓ | 🟡 |
| Browser / computer use | × | ✓ | × | ✓ | × | 🔴 |
| Scheduled / event-driven automations | ✓ | ✓ | × | ✓ | × | 🔴 |
| Code / PR review agents | ✓ | ✓ | ~ | ✓ | × | 🔴 |
| Plan-only / restricted analysis mode | ✓ | × | × | ✓ | ✓ | 🟡 |

Sources: [Claude Code docs](https://code.claude.com/docs/en/sub-agents), [Claude Code MCP](https://code.claude.com/docs/en/mcp), [Claude Code hooks](https://code.claude.com/docs/en/hooks), [Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions), [Codex cloud docs](https://developers.openai.com/codex/cloud), [Codex MCP docs](https://developers.openai.com/resources/docs-mcp), [Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/), [Codex product page](https://openai.com/codex/), [Amp manual](https://ampcode.com/manual), [Amp subagents](https://ampcode.com/notes/agents-for-the-agent), [Amp AGENTS.md](https://ampcode.com/news/AGENTS.md), [Cursor background agents docs](https://docs.cursor.com/background-agents), [Cursor MCP docs](https://docs.cursor.com/context/model-context-protocol), [Cursor Bugbot docs](https://docs.cursor.com/en/bugbot), [Cursor cloud agents](https://cursor.com/blog/cloud-agents), [Cursor automations](https://cursor.com/blog/automations), [Cursor computer use](https://cursor.com/blog/agent-computer-use), [OpenCode agents](https://opencode.ai/docs/agents/), [OpenCode rules](https://opencode.ai/docs/rules), [OpenCode MCP servers](https://opencode.ai/docs/mcp-servers), [OpenCode modes](https://opencode.ai/docs/modes/)
