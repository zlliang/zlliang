<script setup lang="ts">
import { computed, ref } from 'vue'
import { groupBy } from 'lodash-es'
import { getYear } from 'date-fns'

import PostLink from '@/components/PostLink.vue'
import { data as posts } from '@/data/posts.data'
import { sortPost } from '@/data/utils'
import { type Post } from '@/types/post'

const list = ref(posts)

const keyword = ref('')
const filtered = computed(() =>
  list.value.filter((item: Post) => item.frontmatter.title?.includes(keyword.value)),
)

const grouped = computed(() => {
  const kv = groupBy(filtered.value, post => getYear(new Date(post.frontmatter.created)))
  return Object.entries(kv)
  .map(([year, posts]) => ({ year, posts: posts.sort(sortPost) }))
  .sort((a, b) => Number(b.year) - Number(a.year))
})
</script>

<template>
  <div>
    <div class="search-input">
      <span class="prepend">🔍</span>
      <input v-model="keyword" placeholder="按标题搜索" class="input">
      <span class="total">共 {{ filtered.length }} 则</span>
    </div>
    <div v-for="group in grouped" :key="group.year">
    <h2>🗓️ {{ group.year }}</h2>
    <div class="post-list">
      <PostLink
        v-for="item in group.posts"
        :key="item.url"
        :post="item"
      />
    </div>
  </div>
  </div>
</template>

<style scoped>
.search-input {
  display: flex;
  margin: 32px -24px;
  padding: 8px 24px;
  background-color: var(--vp-c-bg-alt);
  outline: 1px solid var(--vp-c-bg-alt);
  transition:
    outline var(--transition-timing) var(--transition-duration),
    box-shadow var(--transition-timing) var(--transition-duration);
}

@media (min-width: 640px) {
  .search-input {
    margin: 32px -16px;
    padding: 8px 16px;
    border-radius: var(--border-radius-large);
  }
}

.search-input:hover,
.search-input:has(input:focus) {
  outline-color: var(--vp-c-brand-2);
}

.search-input:has(input:focus) {
  outline-color: var(--vp-c-brand-2);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.prepend {
  margin-right: 12px;
}

.input {
  flex-grow: 1;
  font-family: var(--vp-font-family-base);
  font-size: 1em;
}

.input::-webkit-input-placeholder {
  color: var(--vp-c-text-3);
}

.total {
  margin-left: 12px;
  color: var(--vp-c-text-3);
}
</style>
