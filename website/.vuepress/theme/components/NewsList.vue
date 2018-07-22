<template>
  <div class="newslist-container">
    <ul>
      <li v-for="news in newsList">
        <a v-bind:href="news.frontmatter.link" v-if="news.frontmatter.link">{{ news.title }}</a>
        <router-link :to="$localePath + news.path.substring(1)" v-else>{{ news.title }}</router-link>
        <span class="news-date">{{ news.date.format($lang == 'en-US' ? 'MMM DD' : 'M月D日') }}</span>
      </li>
      <li><router-link :to="$localePath + 'news/'" class="has-text-dark" id="index-news-more-button">{{ $lang === 'en-US' ? 'More...' : '查看更多...'}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    newsList: function() {
      var newsPages = this.$site.pages.filter(item => { return item.path.substring(0, 6) == "/news/" && !item.frontmatter.archive })
      newsPages = newsPages.sort((a, b) => { return(a.date.isBefore(b.date)) })
      newsPages = newsPages.slice(0, 6)
      return newsPages
    }
  }
}
</script>
