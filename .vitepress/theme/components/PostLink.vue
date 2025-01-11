<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue'
import { type Post } from '@/types/post'

const { post } = defineProps<{ post: Post }>()
</script>

<template>
  <LinkButton :href="post.url">
    <div class="title-container">
      <div v-if="post.frontmatter.created" class="meta">
        <span>{{ post.frontmatter.created }}</span>
        <span v-if="post.frontmatter.path">｜{{ post.frontmatter.path }}</span>
      </div>
      <div class="title">
        <span>{{ post.frontmatter.emoji ? `${post.frontmatter.emoji}&nbsp;` : '' }}{{ post.frontmatter.title }}</span>
      </div>
    </div>
  </LinkButton>
</template>

<style scoped>
.title-container .title {
  font-weight: 600;
}

.title-container .meta {
  margin-top: -4px;
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--vp-c-text-3);
}
</style>
