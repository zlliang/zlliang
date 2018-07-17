<template>
  <header>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item"><span id="site-brand" v-on:click="forcedUntoggle">Z. LIANG</span></router-link>
          <div class="navbar-burger"  v-bind:class="{ 'is-active': isActive }" data-target="main-navbar-menu" v-on:click="toggle">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active': isActive }" id="main-navbar-menu">
          <div class="navbar-end">
            <router-link to="/blog/" class="navbar-item"><div v-on:click="forcedUntoggle">Blog</div></router-link>
            <router-link to="/news/" class="navbar-item"><div v-on:click="forcedUntoggle">News</div></router-link>
            <router-link to="/publications/" class="navbar-item"><div v-on:click="forcedUntoggle">Publications</div></router-link>
            <router-link to="/projects" class="navbar-item"><div v-on:click="forcedUntoggle">Projects</div></router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle: function() {
      this.isActive = !this.isActive
    },
    forcedUntoggle: function() {
      this.isActive = false
    }
  }
}
</script>
