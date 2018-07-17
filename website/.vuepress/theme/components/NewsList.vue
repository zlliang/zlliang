<template>
  <div class="newslist-container">
    <ul>
      <li v-for="news in newsList.headers" v-if="news.level == 2">
        <router-link v-bind:to="'/news/#' + news.title">{{ news.title }}</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  computed: {
    newsList: function() {
      var newsPage = this.$site.pages.find(item => { return item.frontmatter.news == true })
      return newsPage
    }
  }
}
</script>
