---
title: 子龙的笔记本
titleTemplate: :title
hidden: true
layout: home
---

<script setup>
import LatestList from '@/components/LatestList.vue'
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

## 🍙 近期笔记

<LatestList />

</div>

<div class="right">

## 🐧 叽叽喳喳

::: info 2024-12-31

又是要给新的一年快乐插旗的日子啦！

<img
  src="./assets/images/cat-meme-b.jpg"
  alt="猫 meme"
  width="120px"
  height="120px"
/>

:::

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

.columns {
  display: flex;
  flex-wrap: wrap;
  gap: 0 36px;
}

.left {
  flex: 2;
  max-width: 100%;
}

.right {
  flex: 1;
  min-width: 320px;
}
</style>
