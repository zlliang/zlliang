<script setup lang="ts">
import { ref } from 'vue'

import PostLink from '@/components/PostLink.vue'
import { data as groupedPosts } from '@/data/posts-grouped-by-year.data'

const list = ref(groupedPosts)
</script>

<template>
  <div v-for="group in list" :key="group.year">
    <h2>🗓️ {{ group.year }}</h2>
    <div class="post-list">
      <PostLink
        v-for="item in group.posts"
        :key="item.frontmatter.title"
        :url="item.url"
      />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .post-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 32px;
  }
}
</style>
