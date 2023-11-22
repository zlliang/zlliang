<script setup lang="ts">
import MyFigure from '@/components/about/MyFigure.vue'
</script>

<template>
  <div class="profile">
    <MyFigure />
    <div class="small-text">
      <div><strong>姓名：</strong>梁子龙</div>
      <div><strong>年龄：</strong>男 / 27 岁</div>
      <div><strong>学业：</strong>计算数学硕士</div>
      <div><strong>职业：</strong>Web 程序员</div>
      <div><strong>爱好：</strong>多种多样<span class="secondary-text">（真花心）</span></div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 24px 0;
}
</style>
