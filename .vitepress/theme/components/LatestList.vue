<script setup lang="ts">
import { ref } from 'vue'

import PostLink from '@/components/PostLink.vue'
import { data as latestPosts } from '@/data/latest-posts.data'

const list = ref(latestPosts)
</script>

<template>
  <div class="latest-list">
    <PostLink
      v-for="item in list"
      :key="item.frontmatter.title"
      :url="item.url"
    />
  </div>
</template>

<style scoped>
</style>
