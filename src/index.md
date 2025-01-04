---
title: 子龙的笔记本
titleTemplate: :title
hidden: true
layout: home
---

<script setup>
import PostList from '@/components/PostList.vue'
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

<PostList />

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}
</style>
