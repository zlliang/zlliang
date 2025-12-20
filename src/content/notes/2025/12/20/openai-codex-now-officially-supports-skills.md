---
no: 4
title: "OpenAI Codex Now Officially Supports Skills"
created: 2025-12-20
tags: [Agent Skills, OpenAI, OpenAI Codex]
---

[OpenAI Codex now officially supports skills](https://x.com/OpenAIDevs/status/2002099762536010235). After a few days of people finding OpenAI was quietly adopting skills[^1], the announcement came today. The thread on X goes through how skills work in Codex and shows examples on how to install third-party pre-built skills like [Linear](https://linear.app/) and [Notion](https://notion.com/).

Two baked-in skills `skill-creator` and `skill-installer` are available in Codex, making bootstrapping and installing skills easier. See details in their [official documentation](https://developers.openai.com/codex/skills).

Codex's choice of skills location is `.codex/skills`, joining [the war](/notes/2025/12/19/agent-skills) with `.claude/skills`, `.github/skills`, and `.agents/skills`. I really want to see a unification here.

[^1]: Simon Willison's blog: [OpenAI are quietly adopting skills, now available in ChatGPT and Codex CLI](https://simonwillison.net/2025/Dec/12/openai-skills/)
