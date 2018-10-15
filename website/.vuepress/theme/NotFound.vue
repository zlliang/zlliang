<template>
  <div>
    <section class="hero is-fullheight">
    <Header/>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">404</h1>
        <p><router-link to="/">结束对未知的探索</router-link></p>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import Header from './layouts/partial/Header.vue'
export default {
  components: { Header }
}
</script>
