<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{ emoji: string; special?: boolean }>(),
  { special: false },
)

const transform = ref(props.special ? 'translateY(-0.2em)' : 'none')
</script>

<template>
  <h1>
    <span class="emoji">{{ emoji }}</span>
    <span :class="[special && 'special']"><slot /></span>
  </h1>
</template>

<style scoped>
.emoji {
  display: inline-block;
  margin-right: 0.4em;
  transform: v-bind(transform);
}
</style>
