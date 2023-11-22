<template>
  <div class="vp-doc home main">
    <div class="hero">
      <div class="quote">这是一个普通的网站，不要整得煞有介事的。</div>
      <div class="from">—— 我</div>
    </div>
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

.container {
  margin: 0 auto;
  width: 100%;
}

.hero {
  position: relative;
  margin: 0 auto;
  padding: 72px 0;
  width: fit-content;
  max-width: calc(100% - 5.5rem);
  line-height: 1.5;
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
  right: -3rem;
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
