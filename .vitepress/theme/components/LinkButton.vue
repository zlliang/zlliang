<template>
  <a class="link-button">
    <slot />
  </a>
</template>

<style scoped>
.link-button {
  display: block;
  margin: 0 -24px;
  padding: 12px 24px;
  text-decoration: none;
  cursor: pointer;
  transition:
    color var(--transition-timing) var(--transition-duration),
    background-color var(--transition-timing) var(--transition-duration);
}

@media (min-width: 640px) {
  .link-button {
    margin: 0 -16px;
    padding: 12px 16px;
    border-radius: var(--border-radius-large);
  }
}

.link-button:hover {
  background-color: var(--vp-c-bg-alt);
}
</style>
