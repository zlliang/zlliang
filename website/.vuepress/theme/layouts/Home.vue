<template>
  <div class="home-container">
    <section class="hero is-medium is-white">
      <div class="hero-body has-text-centered">
        <div class="container">
          <div class="columns">
            <div class="column has-text-right-tablet">
              <img src="/images/profile.jpg" alt="profile picture" id="profile-picture">
            </div>
            <div class="column has-text-left-tablet" id="the-hero">
              <h1 class="title">{{ $themeLocaleConfig.title }}</h1>
              <h2 class="subtitle">{{ $themeLocaleConfig.subtitle }}</h2>
              <p>{{ $themeLocaleConfig.bio }}</p>
            </div>
          </div>
          <p>
            <a href="https://github.com/zlliang" class="button is-white">
              <span class="icon"><i class="fa fa-github"></i></span>
              <span>GitHub</span>
            </a>
            <router-link to="/blog/" class="button is-white">
              <span class="icon"><i class="fa fa-book"></i></span>
              <span>{{ $themeLocaleConfig.blog }}</span>
            </router-link>
          </p>
        </div>
      </div>
    </section>

    <section class="section has-background-light has-text-black">
      <div class="container">
        <div class="columns">
          <div class="column is-8">
            <div class="content">
              <h2 class="title">{{ $themeLocaleConfig.aboutme }}</h2>
              <Content/>
              <a href="/images/about1.jpg"><img class="about-photo" src="/images/about1.jpg" alt="about1"></a>
              <a href="/images/about2.jpg"><img class="about-photo" src="/images/about2.jpg" alt="about2"></a>
              <a href="/images/about3.jpg"><img class="about-photo" src="/images/about3.jpg" alt="about3"></a>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <h2 class="title">{{ $themeLocaleConfig.news }}</h2>
            </div>
            <NewsList/>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content">
          <h2 class="title">{{ $themeLocaleConfig.featured }}</h2>
        </div>
        <Featured/>
      </div>
    </section>
  </div>
</template>

<script>
import NewsList from '../components/NewsList.vue'
import Featured from './Featured.vue'
export default {
  components: { NewsList, Featured }
}
</script>


<style scoped>
#profile-picture {
  width: 160px;
  border-radius: 50%;
  box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.2);
}

#construction-banner {
  font-size: 1.2em;
  padding: 1em 30px;
}

.about-photo {
  max-height: 150px;
  margin: 2px 5px;
  border-radius: 7px;
}

#the-hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
