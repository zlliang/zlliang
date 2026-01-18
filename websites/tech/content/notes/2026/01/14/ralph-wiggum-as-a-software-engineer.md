---
no: 23
title: Ralph Wiggum as a "software engineer"
created: 2026-01-14
category: link
tags: [coding agents, Ralph]
---

[Ralph Wiggum as a "software engineer"](https://ghuntley.com/ralph/). The AI field is evolving so fast like your math classes in high school, that if you miss a week, you're suddenly lost. For me recently, it's **Ralph**, a new pattern for coding agents that pushes them to a higher automation level.

Its name comes from a character called Ralph Wiggum in the show [_The Simpsons_](https://en.wikipedia.org/wiki/The_Simpsons), who somehow captures the spirit of this technique.

To get familiar with Ralph, I skimmed (and watched) these materials, in addition to the original post by [Geoffery Huntley](https://ghuntley.com/):

- Matt Pocock's walkthroughs: [_Ship working code while you sleep with the Ralph Wiggum technique_](https://www.youtube.com/watch?v=_IK18goX4X8), and [_11 Tips For AI Coding With Ralph Wiggum_](https://www.aihero.dev/tips-for-ai-coding-with-ralph-wiggum)
- Greg Isenberg's video: [_"Ralph Wiggum" AI Agent will 10x Claude Code/Amp_](https://www.youtube.com/watch?v=RpvQH0r0ecM)
- Ryan Carson's article on X: [_Step-by-step guide to get Ralph working and shipping code_](https://x.com/ryancarson/status/2008548371712135632)

In short, Ralph is a technique that **runs your coding agent sessions in a loop**. It pushes the typical coding agent workflow — you give it a task, watch it work, and then a new task based on its output — forward by making the agent itself assess the outputs and decide what's next. Back in 2025, we've got the agreement that an "agent" is simply an AI program running tools in a loop to achieve a goal[^1]. Ralph extends that idea naively: **It's a bash script running agent sessions in a loop to achieve a goal.**

To run agents the Ralph way, you basically need the following harnesses:

- A bash script that simply runs your coding agent in a for loop
- A PRD file that lists and tracks the tasks, commonly organized as `prd.json`
- A progress note that the agent appends to when completing tasks, providing relevant context to the next agent session, commonly organized as `progress.txt`

These elements reveal what's truly valuable about the Ralph idea: **It formalizes a context engineering approach when tackling large scale development requirements.** And that's why Ralph differs from just using a single agent session for all tasks. Every time the session completes a task, it checks the tasks in `prd.json`, appends notes to `progress.txt`, and usually makes a git commit. Then a new agent session starts with the context window cleared, so the files the last session updated serve as the only memory of the Ralph loop.

Rough notes here. If you're interested in the details, check the materials above. It's indeed a new idea in the field and the community will explore it further to see if it'll truly stand out.

[^1]: Simon Willison's well-known article: [I think “agent” may finally have a widely enough agreed upon definition to be useful jargon now](https://simonwillison.net/2025/Sep/18/agents/)
