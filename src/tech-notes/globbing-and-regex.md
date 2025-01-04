---
emoji: 🗒️
title: 通配符（Globbing）和正则表达式（Regular Expression）的异同
created: 2023-12-27
summary: 之前一直没有仔细区分 shell 中使用的通配符和更高级的正则表达式之间的区别，以为前者是后者的子集。调查后发现，二者还是挺不一样的。
---

通配符（globbing）和正则表达式（regular expression）是两个经常被混淆的概念，我之前也以为通配符只是正则的“简单版”而已，调查了一下发现还真不是这样。以为这里总结几个最为常见的异同：

1. `*` 在通配符中表示任意数量的任意字符（开头的点除外），在正则中表示前一个元素的零次或多次出现
2. `?` 在通配符中表示任意一个字符，在正则中表示前一个元素的零次或一次出现
3. `[...]` 在二者中都表示匹配方括号中间的任意一个字符，并且都支持使用“a-z”这种取范围的方式；但是取反的方式不同：类 UNIX 通配符使用 `[!...]`，而正则是 `[^...]`
4. 一般，shell 脚本还支持用两个星号 `**` 表示匹配任意层级的目录
5. 其他的高级匹配方式，只能在正则表达式内使用

::: info 参考

- [维基百科：Glob (programming)](https://en.wikipedia.org/wiki/Glob_(programming))
- [维基百科：Regular expression](https://en.wikipedia.org/wiki/Regular_expression)

:::
