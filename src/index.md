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

你好，我是**洋屁君**，在此欢迎你的到来。

我 2015 年来到上海读大学，自那之后到现在，一直在上海居住。目前，我在一家互联网公司做 Web 前端开发工作，作为职场人仍在努力精进当中；业余时间，也参加着一支合唱团，各种活动令人兴奋。总之，生活还算充实快乐。

不过，如今大家的学习、工作都很辛苦，是否还有精力寻找充实快乐的生活方式呢？不知道你是不是也经常会想，每天下了班就想瘫着啊，那些曾经觉得有意思的事情，也都会被一点一点消磨殆尽吧？

我也有同样的感受哦。我自诩有超多的爱好，简直一个也不想放弃。于是，我设立了这个网站，通过书写、记录，训练自己，让脑子保持活泛，也让我的种种爱好继续生根发芽。要说有更多的目标，那么就是希望有一天，自己的输出成果能够让你也有所启发吧。

如果想要了解我更多，请前往：

<PostItem
  :info="{
    title: '🤔️ 洋屁君是谁啊？',
    path: '/about/',
    summary: '那么让我稍微详细地介绍一下自己，以及设立这个网站的初衷吧～'
  }"
/>

<template #secondary>

## 😎 得意之作

空空如也……

<p class="small-text secondary-text">也就是说，尚没有任何一篇文章，可以让我拍着胸脯、自信地推荐给大家（唉）。要好好努力才行呀！</p>

</template>

<template #bottom>

## 🗓️ 更新计划
- ~~完善自我介绍，包括网站首页的简单介绍和[单独的介绍页](/about/)这两部分（2023-05-02）~~（已完成）

更加详尽的更新计划，请前往：

<PostItem
  :info="{
    title: '🤯 洋屁君在忙些什么？',
    path: '/about/plan/',
    summary: '最近的新想法，以及挖的新坑！'
  }"
/>

## 📡 在社交平台找到我

<Social />

</template>

</Home>
