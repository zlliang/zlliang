---
no: 5
title: "TIL: You can paste URLs as Markdown formatted links in VS Code"
created: 2025-12-22
tags: [code editing, Markdown, TIL (Today I Learned), VS Code]
---

**TIL:** When editing Markdown files in [VS Code](https://code.visualstudio.com/), you can paste URLs as formatted links via the `markdown.editor.pasteUrlAsFormattedLink.enabled` setting.

This setting was first introduced in June 2023, with [the release of VS Code 1.80](https://code.visualstudio.com/updates/v1_80#_markdown-format-pasted-urls-as-markdown-links).

This is a nice quality-of-life feature. I used to type brackets, parentheses, and URLs manually, always wishing for a simpler way. I'm now using the `smart` option, which "smartly creates Markdown links by default when not pasting into a code block or other special element."

Here's a quick demo:

![Paste URLs demo](./images/paste-urls-demo.gif)
