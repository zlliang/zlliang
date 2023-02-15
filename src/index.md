---
title: 洋屁君
titleTemplate: 洋屁君
created: 2023-02-10
hidden: true
layout: page
---

<script setup>
import Home from "@/components/layout/Home.vue"
import FeaturedList from "@/components/FeaturedList.vue"
import LatestList from "@/components/LatestList.vue"
</script>

<Home>

## 新鲜热乎之作

<LatestList />

如想阅览更多，请前往：

<PostItem
  :info="{
    title: '📃 历史档案',
    path: '/about/history',
    summary: '一览无余地罗列了本站所有的文章内容，按照创建时间排序，并且可以按照标题搜索'
  }"
/>

## 洋屁君是谁

我是本站的作者，代号**洋屁君**，以此形象在这里欢迎你的到来。

### 话说回来，“放洋屁”究竟是什么意思？

**放洋屁**是一种讲话方式。故意中英夹杂（显得自己很洋气）、在朋友圈里发一句谁也看不懂的德文法文或意大利文、在工作中使用没什么必要的英文术语（甚至中文术语），以塑造所谓的话语壁垒，这都算是**洋屁**。不过中英夹杂也不能一棒子打死，举例来说：

<div class="foreign-fart-examples">

::: danger 这是洋屁 😡

- “什么是洋屁”这个 problem，我们要有一点 common sense，按照流程去 solve 掉它。
- 今早这杯 decaf latte 不太行，喝的我很困，sigh。
- Sapere è potere。
- 这个赛道我们跟了很久，接下来就要 all in。

:::

::: tip 这不是洋屁 😛

- 这个问题更适合用 RNN（recurrent neural network，循环神经网络）解决，而不是 CNN（convolutional neural network，卷积神经网络）。
- 我们的目标 ROI（return on investment，投资回报率）是多少？

:::

</div>

每个人所处的环境、位置不同，偏好的说话方式也不同。我在生活中会时时告诫自己，不要从我的嘴里放出洋屁。不过告诫也仅限于自己，不能将矛头指向拨冗光临本站的朋友们。在这里，没有什么规矩，有什么洋屁，尽管放出来～

如果想要了解我更多，请前往：[🤔️ 洋屁君是谁啊？](/about/)

## 更新计划

🚧 施工中……

更加详尽的更新计划，请前往：[🤯 洋屁君在忙些什么？](/about/plan/)

<template #secondary>

## 😎 得意之作

🚧 施工中……

<!-- ## 😬 有用的页面们 -->

</template>

</Home>

<style scoped>
@media (min-width: 768px) {
  .foreign-fart-examples {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
}
</style>
