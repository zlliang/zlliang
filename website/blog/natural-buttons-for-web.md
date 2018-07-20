---
title: Natural links style for iOS
date: 2018-07-20
pic: /images/remove-grey.jpg
abstract: How to make <em>buttons</em> or <em>links</em> on mobile Safari more natural, seemless and fluent? I investigate what CSS can do on this problem, and just one property can solve it!
---

Grey highlight occurs when you tap a link or button on mobile Safari like following. Originally, Safari is intended to remind you that "_it is a link!_", but sometimes it's annoying, especially when transition and animation is important in your web design. So, how to remove this?

<div align="center">
<img src="/images/remove-grey.jpg" width="320" alt="remove-grey.jpg" style="border: 1px solid #ddd; margin-bottom: 0.7em;">
</div>

Fortunately, it's simple. I investigated what CSS can do on this problem, and find a useful properties for WebKit browsers, which mobile Safari uses: `-webkit-tap-highlight-color`. It represents the color and tranparency of the highlight occurs when you tap an object. When you set transparency to 0, the annoying grey highlight would be removed:
```css
html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
```

That's it, solved! But additionaly, the following JavaScript fragment allows :active styles to work in your CSS on a page in mobile Safari:
```js
document.addEventListener("touchstart", function(){}, true);
```
Then enjoying your seemless experience in your website on iOS!
