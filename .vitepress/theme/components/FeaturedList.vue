<script setup lang="ts">
import { ref } from "vue"

import PostItem from "@/components/PostItem.vue"

import featuredPosts from "@/data/featuredPosts.json"

const list = ref(featuredPosts)
</script>

<template>
  <div>
    <PostItem
      v-for="item in list"
      :key="item.title"
      :info="item"
      :split-date="false"
    />
  </div>
</template>

<style scoped></style>
