<script setup lang="ts">
import { type FrontMatter, type Post } from '@/types/post'

withDefaults(defineProps<{ info: Post & FrontMatter; splitDate?: boolean }>(), {
  splitDate: true,
})
</script>

<template>
  <a class="post-item" :href="info.url">
    <div class="title-container" :class="[splitDate && 'split-date']">
      <div class="title">
        <span>{{ info.title }}</span>
        <span v-if="info.topicIndex" class="topic-tag">专题页</span>
      </div>
      <div class="date">
        <span v-if="info.created">创建于 {{ info.created }}</span>
        <span v-if="info.updated" class="updated">
          / 更新于 {{ info.updated }}
        </span>
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
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.25s;
}

@media (min-width: 768px) {
  .post-item {
    margin: 0 -16px;
    padding: 12px 16px;
    border-radius: 8px;
  }
}

.post-item:hover {
  background-color: var(--vp-c-bg-alt);
}

.title {
  display: block;
  color: var(--vp-c-brand);
  font-weight: 600;
  transition: color 0.25s;
}

.post-item:hover .title {
  color: var(--vp-c-brand-dark);
}

.date {
  margin-top: 4px;
  font-size: 12px;
  color: var(--vp-c-text-3);
}

@media (min-width: 768px) {
  .title-container.split-date {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
  }

  .title-container.split-date .date {
    margin-top: 1px;
    flex-shrink: 0;
    position: relative;
    font-size: 14px;
    color: var(--vp-c-text-3);
  }

  .title-container.split-date .date .updated::before {
    display: none;
  }
}

.summary {
  margin-top: 4px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.path {
  margin-top: 4px;
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.topic-tag {
  display: inline-block;
  color: var(--vp-badge-tip-text);
  font-size: 12px;
  margin-left: 4px;
  transform: scale(0.9) translateY(-8px);
}
</style>
