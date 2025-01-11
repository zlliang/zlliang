---
title: 子龙的笔记本
titleTemplate: :title
hidden: true
layout: home
---

<script setup>
import RecentPosts from '@/components/RecentPosts.vue'
</script>

<div class="hero">

<img
  src="./assets/images/welcome.gif"
  alt="欢迎你！"
  width="180px"
  height="180px"
/>

**欢迎你！🎉**

</div>

<div class="columns">

<div class="left">

## 🚧 施工中……

</div>

<div class="right">

## 🆕 近期笔记

<RecentPosts />

</div>

</div>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}

@media (min-width: 768px) {
  .columns {
    display: flex;
    gap: 0 32px;
  }

  .left {
    flex: 1;
    min-width: 320px;
  }

  .right {
    flex: 2;
  }
}
</style>
