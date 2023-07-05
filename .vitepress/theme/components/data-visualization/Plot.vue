<script setup lang="ts">
import { onBeforeUnmount, ref, watchEffect } from 'vue'
import type * as d3 from 'd3'
import type * as Plot from '@observablehq/plot'

const props = defineProps<{
  getOptions?: (_d3: typeof d3, _plot: typeof Plot) => Plot.PlotOptions
}>()

const container = ref<HTMLDivElement | null>(null)
const plot = ref<ReturnType<typeof Plot.plot> | null>(null)
const opacity = ref(0)

watchEffect(async () => {
  if (props.getOptions) {
    const d3 = await import('d3')
    const Plot = await import('@observablehq/plot')

    plot.value?.remove()
    plot.value = Plot.plot({
      width: 688,
      ...props.getOptions(d3, Plot),
    })
    container.value?.append(plot.value)
    opacity.value = 1
  }
})

onBeforeUnmount(() => {
  plot.value?.remove()
})
</script>

<template>
  <div ref="container" class="plot-container" />
</template>

<style scoped>
.plot-container {
  width: 688px;
  max-width: 100%;
  opacity: v-bind(opacity);
  transition: opacity 0.15s;
}
</style>
