<script setup lang="ts">
import { computed, ref } from 'vue'

import PostItem from '@/components/PostItem.vue'
import { data as historyPosts } from '@/data/history-posts.data'
import { type Post } from '@/types/post'

const list = ref(historyPosts)
const keyword = ref('')

const searchResult = computed(() =>
  list.value.filter((item: Post) => item.frontmatter.title?.includes(keyword.value)),
)
</script>

<template>
  <div>
    <div class="search-input">
      <span class="prepend">🔍</span>
      <input v-model="keyword" placeholder="按标题搜索档案" class="input">
      <span class="total">共 {{ searchResult.length }} 则</span>
    </div>
    <PostItem
      v-for="item in searchResult"
      :key="item.frontmatter.title"
      :url="item.url"
    />
  </div>
</template>

<style scoped>
.search-input {
  display: flex;
  margin: 32px -24px;
  padding: 8px 24px;
  background-color: var(--vp-c-bg-alt);
  outline: 1px solid var(--vp-c-bg-alt);
  transition-property: outline, box-shadow;
  transition-timing-function: var(--transition-timing);
  transition-duration: var(--transition-duration);
}

@media (min-width: 768px) {
  .search-input {
    margin: 32px -16px;
    padding: 8px 16px;
    border-radius: var(--border-radius-large);
  }
}

.search-input:hover,
.search-input:has(input:focus) {
  outline-color: var(--vp-c-orange-2);
}

.search-input:has(input:focus) {
  outline-color: var(--vp-c-orange-2);
  box-shadow: 0 0 0 3px var(--vp-c-orange-soft);
}

.prepend {
  margin-right: 12px;
}

.input {
  flex-grow: 1;
  font-family: var(--vp-font-family-base);
  font-size: 16px;
}

.input::-webkit-input-placeholder {
  color: var(--vp-c-text-3);
}

.total {
  margin-left: 12px;
  color: var(--vp-c-text-3);
}
</style>
