---
no: 67
title: Wrote a simple CLI tool
created: 2026-04-22
type: regular
---

I got up early this morning. After making a cup of coffee, I had two to three hours before work. I spun up my coding agents and completed a first version of **[Chore](https://github.com/zlliang/chore)**.

It's a simple task runner for repetitive daily chores. I found myself regularly updating all the software and packages on my computers. On my work laptop, I also have to run two authentication commands every day due to my company's security policy. I used to handle these with shell scripts, but I wanted a dedicated tool.

Thanks to agentic coding, I managed to develop and release a usable version in less than three hours. The CLI is simple, but there used to be a lot of friction just getting started.

It's a very early version, but I've already adopted it and written a [configuration file](https://github.com/zlliang/dotfiles/blob/main/dot_config/chore/config.toml.tmpl) for my daily chores. I even built a [Homebrew tap](https://github.com/zlliang/homebrew-tap) for it. Once I polish it more, I'll write a detailed introduction.
