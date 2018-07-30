<template>
  <div class="newslist-container">
    <ul>
      <li v-for="news in newsList">
        <a :href="news.frontmatter.link" v-if="news.frontmatter.link">{{ news.title }}</a>
        <router-link :to="$localePath + news.path.substring(1)" v-else>{{ news.title }}</router-link>
        <span class="news-date">{{ news.date.format('M月D日') }}</span>
      </li>
      <li><router-link to="/news/" class="has-text-dark" id="index-news-more-button">更多...</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    newsList: function() {
      var newsPieces = this.$site.pages.filter(item => { return !item.frontmatter.archive && item.path.substring(0, 6) == "/news/"; });
      newsPieces = newsPieces.sort((a, b) => { return(a.date.isBefore(b.date)); });
      newsPieces = newsPieces.slice(0, 6);
      return newsPieces;
    }
  }
}
</script>

<style scoped>
#index-news-more-button {
  text-decoration: underline;
}
.news-date {
  margin: 0 0.5em;
  font-size: 0.8em;
  color: grey;
}
</style>
