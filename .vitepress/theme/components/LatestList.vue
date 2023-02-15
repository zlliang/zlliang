<script setup lang="ts">
import { ref } from "vue"

import PostItem from "@/components/PostItem.vue"

import latestPosts from "@/data/latestPosts.json"

const list = ref(latestPosts)
</script>

<template>
  <div class="latest-list">
    <PostItem v-for="item in list" :key="item.title" :info="item" />
  </div>
</template>

<style scoped></style>
