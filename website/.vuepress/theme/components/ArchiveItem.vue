<template>
  <div class="archive-item box">
    <div class="columns">
      <div class="column is-4 has-text-right-tablet">
        <router-link v-bind:to="post.path"><h2 v-html="post.title" class="archive-title"></h2></router-link>
        <p v-html="post.date.format('MMM DD, YYYY')" class="archive-date"></p>
      </div>
      <div class="column">
        <p v-if="post.frontmatter.abstract" v-html="post.frontmatter.abstract" class="archive-abstract"></p>
        <p v-else class="archive-abstract">No abstract.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped>
.archive-item {
  margin: 2em 0em !important;
  box-shadow: 0px 5px 20px 5px #eee;
  /* border: 1px solid green; */
}
.archive-title {
  font-size: 1.4em;
  font-weight: 500;
  line-height: 1.2em;
}
.archive-date {
  font-style: italic;
  color: grey;
}
.archive-abstract {
  color: #555;
}
</style>
