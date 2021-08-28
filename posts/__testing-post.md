---
title: 测试文章｜Testing Post
created: 2021-08-27
updated: 2021-08-28
abstract: 是一篇用来测试网站排版的文章。没什么具体的内容，只有可爱的段落格式、标题、代码块以及美丽的图片们。我只在本地调试的时候光顾这一篇，所以希望别人不会看到。就连这个摘要，也是由几句罗圈话构成的。
# hidden: true
---

现在是 8 月 27 日，我使用 [Next.js](https://nextjs.org) 和 [TypeScript](https://www.typescriptlang.org/) 再次重构这个网站。可能是由于我想练习技术写作的愿望仍然没有熄灭吧！就用这篇 `hidden === true` 的文章就用来测试网页样式和排版吧～ 😁

一篇文章可能包括标题、时间、摘要和正文。前三个要素的样式，我想上面都已经展示清楚了，接下来或许是一些正文。正文使用 [remark](https://remark.js.org) 作为 Markdown 处理器，希望没啥问题。你看，_斜体_ 和 **粗体** 都显示得不错。不过按理来说，中文文章应该少用斜体。这不是我说的，而是看了[一些讨论](https://www.zhihu.com/question/20120243)之后得到的结论：

> 既然普遍效果很差，那么，如果你没有足够好的理由，如果你没有不寻常的能力，就不要用。  
> —— 梁海

上面我不动声色的使用了一个引用块（blockquote），真有我的。接下来可能要看的是列表，该用什么主题呢？……好，就列一下 remark 使用的插件好了：

1. [remark-gfm](https://github.com/remarkjs/remark-gfm) - 支持 [Github Flavored Markdown](https://github.github.com/gfm/) 语法；
2. [remark-rehype](https://github.com/remarkjs/remark-rehype) - 从 remark 转换到 [rehype](https://github.com/rehypejs/rehype)；
3. [remark-highlight](https://github.com/rehypejs/rehype-highlight) - 支持代码高亮；
4. [rehype-stringify](https://github.com/rehypejs/rehype/tree/main/packages/rehype-stringify) - 最终生成 HTML 代码。

这个时候是不是应该用分一个段落了，不然整篇文章没有任何的结构和标题，还挺乱的（虽然本意就不是一个清晰完整的文章）。

## 象征性地分个段吧，这是标题

其实最常用的就只剩下两个内容样式了：图片和代码。下面这张图片是通过 [Unsplash](https://unsplash.com/) 得到的，来自于它开放的一个接口 [`https://source.unsplash.com/random`](https://source.unsplash.com/random)

![Random image from Unsplash](https://source.unsplash.com/random)

如果点击这张图片，应该可以发现它可以和 [Medium](https://medium.com/) 上的图片一样可以全屏展开。很顺滑，我很喜欢 💗 这其实是用到了一个开源工具 [medium-zoom](https://github.com/francoischalifour/medium-zoom)。在 React 中使用其实很容易，比如我就在文章组件中加入下面这段代码就好：

```tsx
import { useEffect } from "react"
import mediumZoom from "medium-zoom"

function Component() {
  useEffect(() => {
    mediumZoom("img") // 🥰
  }, [])

  return <div>...</div>
}
```

其他大概没什么啦，如果以后我在写文章的时候有什么新的样式需求，我会补充在下面。希望我能在学习的过程之中，也努力写一点东西吧！这样大概会让我更精细地掌握一样东西的。
