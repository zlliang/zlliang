<template>
  <div class="page-container">
    <Header/>
    <Home v-if="$page.frontmatter.home"/>
    <Archive v-if="$page.frontmatter.archive"/>
    <section class="section" v-else>
      <div class="container">
        <div class="content">
          <h1 class="title">{{ $page.title }}</h1>
          <Content/>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './Home.vue'
import Archive from './Archive.vue'

import vue from 'vue'
import dayjs from 'dayjs'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

export default {
  components: {
    Header,
    Footer,
    Home,
    Archive
  },
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
    // Progress bar
    nprogress.configure({ showSpinner: false })
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !vue.component(to.name)) {
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

<style>
/* Main CSS of zlliang.com */

/* Set up font smoothing, covering Bulma */
html {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

body {
  font-family: Roboto;
}

@media screen and (min-width: 1025px) {
  .container {
    max-width: 1025px;
  }
}

#site-brand {
  /* padding: 5px 10px;
  color: white;
  background-color: black; */
  font-weight: bold;
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

@media screen and (max-width: 768px) {
  .pub-badge {
    margin-top: -1.2em;
  }
}

.news-date {
  margin: 0 0.5em;
  font-size: 0.8em;
  color: grey;
}

.content {
  color: black;
}

.content pre code, .content pre code * {
  font-family: 'Roboto Mono';
  vertical-align: baseline !important;
  height: 0 !important;
  min-width: 0 !important;
  min-height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  font-size: 14px !important;
}

.content p code {
  background-color: hsl(0, 0%, 96%);
  font-family: 'Roboto Mono';
  padding: 0.16em 0.3em;
  border-radius: 3px;
  color: black;
}

.content pre {
  background-color: hsl(0, 0%, 96%);
  color: black;
  border-radius: 5px;
  line-height: 1.4em;
  padding: 0.5em 1em;
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

</style>
