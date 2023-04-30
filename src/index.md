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
import Profile from "@/components/about/Profile.vue"
import Social from "@/components/about/Social.vue"
</script>

<Home>

## 🍙 最近更新

<LatestList />

如果想阅读我的更多文章，请前往：

<PostItem
  :info="{
    title: '📃 历史档案',
    path: '/about/history',
    summary: '一览无余地罗列了本站所有的文章内容，并且可以按照标题搜索哦～'
  }"
/>

## 🤔️ 洋屁君是谁

<Profile />

我是**洋屁君**，在此欢迎你的到来。

如果想要了解我更多，请前往：[🤔️ 洋屁君是谁啊？](/about/)

<template #secondary>

## 😎 得意之作

空空如也……

<p class="small-text secondary-text">也就是说，尚没有任何一篇文章，可以让我拍着胸脯、自信地推荐给大家（唉）。要好好努力才行呀！</p>

</template>

<template #bottom>

## 🗓️ 更新计划

- 完善自我介绍，包括网站首页的简单介绍和[单独的介绍页](/about/)这两部分（2023-05-02）

更加详尽的更新计划，请前往：[🤯 洋屁君在忙些什么？](/about/plan/)

## 📡 在社交平台找到我

<Social />

</template>

</Home>
