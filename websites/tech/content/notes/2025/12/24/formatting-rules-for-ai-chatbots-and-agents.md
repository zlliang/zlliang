---
no: 8
title: Formatting rules for AI chatbots and agents
created: 2025-12-24
category: regular
tags: [LLMs]
---

I gradually realized that a unified formatting rule set is needed when working with multiple AI chatbots and agents.

Output formatting styles vary from model to model. For technical topics, I've found that Claude tends to output responses like complete documents, starting with an `h1` heading and loves to use horizontal rules to separate sections; Gemini usually skips to `h3` headings directly without `h2` ones, which in my opinion is not a good practice.

Here are examples I tried on [OpenRouter](https://openrouter.ai/), prompting "Explain the Python programming language."

<div class="image-grid">

![Python explanation by GPT-5.2](./images/python-explanation-by-gpt-5.2.png "GPT-5.2, starting with an introductory paragraph and followed by sections")

![Python explanation by Claude Opus 4.5](./images/python-explanation-by-claude-opus-4.5.png "Claude Opus 4.5, a document-like output with an h1 heading at the top and multiple horizontal rules")

![Python explanation by Gemini 3 Flash](./images/python-explanation-by-gemini-3-flash.png "Gemini 3 Flash, using h3 headings directly")

![Python explanation by Kimi K2 Thinking](./images/python-explanation-by-kimi-k2-thinking.png "Kimi K2 Thinking, also a document-like one")

</div>

Even worse, from my experience, outputs from different versions of the same model series (e.g. GPT-5 and GPT-5.2) can vary greatly in terms of formatting.

To address this issue, and to unify output styles of different tools I'm using ([ChatGPT](https://chatgpt.com/) as my daily driver, [Gemini](https://gemini.google.com/) for work, and [Amp](https://ampcode.com) as my coding agent), I drafted a minimal formatting guide as follows:

> The following formatting rules MUST BE FOLLOWED.
> 
> Shared formatting rules:
> 
> - Use consistent formatting within the same response
> - Insert spaces between English words and CJK characters
> - Always specify the language for syntax highlighting when using fenced code blocks
> - Never number headings (e.g., `## About me`, not `## 1. About me`)
> - Never horizontal dividers (`<hr>` or `---`) unless they add clear structural value, especially not directly before headings
> - For list items, do not use a period at the end unless the item is a complete sentence
> 
> For chat responses:
> 
> - Use "Sentence case" for chat names (auto-generated chat titles) and all section headings (capitalize the first word only), never use "Title Case" in such circumstances
> - Use heading levels sequentially (`h2`, then `h3`, etc), never skip levels; Introductory paragraphs may be needed before the first heading in chat responses; Never use `h1` for chat responses
> - Avoid filler, praise, or conversational padding (for example "Good question", "You're absolutely right")
> 
> For document generation and editing:
> 
> - Use "Title Case" for top-level headings (e.g. `h1`), typically only once in a document, and "Sentence case" for section headings (capitalize the first word only)
> - Use heading levels sequentially (`h2`, then `h3`, etc), never skip levels

I apply these rules to the custom instructions setting in ChatGPT and to [AGENTS.md](https://github.com/zlliang/dotfiles/blob/15fa31221ccd49d5a4ca5abb000ca543c8888bd4/.config/amp/AGENTS.md#writing-style) for my coding agent.

**Update Jan 18, 2026:** Slightly revised the formatting rules for clarity. See this commit: [zlliang/dotfiles@fa13ab1](https://github.com/zlliang/dotfiles/commit/fa13ab1df5b8b4862edcfadc0e6512cdaef72173).

![Custom instructions setting in ChatGPT](./images/chatgpt-custom-instructions.png "Custom instructions setting in ChatGPT")
