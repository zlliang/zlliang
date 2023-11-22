<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string | number
  }>(),
  {
    width: '120',
  },
)
</script>

<template>
  <div class="image-container">
    <img alt="shadow" src="/images/my-figure.png" :width="width" class="shadow">
    <img alt="My figure" src="/images/my-figure.png" :width="width">
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
}

.image-container .shadow {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transform: scaleY(.3) skewX(-25deg);
  transform-origin: 50% 90%;
  filter: brightness(0) opacity(0.3) blur(20px);
}

:root.dark .image-container .shadow {
  filter: brightness(0) opacity(0.3) blur(20px) invert(0.8);
}
</style>
