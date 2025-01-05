<script setup lang="ts">
import { format } from 'date-fns'

const { date } = defineProps<{ date: string | Date }>()
</script>

<template>
  <div>
    <div class="flex">
      <div class="px-2 py-1 rounded bg-[var(--vp-c-bg-alt)] text-sm text-[var(--vp-c-text-2)]">
        {{ format(new Date(date), 'yyyy-MM-dd') }}
      </div>
    </div>
    <div class="ml-2 pl-3 py-2 border-dashed border-0 border-l-2 border-[var(--vp-c-gray-2)]">
      <slot />
    </div>
  </div>
</template>
