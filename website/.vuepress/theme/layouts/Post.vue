<template>
  <section class="section">
    <div class="container" @click="isActive = false">
      <div class="content">
        <h1 class="title">{{ $page.title }}</h1>
        <p class="subtitle" v-if="$page.frontmatter.date && !$page.frontmatter.subtitle">{{ $page.date.format($themeLocaleConfig.dateFormat) }}</p>
        <ProjectTags :tags="$page.frontmatter.tags" v-if="$page.frontmatter.tags"/>
        <div class="line-spread" v-if="$page.frontmatter.spread"><Content/></div>
        <div v-else><Content/></div>
      </div>
    </div>
    <div class="toc-container">
      <transition name="toc"><TocList v-show="isActive"/></transition>
      <button class="toc-btn" @click="isActive = !isActive" :class="{ 'is-opened': isActive }">
        <transition name="mulu"><span v-if="!isActive" class="txt">目录</span></transition>
        <transition name="tuichu"><span v-if="isActive" class="txt">隐藏</span></transition>
      </button>
    </div>
  </section>
</template>

<script>
import ProjectTags from '../components/ProjectTags.vue';
import TocList from '../components/toc/TocList.vue';

export default {
  components: { ProjectTags, TocList },
  data: function() {
    return { isActive: false }
  }
}
</script>

<style scoped>
/* Spread line height for pure-Chinese articles */
.line-spread {
  line-height: 2em;
}

/* TOC */
.toc-btn {
  position: fixed;
  background-color: #3a8fb7;
  border: 0;
  border-radius: 50%;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
  z-index: 200;
  color: white;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
.toc-btn.is-opened {
  background-color: #77428d;
}
@media screen and (min-width: 752px) {
  .toc-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    font-size: 0.9rem;
  }
  .txt {
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
}
@media screen and (max-width: 751px) {
  .toc-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 45px;
    height: 45px;
    font-size: 0.8rem;
  }
  .txt {
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 45px;
    height: 45px;
    line-height: 45px;
  }
}

.toc-enter-active, .toc-leave-active {
  transition: all 300ms;
}
.toc-enter, .toc-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}

.mulu-enter-active, .mulu-leave-active {
  transition: all 300ms;
}
.mulu-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.mulu-leave-to {
  opacity: 0;
  transform: translate(-30px, 0);
}

.tuichu-enter-active, .tuichu-leave-active {
  transition: all 300ms;
}
.tuichu-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.tuichu-leave-to {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
