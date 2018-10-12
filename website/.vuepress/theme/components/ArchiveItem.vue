<template>
  <div class="archive-item-container">
    <a :href="post.frontmatter.link" v-if="post.frontmatter.link">
      <div class="archive-item box">
        <div class="columns">
          <div class="column is-4 has-text-right-tablet">
            <a :href="post.frontmatter.link"><h2 v-html="post.title" class="archive-title"></h2></a>
            <p v-html="post.date.format($themeLocaleConfig.dateFormat)" class="archive-date" v-if="post.frontmatter.date"></p>
            <ProjectTags :tags="post.frontmatter.tags" class="is-hidden-tablet project-tags-left"/>
            <p v-if="abstract && post.frontmatter.pic" v-html="abstract" class="archive-abstract-left"></p>
          </div>
          <div class="column" :class="{ 'is-hidden-mobile': !abstract && !post.frontmatter.pic }">
            <ProjectTags :tags="post.frontmatter.tags" class="is-hidden-mobile project-tags-right"/>
            <img v-if="post.frontmatter.pic" class="archive-pic" :src="post.frontmatter.pic" :alt="post.title">
            <p v-if="abstract && !post.frontmatter.pic" v-html="abstract" class="archive-abstract"></p>
            <p v-else-if="!post.frontmatter.pic" class="archive-abstract">暂无摘要。点击查看详细内容。</p>
          </div>
        </div>
      </div>
    </a>
    <router-link :to="post.path" v-else>
      <div class="archive-item box">
        <div class="columns">
          <div class="column is-4 has-text-right-tablet">
            <router-link :to="post.path"><h2 v-html="post.title" class="archive-title"></h2></router-link>
            <p v-html="post.date.format($themeLocaleConfig.dateFormat)" class="archive-date" v-if="post.frontmatter.date"></p>
            <ProjectTags :tags="post.frontmatter.tags" class="is-hidden-tablet project-tags-left"/>
            <p v-if="abstract && post.frontmatter.pic" v-html="abstract" class="archive-abstract-left"></p>
          </div>
          <div class="column" :class="{ 'is-hidden-mobile': !abstract && !post.frontmatter.pic }">
            <ProjectTags :tags="post.frontmatter.tags" class="is-hidden-mobile project-tags-right"/>
            <img v-if="post.frontmatter.pic" class="archive-pic" :src="post.frontmatter.pic" :alt="post.title">
            <p v-if="abstract && !post.frontmatter.pic" v-html="abstract" class="archive-abstract"></p>
            <p v-else-if="!post.frontmatter.pic" class="archive-abstract">暂无摘要。点击查看详细内容。</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import ProjectTags from './ProjectTags.vue';
export default {
  components: { ProjectTags },
  props: ['post'],
  computed: {
    abstract: function() {
      return this.post.frontmatter.abstract ? this.post.frontmatter.abstract : this.post.excerpt;
    }
  }
}
</script>

<style scoped>
.archive-item {
  /* -webkit-touch-callout: none; */
  border-radius: 15px;
  margin: 2em 0em !important;
  /* box-shadow: 0 6px 20px -4px rgba(0, 0, 0, .20); */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);;
  border: 2px solid rgba(0, 0, 0, 0.1);
  transition: all 300ms;
}
.archive-item:hover {
  border-radius: 15px;
  margin: 2em 0em !important;
  /* box-shadow: 0 10px 20px -4px rgba(0, 0, 0, .30); */
  /* box-shadow: 0 6px 12px 0 rgba(0,0,0,0.10); */
  border: 2px solid rgba(58,143,183, 0.6);
}
.archive-title {
  font-size: 1.4em;
  font-weight: 500;
  line-height: 1.2em;
}
.archive-date {
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
