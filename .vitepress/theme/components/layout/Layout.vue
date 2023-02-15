<script setup lang="ts">
import { defineAsyncComponent } from "vue"
import { useData } from "vitepress"
import DefaultTheme from "vitepress/theme"
import { format } from "date-fns"

const { Layout: DefaultLayout } = DefaultTheme
DefaultLayout.name = "DefaultLayout"

const Comment = defineAsyncComponent(
  () => import("@/components/comment/Comment.vue")
)

const { frontmatter } = useData()
</script>

<template>
  <DefaultLayout>
    <template #doc-before>
      <div class="date" v-if="!frontmatter.hideDate && frontmatter.created">
        <span>
          创建于 {{ format(new Date(frontmatter.created), "yyyy-MM-dd") }}
        </span>
        <span v-if="frontmatter.updated">
          / 更新于 {{ format(new Date(frontmatter.updated), "yyyy-MM-dd") }}
        </span>
      </div>
    </template>
    <template v-if="!frontmatter.hideComment" #doc-after>
      <Comment />
    </template>
  </DefaultLayout>
</template>

<style scoped>
.date {
  color: var(--vp-c-text-3);
  font-size: 14px;
  margin-bottom: 1em;
}
</style>
