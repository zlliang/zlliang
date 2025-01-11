<script setup lang="ts">
import PostLink from '@/components/PostLink.vue'
import LinkButton from '@/components/LinkButton.vue'
import { data as recentPosts } from '@/data/recent-posts.data'
</script>

<template>
  <div>
    <PostLink
      v-for="item in recentPosts"
      :key="item.url"
      :post="item"
    />
    <hr />
    <div>
      <LinkButton href="/archive/">➡️ 查看更多……</LinkButton>
    </div>
  </div>
</template>
