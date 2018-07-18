<template>
  <div class="newslist-container">
    <ul>
      <li v-for="news in newsList">
        <a v-bind:href="news.frontmatter.link" v-if="news.frontmatter.link">{{ news.title }}</a>
        <router-link v-bind:to="news.path" v-else>{{ news.title }}</router-link>
        <span class="news-date">{{ news.date.format('MMM DD') }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    newsList: function() {
      var newsPages = this.$site.pages.filter(item => { return item.path.substring(0, 6) == "/news/" && !item.frontmatter.archive })
      var newsPages = newsPages.sort((a, b) => { return(b.date.isBefore(a.date)) })
      return newsPages
    }
  }
}
</script>
