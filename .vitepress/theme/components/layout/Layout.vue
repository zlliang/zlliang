<script setup lang="ts">
import { watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useWindowScroll } from '@vueuse/core'
import { format } from 'date-fns'

const { Layout: DefaultLayout } = DefaultTheme
DefaultLayout.name = 'DefaultLayout'

const { frontmatter } = useData()

/** 
 * Fix the navigation bar border behavior
 * 
 * In VitePress v1.0.0-rc.29, the navigation bar border is hidden only in the
 * `home` layout, but it would better be hidden when the page is scrolled to the
 * top in any layout.
 * 
 * See: https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPNavBar.vue#L32C14-L32C14
 */
function fixNavBar() {
  if (!import.meta.env.SSR) {
    const { y } = useWindowScroll()
    const route = useRoute()

    async function handler() {
      await nextTick() // Guarantee DOM elements exist
      const nav = document.querySelector('.VPNavBar')
      if (nav) {
        nav.classList.toggle('top', y.value <= 0)
      }
    }

    watch(y, handler, { immediate: true })
    watch(() => route.path, handler)
  }
}

fixNavBar()
</script>

<template>
  <DefaultLayout>
    <template #doc-before>
      <div v-if="!frontmatter.hideDate && frontmatter.created" class="date">
        <span>
          创建于 {{ format(new Date(frontmatter.created), 'yyyy-MM-dd') }}
        </span>
        <span v-if="frontmatter.updated">
          / 更新于 {{ format(new Date(frontmatter.updated), 'yyyy-MM-dd') }}
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
