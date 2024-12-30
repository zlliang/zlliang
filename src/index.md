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

## 🍙 最新文章

<LatestList />

</div>

<div class="right">

## 🚧 施工中……

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
  display: block;
}

@media (min-width: 768px) {
  .columns {
    display: flex;
    gap: 0 36px;
  }

  .left {
    width: 320px;
    flex-grow: 1;
  }

  .right {
    width: 320px;
  }
}
</style>
