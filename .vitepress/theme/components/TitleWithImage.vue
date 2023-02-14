<script setup lang="ts">
withDefaults(defineProps<{ color?: string }>(), { color: "var(--vp-c-text-1)" })
</script>

<template>
  <div class="title-with-image">
    <h1 class="title"><slot /></h1>
    <div class="image"><slot name="image" /></div>
  </div>
</template>

<style scoped>
.title-with-image {
  position: relative;
}

.title {
  position: absolute;
  bottom: 0;
  padding: 8px 16px;
  color: v-bind(color);
}

.image > img {
  display: block;
}
</style>
