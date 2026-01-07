---
title: Demonstrate Multilingual Support of This Website
lang: en
original: demo/demonstrate-multilingual-support-of-this-website
---

<div class="card translation-notice">

Translated from the [original Chinese post](/posts/demo/demonstrate-multilingual-support-of-this-website) with AI assistance and manual editing.

</div>

This post demonstrates the multilingual support on this website.

## Why multilingual

My native language is Chinese, but I want to build an English blog. However, some ideas are better expressed in Chinese—after all, thought and language shape each other, and certain concepts are more precise in one's mother tongue. I want this website to flexibly support publishing content in both languages, with translations between them.

## Technical approach

The multilingual feature is built on [Astro](https://astro.build/)'s [content collections](https://docs.astro.build/en/guides/content-collections/). It consists of two collections:

- `posts`: Original articles, defaulting to English, with a `lang` field to specify other languages
- `translatedPosts`: Translations, stored under `content/posts/translations/`

### Article structure

An original article's frontmatter looks like this:

```yaml
title: 演示本站的多语言功能
created: 2000-01-01
lang: zh
```

The `lang` field specifies the article's language. Translations are automatically linked via their `original` field.

A translation's frontmatter needs an `original` field pointing to the source article:

```yaml
title: Demonstrate Multilingual Capabilities of This Website
lang: en
original: demo/demonstrate-multilingual-support-of-this-website
```

### Routing design

- Original articles: `/posts/{slug}`
- Translations: `/posts/{lang}/{slug}`

For example, the Chinese original of this post is at `/posts/demo/demonstrate-multilingual-support-of-this-website`, while its English translation is at `/posts/en/demo/demonstrate-multilingual-support-of-this-website`.

### UI display

For non-English original articles, the page will:

1. Show a language label before the title, such as `中文`
2. Display available translation links before the content

For translation pages, I added a card component with a `translation-notice` class to inform readers that this is translated content and provide a link to the original.

## Typography adaptation

Different languages require different typographic treatment. For example, Chinese text needs larger line spacing for readability. I use the `.zh` class to mark Chinese content blocks and set `leading-[1.8]` line height (English uses `leading-[1.7]`).

When an article's `lang` is `zh`, the entire `PostContent` component automatically receives the corresponding language class, ensuring proper typography styles are applied.

## Conclusion

This approach allows me to:

- Write original articles in any language
- Add any number of translations to an article
- Keep translations linked to originals (sharing publication date, draft status, etc.)
- Automatically adapt typography for different languages

Going forward, I might consider adding support for more languages—but for now, Chinese and English are enough.
