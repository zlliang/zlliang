<script setup lang="ts">
import { computed } from 'vue'

import { data as allPosts } from '@/data/posts.data'
import { type FrontMatter, type Post } from '@/types/post'

const {
  url,
  hideDate = false,
} = defineProps<{
  url: string
  hideDate?: boolean
}>()

const info = computed<FrontMatter & Post | null>(() => {
  const post = allPosts.find(item => item.url === url)
  return post ? { ...post, ...post.frontmatter } : null
})
</script>

<template>
  <a v-if="info" class="post-item" :href="info.url">
    <div class="title-container">
      <div class="title">
        <span>{{ info.emoji ? `${info.emoji}&nbsp;` : '' }}{{ info.title }}</span>
      </div>
      <div v-if="!hideDate && info.created" class="meta">
        <span>{{ info.created }}</span>
      </div>
      <div v-if="info.path" class="meta">
        {{ info.path }}
      </div>
    </div>
    <div v-if="info.summary" class="summary">{{ info.summary }}</div>
  </a>
</template>

<style scoped>
.post-item {
  display: block;
  margin: 0 -24px;
  padding: 12px 24px;
  line-height: 1.7;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: background-color var(--transition-timing) var(--transition-duration);
}

@media (min-width: 640px) {
  .post-item {
    margin: 0 -16px;
    padding: 12px 16px;
    border-radius: var(--border-radius-large);
  }
}

.post-item:hover {
  background-color: var(--vp-c-bg-alt);
}

.title-container .title {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.title-container .meta {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.summary {
  margin-top: 4px;
  font-size: 0.875em;
  color: var(--vp-c-text-2);
}
</style>
