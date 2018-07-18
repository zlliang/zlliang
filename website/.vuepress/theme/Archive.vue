<template>
  <div class="archive-container">
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title">{{ $page.title }}</h1>
        </div>
      </div>
    </section>
    <section v-for="post in postList" class="section">
      <div class="container">
        <div class="content">
          <h2>{{ post.title }}</h2>
          <div class="excerpt" v-html="post.excerpt"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    postList: function() {
      var posts = this.$site.pages.filter(item => { return item.path.indexOf(this.$page.path) == 0 && !item.frontmatter.archive })
      var posts = posts.sort((a, b) => { return(b.date.isBefore(a.date)) })
      return posts
    }
  }
}
</script>
