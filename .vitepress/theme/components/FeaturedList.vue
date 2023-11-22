<script setup lang="ts">
import { ref } from 'vue'

import PostItem from '@/components/PostItem.vue'
import { data as featuredPosts } from '@/data/featured-posts.data'

const list = ref(featuredPosts)
</script>

<template>
  <div>
    <PostItem
      v-for="item in list"
      :key="item.frontmatter.title"
      :url="item.url"
      :split-date="false"
    />
  </div>
</template>

<style scoped></style>
