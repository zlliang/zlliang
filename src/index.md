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
</script>

<Home>

## 洋屁君是谁

🚧 施工中……

如果想要了解我更多，请前往：[🤔️ 洋屁君是谁啊？](/about/)

## 更新计划

🚧 施工中……

更加详尽的更新计划，请前往：[🤯 洋屁君在忙些什么？](/about/plan/)

<template #secondary>

## 😎 得意之作

<FeaturedList />

## 😬 有用的页面们

<PostItem
  :info="{
    title: '📃 历史档案',
    path: '/about/history',
    summary: '一览无余地罗列了本站所有的文章内容，按照创建时间排序，并且可以按照标题搜索'
  }"
/>

</template>

</Home>
