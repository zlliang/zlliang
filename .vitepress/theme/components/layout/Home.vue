<script setup lang="ts">
</script>

<template>
  <div class="vp-doc home main">
    <img alt="Cover meme" src="/images/cover-meme.jpg" class="cover-meme"/>
    <div class="container main-content">
      <div class="secondary">
        <slot name="secondary" />
        <div v-if="$slots.bottom" class="bottom-left">
          <slot name="bottom" />
        </div>
      </div>
      <div class="content">
        <slot />
        <div v-if="$slots.bottom" class="bottom-right">
          <slot name="bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/**
 * Align with .VPDoc from the default theme
 */

.main {
  padding: 32px 24px 96px;
}

.main :deep(h2 .header-anchor),
.main :deep(h3 .header-anchor) {
  display: none;
}

@media (min-width: 768px) {
  .main {
    padding: 48px 32px 128px;
  }
}

@media (min-width: 960px) {
  .main {
    padding: 32px 32px 0;
  }

  .main .container {
    display: flex;
    justify-content: center;
    max-width: 1152px;
  }

  .main .secondary {
    margin-left: 64px;
  }
}

.cover-meme {
  margin: 0 auto;
  width: 180px;
  height: 180px;
}

@media (min-width: 768px) {
  .cover-meme {
    width: 240px;
    height: 240px;
  }
}

.container {
  margin: 0 auto;
  width: 100%;
}

.content {
  flex-grow: 1;
  order: 1;
}

.secondary {
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
  order: 2;
  width: 100%;
}

.bottom-left {
  display: none;
}

@media (min-width: 960px) {
  .main-content {
    margin-bottom: 128px;
  }

  .secondary {
    max-width: 360px;
  }

  .bottom-left {
    display: block;
  }

  .bottom-right {
    display: none;
  }
}
</style>

<style>
.Layout:has(.home.main) .VPLocalNav {
  display: none !important;
}
</style>
