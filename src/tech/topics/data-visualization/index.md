---
title: 📊 数据可视化
created: 2023-07-05
---

<TitleWithEmoji emoji="📊" special>数据可视化</TitleWithEmoji>

简单的正态分布可视化：

::: plot

```ts
Plot.plot({
  color: { scheme: 'Blues' },
  marks: [
    Plot.rectY({ length: 10000 }, Plot.binX({ y: 'count', fill: 'count' }, { x: d3.randomNormal() })),
    Plot.ruleY([0])
  ]
})
```

:::
