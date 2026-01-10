---
no: 2
title: Agent Skills
created: 2025-12-19
category: link
tags: [Agent Skills, Anthropic, coding agents]
---

[Agent Skills](https://agentskills.io/) ([via](https://x.com/alexalbert__/status/2001760879302553906)). Anthropic published Agent Skills as an open standard yesterday[^1], just a few days after they co-founded the [Agentic AI Foundation](https://aaif.io/) and donated the [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) to it[^2]. Now, along with the widely adopted [AGENTS.md](https://agents.md/), there are three major agentic AI patterns for managing context and tools.

Among the three, AGENTS.md is the simplest and most straightforward one, which is essentially a dedicated README.md for coding agents. It is usually loaded in the context window when starting a session, providing general instructions to help coding agents know the user and the workspace better.

It originated from OpenAI to unify the chaotic name conventions of agent instruction files, before which we had `.cursorrules` for Cursor, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, etc. It has been gradually adopted by almost all coding agents, except Claude Code, which still insists on its [CLAUDE.md](https://code.claude.com/docs/en/memory). (There's an [open issue](https://github.com/anthropics/claude-code/issues/6235) though.)

Agent Skills is another neat practice. Introduced by Anthropic in October 2025[^3], it is a composable and token-efficient way to provide capabilities to agents. LLMs can call tools, and Agent Skills is just a simple and standardized way to define a set of tools. A skill is a set of domain-specific instruction files, which can be loaded on demand by the agent itself. Besides instructions in Markdown, a skill can also bundle a set of scripts and supplementary resource files, enabling the agent to run deterministic and reproducible tasks.

[Amp](https://ampcode.com/), my current coding agent choice, just released the support for Agent Skills earlier this month[^5]. Along with Agent Skills becoming an open standard, GitHub Copilot and VS Code announced their support for it[^4]. Also, [Dax](https://thdxr.com/), one of [OpenCode](https://opencode.ai/) maintainers, committed to adding support in the upcoming days[^6]. Though, the skills folder name convention is still not unified, `.claude/skills` for Claude Code, `.github/skills` for GitHub Copilot, and `.agents/skills` for Amp. I'd like to see the neutral `.agents/skills` win.

Compared with these two approaches, MCP is way more complex. It uses a server-client architecture and JSON-RPC to communicate, instead of natural language — the native language of LLMs. An MCP server can provide remote tools, resources and pre-built prompts to the MCP client baked in an agent, enhancing the agent's capabilities. It was introduced by Anthropic at the end of 2024[^7], and after one year of adoption, its limitations like authorization overhead and token inefficiency have started to emerge, not to mention its difficulty to implement and integrate. In fact, the only MCP server that is still catching my eye is [Playwright MCP](https://github.com/microsoft/playwright-mcp), which simply gives the browser automation superpower to coding agents. Honestly I didn't manage to find a chance to try out MCP deeply. Opinions here are merely my observations and largely shaped by discussions on it, like [Simon Willison's post](https://simonwillison.net/2025/Oct/16/claude-skills/#skills-compared-to-mcp).

Personally, I'm already adopting AGENTS.md [globally](https://github.com/zlliang/dotfiles/blob/8a31ffc0a0b98fbf25a1959b535351057197dc46/.config/amp/AGENTS.md) and in my [personal projects](https://github.com/zlliang/zlliang/blob/4349c1723d3e12a7f7ca947351415eb260ce0b64/AGENTS.md). Since Agent Skills becomes more and more promising, I'm looking forward to trying it out, diving deeply, and building my own set of skills.

[^1]: Claude blog: [Skills for organizations, partners, the ecosystem](https://claude.com/blog/organization-skills-and-directory)
[^2]: Anthropic news: [Donating the Model Context Protocol and establishing the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
[^3]: Claude blog: [Introducing Agent Skills](https://claude.com/blog/skills)
[^4]: GitHub blog: [GitHub Copilot now supports Agent Skills](https://github.blog/changelog/2025-12-18-github-copilot-now-supports-agent-skills/)
[^5]: Amp news: [Agent Skills](https://ampcode.com/news/agent-skills)
[^6]: [Dax's post on X](https://x.com/thdxr/status/2001717794946031740)
[^7]: Anthropic news: [Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)
