<script setup lang="ts">
import { ref } from 'vue'

import PostLink from '@/components/PostLink.vue'
import { data as featuredPosts } from '@/data/featured-posts.data'

const list = ref(featuredPosts)
</script>

<template>
  <div>
    <PostLink
      v-for="item in list"
      :key="item.frontmatter.title"
      :url="item.url"
      :split-date="false"
    />
  </div>
</template>

<style scoped></style>
