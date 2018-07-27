<template>
  <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title">{{ $page.title }}</h1>
          <p class="subtitle" v-if="$page.frontmatter.date && !$page.frontmatter.subtitle">{{ $page.date.format($themeLocaleConfig.dateFormat) }}</p>
          <ProjectTags :tags="$page.frontmatter.tags" v-if="$page.frontmatter.tags"/>
          <div class="line-spread" v-if="$page.frontmatter.spread"><Content/></div>
          <div v-else><Content/></div>
        </div>
      </div>
      <Toc v-if="$page.frontmatter.sidebar"/>
    </section>
</template>

<script>
import ProjectTags from '../components/ProjectTags.vue';
import Toc from '../components/Toc.vue';

export default {
  components: { ProjectTags, Toc }
}
</script>

<style scoped>
/* Spread line height for pure-Chinese articles */
.line-spread {
  line-height: 2em;
}
</style>
