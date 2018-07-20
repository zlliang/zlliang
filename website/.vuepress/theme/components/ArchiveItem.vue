<template>
  <div class="archive-item-container">
    <a v-bind:href="post.frontmatter.link" v-if="post.frontmatter.link">
      <div class="archive-item box">
        <div class="columns">
          <div class="column is-4 has-text-right-tablet">
            <a v-bind:href="post.frontmatter.link"><h2 v-html="post.title" class="archive-title"></h2></a>
            <p v-html="post.date.format($themeLocaleConfig.dateFormat)" class="archive-date" v-if="post.frontmatter.date"></p>
            <ProjectTags v-bind:tags="post.frontmatter.tags" class="is-hidden-tablet project-tags-left"/>
            <p v-if="post.frontmatter.abstract && post.frontmatter.pic" v-html="post.frontmatter.abstract" class="archive-abstract-left"></p>
          </div>
          <div class="column" v-bind:class="{ 'is-hidden-mobile': !post.frontmatter.abstract && !post.frontmatter.pic }">
            <ProjectTags v-bind:tags="post.frontmatter.tags" class="is-hidden-mobile project-tags-right"/>
            <img v-if="post.frontmatter.pic" class="archive-pic" v-bind:src="post.frontmatter.pic" v-bind:alt="post.title">
            <p v-if="post.frontmatter.abstract && !post.frontmatter.pic" v-html="post.frontmatter.abstract" class="archive-abstract"></p>
            <p v-else-if="!post.frontmatter.pic" class="archive-abstract">No abstract.</p>
          </div>
        </div>
      </div>
    </a>
    <router-link v-bind:to="post.path" v-else>
      <div class="archive-item box">
        <div class="columns">
          <div class="column is-4 has-text-right-tablet">
            <router-link v-bind:to="post.path"><h2 v-html="post.title" class="archive-title"></h2></router-link>
            <p v-html="post.date.format($themeLocaleConfig.dateFormat)" class="archive-date" v-if="post.frontmatter.date"></p>
            <ProjectTags v-bind:tags="post.frontmatter.tags" class="is-hidden-tablet project-tags-left"/>
            <p v-if="post.frontmatter.abstract && post.frontmatter.pic" v-html="post.frontmatter.abstract" class="archive-abstract-left"></p>
          </div>
          <div class="column" v-bind:class="{ 'is-hidden-mobile': !post.frontmatter.abstract && !post.frontmatter.pic }">
            <ProjectTags v-bind:tags="post.frontmatter.tags" class="is-hidden-mobile project-tags-right"/>
            <img v-if="post.frontmatter.pic" class="archive-pic" v-bind:src="post.frontmatter.pic" v-bind:alt="post.title">
            <p v-if="post.frontmatter.abstract && !post.frontmatter.pic" v-html="post.frontmatter.abstract" class="archive-abstract"></p>
            <p v-else-if="!post.frontmatter.pic" class="archive-abstract">No abstract.</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import ProjectTags from './ProjectTags.vue'
export default {
  components: { ProjectTags },
  props: ['post']
}
</script>

<style scoped>
.archive-item {
  border-radius: 15px;
  margin: 2em 0em !important;
  box-shadow: 0px 5px 20px 5px #e5e5e5;
  transition: all 150ms;
}
.archive-item:hover {
  border-radius: 15px;
  margin: 2em 0em !important;
  box-shadow: 0px 1px 10px 1px #e5e5e5;
  transform: scale(0.995);
}
.archive-item:active {
  transform: scale(0.95);
  transition: transform 100ms;
}
.archive-item:visited {
  transform: scale(0.995);
  transition: transform 100ms;
}
.archive-title {
  font-size: 1.4em;
  font-weight: 500;
  line-height: 1.2em;
}
.archive-date {
  /* font-style: italic; */
  color: grey;
}
.archive-abstract-left {
  margin-top: 1em;
  color: #444;
}
.archive-abstract {
  color: #444;
}
.archive-pic {
  border-radius: 15px;
}

.project-tags-left {
  margin-top: 0.5em;
}
.project-tags-right {
  margin-bottom: 0.5em;
}
</style>
