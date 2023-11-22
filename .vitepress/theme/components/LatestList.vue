<script setup lang="ts">
import { ref } from 'vue'

import PostItem from '@/components/PostItem.vue'
import { data as latestPosts } from '@/data/latest-posts.data'

const list = ref(latestPosts)
</script>

<template>
  <div class="latest-list">
    <PostItem
      v-for="item in list"
      :key="item.frontmatter.title"
      :url="item.url"
    />
  </div>
</template>

<style scoped></style>
