<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h1 class="title">{{ $page.title }}</h1>
      </div>
    </div>
    <div class="container archive">
      <div v-for="post in postList">
        <!-- <h2 class="archive-year">{{ post.date.format('YYYY') }}</h2> -->
        <div class="columns archive-item">
          <!-- When tablet and desktop -->
          <div class="column is-7 is-hidden-mobile has-text-left archive-title">
            <router-link v-bind:to="post.path" v-html="post.title" class="archive-title"></router-link>
          </div>
          <div class="column is-hidden-mobile has-text-right archive-date">
            {{ post.date.format('MMMM DD, YYYY') }}
          </div>
          <!-- When mobile phone -->
          <div class="column is-hidden-tablet archive-date">
            {{ post.date.format('MMMM DD, YYYY') }}
          </div>
          <div class="column is-hidden-tablet archive-title">
            <router-link v-bind:to="post.path" v-html="post.title" class="archive-title"></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    postList: function() {
      var posts = this.$site.pages.filter(item => { return item.path.indexOf(this.$page.path) == 0 && !item.frontmatter.archive })
      var posts = posts.sort((a, b) => { return(a.date.isBefore(b.date)) })
      return posts
    },
    lastListYear: function() {

    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.archive {
  font-size: 17px;
}

.archive-year {
  margin-top: 1.5em;
  font-size: 1.7em;
  font-weight: lighter;
}

.archive-year:first-child {
  margin-top: 0;
}

.archive-item {
  margin-top: 1em;
  margin-bottom: 1em !important;
}

.archive-title {
  font-size: 1.1em;
  padding-top: 0;
  padding-bottom: 0;
  color: black;
}

.archive-title:hover {
  color: hsl(0, 0%, 21%);
}

.archive-date {
  font-style: italic;
  padding-top: 0;
  padding-bottom: 0;
  color: hsl(0, 0%, 71%);
}
</style>
