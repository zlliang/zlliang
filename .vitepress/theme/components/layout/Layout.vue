<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { format } from 'date-fns'

const { Layout: DefaultLayout } = DefaultTheme
DefaultLayout.name = 'DefaultLayout'

const { frontmatter } = useData()
</script>

<template>
  <DefaultLayout>
    <template #doc-before>
      <div v-if="!frontmatter.hideDate && frontmatter.created" class="date">
        <span>{{ format(new Date(frontmatter.created), 'yyyy-MM-dd') }}</span>
      </div>
      <div class="vp-doc">
        <h1 v-if="frontmatter.title" tabindex="-1" class="post-title">
          {{ frontmatter.emoji ? `${frontmatter.emoji}&nbsp;` : '' }}{{ frontmatter.title }}
        </h1>
      </div>
    </template>
  </DefaultLayout>
</template>

<style scoped>
.date {
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 1em;
}

.post-title {
  margin-bottom: 48px;
}
</style>
