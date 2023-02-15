<script setup lang="ts">
import { ref, watch, onMounted } from "vue"
import { useData } from "vitepress"

const { isDark } = useData()

const opacity = ref(0)
const sloganImageRef = ref("")

function setSloganImageRef() {
  sloganImageRef.value = isDark.value
    ? "/images/slogan-dark.svg"
    : "/images/slogan-light.svg"
}

watch(isDark, setSloganImageRef)

onMounted(() => {
  // Guarantee 'isDark' is determined
  setTimeout(() => {
    setSloganImageRef()
    opacity.value = 1
  })
})
</script>

<template>
  <div class="vp-doc main">
    <div class="container hero-text">
      <div>这里是洋屁君的老巢。</div>
      <div>既然拨冗光临，那就不要吝惜 ——</div>
    </div>
    <div class="container hero-image-wrapper">
      <img
        :src="sloganImageRef"
        alt="Slogan：敬请放洋屁"
        class="slogan-image"
      />
    </div>
    <div class="container main-content">
      <div class="secondary">
        <slot name="secondary" />
      </div>
      <div class="content">
        <slot />
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

.main .secondary {
  margin-top: 32px;
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

@media (min-width: 1000px) {
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
    margin-top: 0;
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

@media (min-width: 1000px) {
  .secondary {
    max-width: 360px;
  }
}

.container.hero-text {
  margin-top: 16px;
  margin-bottom: 40px;
  color: var(--vp-c-text-2);
  font-weight: 500;
  text-align: center;
  /* opacity: v-bind(opacity);
  transition: opacity 0.5s; */
}

@media (min-width: 1000px) {
  .container.hero-text {
    margin-top: 24px;
    font-size: 1.2em;
  }
}

.hero-image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
}

.slogan-image {
  display: block;
  width: 100%;
  max-width: 720px;
  aspect-ratio: 802 / 511; /* Conserve height */
  opacity: v-bind(opacity);
  /* transition: opacity 0.5s;
  transition-delay: 0.2s; */
  transform: scale(1.1);
}

.main-content {
  opacity: v-bind(opacity);
  /* transition: opacity 0.5s;
  transition-delay: 0.4s; */
}

@media (min-width: 1000px) {
  .main-content {
    margin-bottom: 128px;
  }
}
</style>
