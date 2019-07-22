<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h1 class="title">{{ $page.title }}</h1>
      </div>
    </div>
    <div class="container">
      <Content/>
      <div v-for="post in postList">
        <ArchiveItem :post="post"/>
      </div>
    </div>
  </section>
</template>

<script>
import ArchiveItem from './partial/ArchiveItem.vue'
export default {
  components: { ArchiveItem },
  computed: {
    postList: function() {
      var posts = this.$site.pages.filter(item => { return !item.frontmatter.archive && item.path.indexOf(this.$page.path) == 0;  });
      var posts = posts.sort((a, b) => { return(a.date.isBefore(b.date)); });
      return posts;
    }
  }
}
</script>
