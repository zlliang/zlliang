---
title: Demonstrate Markdown Capabilities of This Website
created: 2025-12-17
tags: [demo]
draft: true
---

This is a [Markdown](https://markdownguide.org/) content demo.

## Second level heading

Here's a second level heading. Now I need to write a paragraph. If I don't write enough, it won't wrap, so I need to write a bit more, and a bit more, so that it will wrap. Line wrapping shows the difference in line height. If the line height is too tight or too loose, it will affect readability. I'm currently using the `leading-[1.7]` utility class from [Tailwind CSS](https://tailwindcss.com/).

This is another paragraph. Putting two paragraphs together shows whether the paragraph spacing is appropriate. This paragraph also needs to be a bit longer, ideally wrapping, to better see how real articles look.

### Third level heading

In this section I plan to test some common tools. For example, here's a C code snippet:

```c
#include <stdio.h>

int main() {
  printf("Hello, world!\n");
  return 0;
}
```

Here's a table:

|Header 1|Header 2|Header 3|
|-|-|-|
|Content 1-1|Content 1-2|Content 1-3|
|Content 2-1|Content 2-2|Content 2-3|

Here's a random image:

![Random image](https://picsum.photos/600/300 "Optional image caption here (I wrote a custom rehype plugin for this)")

Here's a blockquote:

> Now I need to write a paragraph. If I don't write enough, it won't wrap, so I need to write a bit more, and a bit more, so that it will wrap. Line wrapping shows the difference in line height. If the line height is too tight or too loose, it will affect readability.
>
> This is actually a paragraph I wrote above. So should I use ~~strikethrough~~?

Here's a horizontal rule:

---

Here's a list:

1. This is the first item
2. This is the second item
    - First item of next level
    - Second item
3. This is the third item

This paragraph is to test whether the spacing between lists and paragraphs is normal.

## Custom containers

Below are some custom containers that can only be used on this site:

<div class="card">

This is a card.

</div>

<div class="card amber">

This is a warning card, it will attract more attention!

</div>

The following is an image grid:

<div class="image-grid">

![Random image 1](https://picsum.photos/400/300?random=1 "Random image 1")

![Random image 2](https://picsum.photos/400/300?random=2 "Random image 2")

![Random image 3](https://picsum.photos/400/300?random=3 "Random image 3")

![Random image 4](https://picsum.photos/400/300?random=4 "Random image 4")

</div>

## Testing Chinese display

<div class="zh">

现在让我们来测试一下中文显示效果。这个网站的主要目的是展示 Markdown 格式化内容，包括中英文混排的情况。通过这篇演示文章，我可以观察不同字体、行距和段落间距在实际使用中的效果。

中文排版与英文排版有很大的不同。中文字符通常更加密集，需要更大的行距来保证可读性。所以我使用 `.zh` class 来包裹所有中文内容，并设置 `leading-[1.8]` 的行距。同时，中文标点符号的处理也需要特别注意。比如：这个冒号后面是否有合适的间距？引号“是否”显示正常？

另外，中英文混排时也需要注意间距问题。例如：当我们在中文句子中使用 English words 的时候，是否需要在中英文之间添加空格？不同的排版规范有不同的要求。有些人认为应该添加空格，使得 typography 更加美观；而有些人则认为不需要，保持原本的紧凑感即可。

通过这些测试段落,我可以验证网站的字体选择、CSS 样式配置是否能够很好地支持中文内容的展示。这对于一个面向中文读者的技术博客来说是非常重要的。

</div>

## Conclusion

Basically, these are all the formats you need to write articles. Don't think about those fancy things, just start writing!
