<script setup lang="ts">
import { ref } from "vue"

import PostItem from "@/components/PostItem.vue"

import { data as featuredPosts } from "@/data/allPosts.data"

const list = ref(featuredPosts)
</script>

<template>
  <div>
    <PostItem
      v-for="item in list"
      :key="item.frontmatter.title"
      :info="{ ...item, ...item.frontmatter }"
      :split-date="false"
    />
  </div>
</template>

<style scoped></style>
