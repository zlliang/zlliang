<script setup lang="ts">
defineProps<{
  content: string
  from?: string
}>()
</script>

<template>
  <div class="hero">
    <div class="quote">{{ content }}</div>
    <div v-if="from" class="from">—— {{ from }}</div>
  </div>
</template>

<style scoped>

.hero {
  position: relative;
  margin: 0 auto;
  padding: 72px 0;
  width: fit-content;
  max-width: calc(100% - 5.5rem);
  line-height: 1.7;
}

.hero::before {
  content: '“';
  position: absolute;
  top: 1.5rem;
  left: -3rem;
  color: var(--vp-c-text-3);
  font-size: 4rem;
}

.hero::after {
  content: '”';
  position: absolute;
  bottom: -1rem;
  right: -2.8rem;
  color: var(--vp-c-text-3);
  font-size: 4rem;
}

.hero > .quote {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.hero > .from {
  color: var(--vp-c-text-2);
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
}

</style>
