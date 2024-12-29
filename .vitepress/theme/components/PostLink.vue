<script setup lang="ts">
import { computed } from 'vue'

import { data as allPosts } from '@/data/all-posts.data'
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
        <span v-if="info.topicIndex" class="topic-tag">专题页</span>
      </div>
      <div v-if="!hideDate && info.created" class="date">
        {{ info.created }}
      </div>
    </div>
    <div v-if="info.summary" class="summary">{{ info.summary }}</div>
    <div v-if="info.path" class="path">{{ info.path }}</div>
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

.title-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0 16px;
}

.title-container .title {
  display: block;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  transition: color var(--transition-timing) var(--transition-duration);
  width: 36rem;
}

.title-container .date {
  flex-shrink: 0;
  font-size: 0.875rem;
  line-height: 2; /* Visually align with the title */
  color: var(--vp-c-text-3);
}

.summary {
  margin-top: 4px;
  font-size: 0.875em;
  color: var(--vp-c-text-2);
}

.path {
  margin-top: 4px;
  font-size: 0.875em;
  color: var(--vp-c-text-3);
}

.topic-tag {
  display: inline-block;
  color: var(--vp-badge-tip-text);
  font-size: 0.75em;
  margin-left: 4px;
  transform: scale(0.9) translateY(-8px);
}
</style>
