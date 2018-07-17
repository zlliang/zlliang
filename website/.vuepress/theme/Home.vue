<template>
  <div class="home-container">
    <section class="hero is-medium is-white">
      <div class="hero-body has-text-centered">
        <div class="container">
          <div class="columns">
            <div class="column has-text-right-tablet">
              <img src="/images/profile.jpg" alt="profile picture" id="profile-picture">
            </div>
            <div class="column has-text-left-tablet has-text-vcenter">
              <h1 class="title">Zilong Liang</h1>
              <p>Computational Mathematics, Fudan University.</p>
            </div>
          </div>
          <p>
            <a href="https://github.com/zlliang" class="button is-white">
              <span class="icon"><i class="fa fa-github"></i></span>
              <span>GitHub</span>
            </a>
            <router-link to="/blog/" class="button is-white">
              <span class="icon"><i class="fa fa-book"></i></span>
              <span>Blog</span>
            </router-link>
          </p>
        </div>
      </div>
    </section>

    <section class="has-background-danger" id="construction-banner">
      <div class="container">
        <div class="content has-text-centered">
          <p><strong class="has-text-white">This site is under construction this summer, and errors may occur!</strong></p>
        </div>
      </div>
    </section>

    <section class="section has-background-light has-text-black">
      <div class="container">
        <div class="columns">
          <div class="column is-8">
            <div class="content">
              <h2 class="title">About Me</h2>
              <p>TODO</p>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <h2 class="title">News</h2>
            </div>
            <p>TODO</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content">
          <h2 class="title">Featured Work</h2>
          <p>TODO</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#construction-banner {
  font-size: 1.2em;
  padding: 1em 30px;
}
</style>
