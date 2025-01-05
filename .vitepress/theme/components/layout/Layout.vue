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
        <span v-if="frontmatter.updated">（持续更新中，最近更新时间：{{ format(new Date(frontmatter.updated), 'yyyy-MM-dd') }}）</span>
      </div>
      <div class="vp-doc">
        <h1 v-if="frontmatter.title" tabindex="-1">
          {{ frontmatter.emoji ? `${frontmatter.emoji}&nbsp;` : '' }}{{ frontmatter.title }}
        </h1>
        <blockquote v-if="frontmatter.summary">
          <p>{{ frontmatter.summary }}</p>
        </blockquote>
      </div>
    </template>
  </DefaultLayout>
</template>

<style scoped>
.date {
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
  margin-bottom: 1em;
}
</style>
