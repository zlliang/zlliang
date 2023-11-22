<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { format } from 'date-fns'

import { useWindowScroll } from '@vueuse/core'
import { watch, nextTick } from 'vue'

const { Layout: DefaultLayout } = DefaultTheme
DefaultLayout.name = 'DefaultLayout'

const { frontmatter } = useData()

// Fix nav bar
// See https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPNavBar.vue#L32C14-L32C14
const { y } = useWindowScroll()
const route = useRoute()

async function fixNavBar() {
  await nextTick()
  const nav = document.querySelector('.VPNavBar')
  if (nav) {
    nav.classList.toggle('top', y.value <= 0)
  }
}

watch(y, fixNavBar, { immediate: true })
watch(() => route.path, fixNavBar)
</script>

<template>
  <DefaultLayout>
    <template #doc-before>
      <div v-if="!frontmatter.hideDate && frontmatter.created" class="date">
        <span>
          创建于 {{ format(new Date(frontmatter.created), "yyyy-MM-dd") }}
        </span>
        <span v-if="frontmatter.updated">
          / 更新于 {{ format(new Date(frontmatter.updated), "yyyy-MM-dd") }}
        </span>
      </div>
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
