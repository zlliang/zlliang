<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h1 class="title">{{ $page.title }}</h1>
      </div>
    </div>
    <div class="container">
      <div v-for="post in postList">
        <ArchiveItem v-bind:post="post"/>
      </div>
    </div>
  </section>
</template>

<script>
import ArchiveItem from '../components/ArchiveItem.vue'
export default {
  components: { ArchiveItem },
  computed: {
    postList: function() {
      var posts = this.$site.pages.filter(item => { return item.path.indexOf(this.$page.path) == 0 && !item.frontmatter.archive })
      var posts = posts.sort((a, b) => { return(a.date.isBefore(b.date)) })
      return posts
    }
  }
}
</script>
