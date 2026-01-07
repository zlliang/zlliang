---
title: 演示本站的多语言支持
created: 2000-01-01
lang: zh
draft: true
---

这篇文章用于演示本站的多语言支持。

## 为什么需要多语言

我的母语是中文，但我希望建设一个英文博客。然而，总有一些想法更适合用中文来表达——毕竟思维与语言相互塑造，有些概念用母语来阐述会更加精确。我希望这个网站能够灵活地支持中英文内容的发布与互相翻译。

## 技术方案

本站的多语言功能基于 [Astro](https://astro.build/) 的[内容集合（content collections）](https://docs.astro.build/zh-cn/guides/content-collections/)实现。主要包含两个集合：

- `posts`：原始文章，默认语言为英文，可通过 `lang` 字段指定其他语言
- `translatedPosts`：译文，存放于 `content/posts/translations/` 目录下

### 文章结构

一篇原始文章的 frontmatter 如下：

```yaml
title: 演示本站的多语言支持
created: 2000-01-01
lang: zh # 可选，默认为 en
```

其中 `lang` 指定了文章的语言。译文会通过 `original` 字段自动关联到原始文章。

译文的 frontmatter 则需要指定 `original` 字段，指向原始文章：

```yaml
title: Demonstrate Multilingual Support of This Website
lang: en
original: demo/demonstrate-multilingual-support-of-this-website
```

### 路由设计

- 原始文章：`/posts/[...slug]`
- 译文：`/posts/[lang]/[...slug]`

例如，这篇中文原文的 URL 是 `/posts/demo/demonstrate-multilingual-support-of-this-website`，而它的英文译文 URL 是 `/posts/en/demo/demonstrate-multilingual-support-of-this-website`。

### 界面展示

对于非英文的原始文章，页面上会：

1. 在标题前显示语言标签，如 `中文`
2. 在正文前展示可用的译文链接

对于译文页面，我添加了一个带有 `translation-notice` class 的卡片组件，用于提示读者这是一篇翻译内容，并提供原文链接。

## 排版适配

不同语言需要不同的排版处理。比如，中文排版需要更大的行距来保证可读性。我使用 `.zh` class 来标记中文内容块，并设置 `leading-[1.8]` 的行距（英文使用 `leading-[1.7]`）。

当一篇文章的 `lang` 为 `zh` 时，整个 `PostContent` 组件会自动添加对应的语言 class，确保排版样式正确应用。

## 总结

这套方案让我可以：

- 用任意语言撰写原始文章
- 为文章添加任意数量的译文
- 保持译文与原文的关联（发布日期、草稿状态等共享）
- 自动适配不同语言的排版需求

接下来，也许我会考虑添加更多语言的支持；但现在，中英双语已经足够了。
