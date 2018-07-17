<template>
  <div class="page-container">
    <Header/>
    <Home v-if="$page.frontmatter.home"/>
    <div v-else>
      <div class="container">
        <div class="content">
          <Content/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './Home.vue'
export default {
  components: {
    Header,
    Footer,
    Home
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

* {
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

#profile-picture {
  width: 128px;
  border-radius: 50%;
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

</style>
