---
title: Starting a Blog at the End of 2025
created: 2025-12-25
---

Happy holidays! At the end of 2025, I'm starting a blog. I've already written several entries and feel confident I can keep it going. Here are my thoughts on the journey I'm about to start.

## A thousand attempts

Actually, this is not the first time I've tried to start a blog. I used to have a writing habit in high school and in college, keeping a diary in Chinese. Since 2020, I've been writing less and less, though. Those diaries are now archived in [Notion](https://www.notion.com/).

I registered several domains, built my website several times, trying to start blogging. During the last ten years, I've tried a lot of tech stacks, starting with the ancient [Hexo](https://hexo.io/), then [VuePress](https://vuepress.vuejs.org/), [Next.js](https://nextjs.org), and [VitePress](https://vitepress.dev/). I learned a lot of web technologies on this journey, and it even helped me find my first job as a frontend developer at [Tencent](https://www.tencent.com/).

But it was more like a playground for me to practice programming, instead of a place for writing. I didn't really start writing real content in public until now.

Here are two previous attempts (I'm not good at keeping records. I asked my coding agent to dig into the Git commit history of this website and eventually found some screenshots[^1]):

<div class="image-grid">

![Screenshot in August 2018](./images/blog-screenshot-2018-08.png "2018 version, attempting to run a mix of Chinese and English content, built with VuePress")

![Screenshot in July 2019](./images/blog-screenshot-2019-07.png "2019 version, more of a portfolio-style site, built with Next.js")

</div>

I value these previous attempts. No failure, no success. Now it's another attempt, a serious one (although I say that every time). I'm excited to see what I can do with this blog, on https://zlliang.me.

## Writers who inspired me

Throughout these years — I mean my exploration of the software development world — I've been inspired by many great writers. Their write-ups have generally been more vivid than thick textbooks, and they've fascinated me with both their understanding of relevant topics and their writing skills. They've motivated me to write, maybe just for myself, and even better, to write things that other people can benefit from.

Here are a few of the writers I admire:

### Josh Comeau

At the beginning of my professional career as a frontend web developer, learning modern concepts and frameworks like [React](https://react.dev/) and [CSS Flexbox](https://developer.mozilla.org/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) took me a huge amount of time. On this journey, [Josh Comeau](https://www.joshwcomeau.com/) is a must-read. He always explains concepts from the very beginning and usually in an interactive way. He makes his blog posts interactive playgrounds, letting you understand by doing. Reading his articles was the first time I realized there are educational materials like this, instead of dull books that just throw a bunch of new concepts and definitions at you.

Some of his excellent write-ups about web frontend:

- [_An Interactive Guide to Flexbox_](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
- [_Understanding useMemo and useCallback_](https://www.joshwcomeau.com/react/usememo-and-usecallback/)
- [_Understanding Layout Algorithms_](https://www.joshwcomeau.com/css/understanding-layout-algorithms/)
- [_The Quest for the Perfect Dark Mode_](https://www.joshwcomeau.com/react/dark-mode/)

### Alex Kladov (matklad)

In the early 2020s, I invested some time in learning [Rust](https://rust-lang.org/). The language itself is a game of abstract concepts, and it's hard to learn how to think in Rust and write idiomatic Rust code. [Alex Kladov](https://matklad.github.io/) (more known as matklad) shares his knowledge and thoughts on Rust patterns, in astonishing depth. By reading his articles, you can learn some of the most clever design ideas and techniques in Rust, and more generally, in the field of language and compiler design. He's also the original creator of the most widely adopted Rust language server, [rust-analyzer](https://rust-analyzer.github.io/).

Since 2023, he has worked at [TigerBeetle](https://tigerbeetle.com/), and since then he's been writing about [Zig](https://ziglang.org) as well. It so happens that Zig is also a current interest of mine, so I'm happy there's a writer I can trust and learn real things from in this relatively new field.

Some highlights:

- [_Zig's Lovely Syntax_](https://matklad.github.io/2025/08/09/zigs-lovely-syntax.html)
- [_Caches in Rust_](https://matklad.github.io/2022/06/11/caches-in-rust.html)
- [_Study of `std::io::Error`_](https://matklad.github.io/2020/10/15/study-of-std-io-error.html)
- [_Simple but Powerful Pratt Parsing_](https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html)

### Bob Nystrom

I know [Bob Nystrom](https://stuffwithstuff.com) from his masterpiece [_Crafting Interpreters_](https://craftinginterpreters.com/). It's the book that led me into the world of compiler design, and it's a must-read for anyone who is interested in the "black magic" behind programming languages — it shows you that there's actually no magic at all.

His long-form writing is just art. The famous [_What Color is Your Function?_](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/) sheds new light on how people think about asynchronous programming, and [_Crafting "Crafting Interpreters"_](https://journal.stuffwithstuff.com/2020/04/05/crafting-crafting-interpreters/) shows how much one can devote to writing a book. What's precious is that he can put difficult concepts in an extremely simple and clear way. Many posts are about programming language design and compilers, including _Crafting Interpreters_, the book. A hard topic. But I can read any of them as a newcomer to the field, and take away a bunch of insightful ideas and a fundamental understanding of the topic he covered.

Highly recommended ones:

- [_Does Go Have Subtyping?_](https://journal.stuffwithstuff.com/2023/10/19/does-go-have-subtyping/)
- [_Crafting "Crafting Interpreters"_](https://journal.stuffwithstuff.com/2020/04/05/crafting-crafting-interpreters/)
- [_The Hardest Program I've Ever Written_](https://journal.stuffwithstuff.com/2015/09/08/the-hardest-program-ive-ever-written/)
- [_What Color is Your Function?_](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/)
- [_Pratt Parsers: Expression Parsing Made Easy_](https://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/)

### Simon Willison

Lately, I've been turning some of my attention to AI, and inevitably I started reading [Simon Willison](https://simonwillison.net/), who innovated the famous _[pelicans on a bicycle](https://simonwillison.net/2024/Oct/25/pelicans-on-a-bicycle/)_ benchmark method for new LLMs. Although there was a seven-year gap in between, he has maintained his blog for an impressive 20+ years. The most ancient write-ups are still there, accessible to every new reader like me. In contrast, many links in his blog entries are broken — they've failed to persist on this rapidly changing internet.

One of his innovations is **blogmarks**. A blogmark looks like this:

> [The new ChatGPT Images is here](https://openai.com/index/new-chatgpt-images-is-here/). OpenAI shipped an update to their ChatGPT Images feature ...

A link, followed by notes and comments. More often, the link is discovered via a third-party, like [Hacker News](https://news.ycombinator.com/) or [X](https://x.com/). Simon adds a `(via)` to indicate the source, like:

> [ty: An extremely fast Python type checker and LSP](https://astral.sh/blog/ty) ([via](https://news.ycombinator.com/item?id=46294289)) The team at Astral have been working on this for quite a long time, and are finally releasing the first beta. They have some big performance claims ...

Unlike many technical writers, Simon maintains his blog like his own social media, with short posts like blogmarks and quotes dropping two or three times a day, along with long-form entries occasionally.

I found blogmarks a great idea, a better way to bookmark interesting things I find than just putting them in a folder. More importantly, it lets you write with less friction. Simon has written over 8,000 blogmarks in the past 20 years. What a huge amount! I believe you can get unimaginable insights from analyzing your own history if you maintain a blog like his.

Some of his excellent write-ups:

- [_My approach to running a link blog_](https://simonwillison.net/2024/Dec/22/link-blog/)
- [_The Perfect Commit_](https://simonwillison.net/2022/Oct/29/the-perfect-commit/)
- [_How I build a feature_](https://simonwillison.net/2022/Jan/12/how-i-build-a-feature/)

All of these writers have influenced me a lot and quietly motivated me to run my own blog. Following in their footsteps, I decided to build a corner of my own on the internet, and hope that one day I can help someone else on their journey.

## Why, what, and how I write

I've read multiple motivating articles persuading you to write. The significant takeaway for me is that **writing is a tool for thinking**. A famous quote by [Leslie Lamport](https://www.lamport.org/), which Paul Graham later quoted, is[^2]:

> If you're thinking without writing, you only _think_ you're thinking.

After several years of working as a professional software developer, I've become more and more convinced that writing is essential, and I've realized that I actually lack this essential skill. I want to be a better thinker and a better communicator, at work, in tech communities, and in my personal life. If I put this in a more ambitious way, I want to leave behind something I can confidently call _my work_, some day.

So here I am, starting this blog as my public thinking space. I've already written several short-form notes, beginning with [the first note](/notes/2025/12/18/berkeley-mono) about my observations of a monospaced typeface called Berkeley Mono. I'm looking forward to seeing hundreds of notes and posts dropped here in a year or two, forming a small library of my own — an archive of my thoughts and ideas.

The topics I'll cover may vary. Generally I'll start with technical learnings and observations, and gradually expand into personal growth and life reflections. The following themes are currently in my mind:

- Trends and developments in fields like AI, web development, and systems programming
- Programming languages, tools, and news in communities I'm interested in, including but not limited to JavaScript/TypeScript, Python, Rust, Zig, and C
- Reflections on technical topics, and occasionally non-technical ones
- Reading notes of classic books and influential articles
- Progress updates and dev logs of my projects

Currently, there are two types of content on this blog:

- **Notes:** Short-form entries, typically written and published within a day. They are the main focus of this blog, flowing through the timeline. As of now, [four categories](/notes/categories) of notes are here:
    - _Regular notes_ capture my scattered thoughts on relevant topics
    - _Link notes_ bookmark things I found on the internet and share my comments on them, inspired by Simon Willison's _blogmarks_
    - _TIL (Today I Learned) notes_ share things I learned today
    - _Post notes_ introduce any new post I've just published
- **Posts:** Long-form entries that take days to draft and polish, like the one you're reading now. They are deep dives into topics I care about.

You'll spend most of your time reading my notes in the timeline, and sometimes you'll click into a post for a deeper dive. As I mentioned, I adopted this form, strongly inspired by Simon Willison.

I must admit that I'm far from a mature writer. My approach is to imitate the writers I admire at first — observing and learning how they write, the language they use, and how they discuss the topics they care about — and then gradually develop my own perspective and style.

## How it's built

This website is now basically a static site generated by [Astro](https://astro.build). I use [Tailwind CSS](https://tailwindcss.com/) for styling, [Iconify](https://iconify.design/) for icons, [Bun](https://bun.com) for dev environment, and [Vercel](https://vercel.com) for deployment.

I edit [Markdown](https://www.markdownguide.org/) files in [VS Code](https://code.visualstudio.com/) directly for content authoring.

You can find the source code, along with the Markdown files for all write-ups, in this GitHub repository: [zlliang/zlliang](https://github.com/zlliang/zlliang)

### My take on AI assistance

This is a new era of AI. I'm neither a conceited programmer protesting against AI nor an AI-hype chaser, and am trying to find a pragmatic and restrained way to use AI tools to help me create a **better** website and deliver **better** write-ups.

I'm an experienced frontend web developer, skeptical about the whole "coding agents will replace human developers" narrative. Honestly though, I didn't invest my time catching up with this new trend until recently. In the second half of 2025, I took some time investigating the current state of AI tools, and found coding agents a promising paradigm for _assisting_ human developers in their workflow.

I'm now using [Amp](https://ampcode.com) as my coding agent in a very restrained way — for things like refactoring, addressing styling issues, and creating scripts for workflow automation. Most of the code is written by me, for now. I may let it create new features on my behalf more in the future, but I'm always the decision maker, and I'm the one who guides the direction of this website's evolution.

Here are example sessions between me and Amp, working on the source code of this website:

- [_Rename kind field to category throughout codebase_](https://ampcode.com/threads/T-019b4b68-b5b2-76d2-bb81-98f068657b63)
- [_Create a new automated drafting workflow_](https://ampcode.com/threads/T-019b3a33-f837-72cb-be2b-fd6f9000809c)
- [_Remark-rehype footnote numbering collision issue_](https://ampcode.com/threads/T-019b3729-3371-71e4-8b5f-2b39bbc0d892)

Now it comes to **writing**. Thanks to LLMs, writing in a foreign language has become more accessible than ever before. And I would not be this confident to run an English blog without the help of AI tools. But they should be used with caution.

I won't post [slops](https://simonwillison.net/2024/May/8/slop/). All the content and all the thinking here are mine[^3]. I'm using Amp only to help me review grammar, writing style, and unnatural English usage. Eventually, I hope it (and I myself) can help me build my own writing style. When reviewing my write-ups, I typically use the following prompt:

> Review this write-up in terms of:
>
> 1. Grammar and writing style
> 2. Awkward or unnatural expressions
> 3. The topic and overall content

Here are example threads between me and Amp, working on my write-ups:

- [_Review write-up grammar style and content_](https://ampcode.com/threads/T-019b4fcf-53d6-71fc-8a8b-594cecc5a789) (for [_Formatting rules for AI chatbots and agents_](notes/2025/12/24/formatting-rules-for-ai-chatbots-and-agents))
- [_Review write-up grammar style and content_](https://ampcode.com/threads/T-019b54a4-b126-753b-82f1-12faebcddfd2) (for this very post)

As a wrap-up, you can find the full instruction file for this website here: [AGENTS.md](https://github.com/zlliang/zlliang/blob/dbcc5647e2c39a9af2647ba42beb073b76533692/AGENTS.md).

## Looking forward to this journey

Time to write, write, and write. Can I accumulate thousands of notes in a decade? Can I leave behind some articles that others find valuable too? Let's see.

[^1]: [The Amp thread](https://ampcode.com/threads/T-019b49fd-619b-77ce-af60-0ce81ffb0d7f)
[^2]: Paul Graham's Essay: [Writes and Write-Nots](https://paulgraham.com/writes.html)
[^3]: I've written about this before: [AI Transparent Statement - Note #3](/notes/2025/12/20/ai-transparency-statement)
