---
title: 展示本站的 Markdown 功能
created: 2026-01-10
tags: [示例]
draft: true
---

这是一篇 [Markdown](https://markdownguide.org/) 内容演示。

## 二级标题

这是一个二级标题。现在我需要写一段话。如果写得不够长，就不会换行，所以需要多写一点，再多一点，这样才会换行。换行能看出行高的差异。行高太紧或太松都会影响阅读体验。我目前用的是 [Tailwind CSS](https://tailwindcss.com/) 的 `leading-[1.8]` 工具类。

这是另一段。两段放在一起可以看出段落间距是否合适。这一段也得稍微长一点，最好能换行，这样才能更好地看到实际文章的效果。

### 三级标题

这一节我打算测试一些常用的元素。比如，这是一段 C 代码：

```c
#include <stdio.h>

int main() {
  printf("Hello, world!\n");
  return 0;
}
```

这是一个表格：

| 表头 1 | 表头 2 | 表头 3 |
| - | - | - |
| 内容 1-1 | 内容 1-2 | 内容 1-3 |
| 内容 2-1 | 内容 2-2 | 内容 2-3 |

这是一张随机图片：

![这里可以写图片说明（我写了一个自定义的 rehype 插件来实现这个功能）](https://picsum.photos/600/300)

这是一段引用：

> 现在我需要写一段话。如果写得不够长，就不会换行，所以需要多写一点，再多一点，这样才会换行。换行能看出行高的差异。行高太紧或太松都会影响阅读体验。
>
> 这其实是我上面写过的一段话。那要不要用~~删除线~~？

这是一条分隔线：

---

这是一个列表：

1. 这是第一项
2. 这是第二项
    - 下一级的第一项
    - 第二项
3. 这是第三项

这段话用来测试列表和段落之间的间距是否正常。

## 自定义容器

下面是一些只能在本站使用的自定义容器：

<div class="card">

这是一个卡片。

</div>

<div class="card amber">

这是一个警告卡片，会更加醒目！

</div>

下面是一个图片网格：

<div class="image-grid">

![随机图片 1](https://picsum.photos/400/300?random=1)

![随机图片 2](https://picsum.photos/400/300?random=2)

![随机图片 3](https://picsum.photos/400/300?random=3)

![随机图片 4](https://picsum.photos/400/300?random=4)

</div>

## 测试英文显示

<div lang="en">

Now let's test the English display. The main purpose of this website is to showcase Markdown formatted content, including mixed Chinese and English text. Through this demo post, I can observe how different fonts, line heights, and paragraph spacing perform in practice.

English typography differs significantly from Chinese. English characters are typically more spread out, and the line height requirements are different. Punctuation handling also requires special attention. For example: is the spacing after this colon appropriate? Do quotation marks "display" correctly?

Additionally, when mixing Chinese and English, spacing needs attention. For example: when we use 中文字符 in an English sentence, should we add spaces between English and Chinese? Different typographic standards have different requirements. Some believe spaces should be added to make the typography more elegant; others think it's unnecessary and prefer to maintain the original compact feel.

Through these test paragraphs, I can verify whether the website's font choices and CSS styling can properly support the display of English content. This is important for a tech blog aimed at readers who appreciate well-crafted typography.

</div>

## 结语

基本上，写文章需要的格式就这些了。别想那些花里胡哨的，动笔就是了！
