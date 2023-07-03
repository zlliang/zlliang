<template>
  <img class="black-white-image" v-bind="$attrs">
</template>

<style scoped>
.black-white-image {
  filter: grayscale(100%) brightness(0) opacity(.8);
}

:root.dark .black-white-image {
  filter: grayscale(100%) brightness(0) opacity(.75) invert(1);
}
</style>
