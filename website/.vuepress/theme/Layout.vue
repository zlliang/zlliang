<template>
  <div class="page-container">
    <Header/>
    <Home v-if="$page.frontmatter.home"/>
    <Archive v-else-if="$page.frontmatter.archive"/>
    <Post v-else/>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue'
import dayjs from 'dayjs'
import nprogress from 'nprogress'

import Header from './layouts/partial/Header.vue'
import Footer from './layouts/partial/Footer.vue'

import Home from './layouts/Home.vue'
import Archive from './layouts/Archive.vue'
import Post from './layouts/Post.vue'

export default {
  components: { Header, Footer, Home, Archive, Post },
  created: function() {
    // Convert date string to dayjs object
    this.$site.pages.forEach(page => {
      if (page.frontmatter.date) {
        page.date = dayjs(page.frontmatter.date);
      } else {
        page.date = dayjs(page.lastUpdated);
      }
    });
  },
  mounted: function() {
    window.addEventListener('scroll', this.onScroll)
    // Allow iOS devices tapping
    document.addEventListener("touchstart", function(){}, true);
    // Progress bar
    nprogress.configure({ showSpinner: false });
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start();
      }
      next();
    });
    this.$router.afterEach(function() {
      nprogress.done();
    });
  }
}
</script>

<style src="./css/framework.css"></style>
<style src="nprogress/nprogress.css"></style>
<style src="./css/style.css"></style>
<style src="./css/code.css"></style>
