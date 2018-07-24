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
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import Home from './pages/Home.vue'
import Archive from './pages/Archive.vue'
import Post from './pages/Post.vue'

import Vue from 'vue'
import dayjs from 'dayjs'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  components: { Header, Footer, Home, Archive, Post },
  created: function() {
    // Convert date string to dayjs object
    this.$site.pages.forEach(page => {
      if (page.frontmatter.date) {
        page.date = dayjs(page.frontmatter.date)
      } else {
        page.date = dayjs(page.lastUpdated)
      }
    })
  },
  mounted: function() {
    // Allow iOS devices tapping
    document.addEventListener("touchstart", function(){}, true);
    // Progress bar
    nprogress.configure({ showSpinner: false })
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })
    this.$router.afterEach(() => {
      nprogress.done()
    })
  }
}
</script>



<style src="./assets/css/bulma.min.css"></style>

<style>

/* Main CSS of zlliang.com */

/* Set up font smoothing, covering Bulma */
html {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
}

/* @media screen and (min-width: 1025px) {
  .container {
    max-width: 1025px;
  }
} */

#site-brand {
  /* padding: 5px 10px;
  color: white;
  background-color: black; */
  font-weight: 700;
}


#index-news-more-button {
  text-decoration: underline;
}


.column.has-text-vcenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pub-author {
  color: grey;
  font-style: italic;
}
.pub-author strong {
  color: inherit;
}

.pub-title {
  font-weight: bolder;
}

/* @media screen and (max-width: 768px) {
  .pub-badge {
    margin-top: -1.2em;
  }
} */

.news-date {
  margin: 0 0.5em;
  font-size: 0.8em;
  color: grey;
}

/* .content {
  color: black;
} */
div[class*='language-'] {
  position: relative;
  background-color: hsl(0, 0%, 96%);
  border-radius: 10px;
}

pre[class*='language-'] {
  background: transparent;
  position: relative;
  line-height: 1.4;
  padding: 0.8rem 1rem;
  margin: 0.85rem 0rem;
  /* font-size: 14px !important; */
}

div[class*='language-'] .highlight-lines {
  /* font-size: 14px !important; */
  font-size: 0.9em;
  padding-top: 0.95em;
  user-select: none;
  position: absolute;
  /* top: 0; */
  width: 100%;
  line-height: 1.4;
}
.highlight-lines .highlighted {
  background: linear-gradient(to right, rgba(36, 82, 85, 0.10), rgba(36, 82, 85 ,0));
}

pre[class*='language-'] code, pre[class*='language-'] code * {
  vertical-align: baseline !important;
  height: 0 !important;
  min-width: 0 !important;
  min-height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  font-size: 14px !important;
}

.content p code {
  font-size: 0.85em;
  background-color: hsl(0, 0%, 96%);
  border-radius: 3px;
}

/* .content pre {
  background-color: hsl(0, 0%, 96%);
  border-radius: 5px;
  line-height: 1.4em;
  padding: 0.5em 1em;
  margin-bottom: 1.2em;
} */

.token.tag {
  align-items: baseline;
}
.token.attr-name {
  padding-left: 0.5em !important;
}

.katex {
  font-size: 1.1em;
  /* -webkit-font-smoothing: antialiased; */
}

.katex-display {
  padding-top: 0.08em;
  padding-bottom: 0.08em;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  overflow-y: hidden;
}

/* Just for now */
svg.icon.outbound {
  display: none;
}

.content img {
  border-radius: 15px;
  /* margin-top: 1em;
  margin-bottom: 1em; */
}
</style>
