---
no: 11
title: How uv got so fast
created: 2025-12-27
category: link
tags: [Python, uv]
---

[How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html) ([via](https://news.ycombinator.com/item?id=46393992)). I haven't followed the Python ecosystem for maybe five years. But I know [uv](https://docs.astral.sh/uv/) has taken off. I have it on my Mac, and it's my go-to when I occasionally want to play with Python. It feels like [pnpm](https://pnpm.io/) or [Cargo](https://doc.rust-lang.org/stable/cargo/) — fast and modern.

I assumed Rust was the main reason uv is so fast. Turns out, that's actually the least important factor. Years of PEP standards made uv possible in the first place. Intentionally limited compatibility with `pip`, plus smart language-agnostic optimizations, did most of the heavy lifting. It's the design choices, not the language choice, that really matter.
