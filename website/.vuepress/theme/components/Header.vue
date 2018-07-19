<template>
  <header>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <router-link :to="$localePath" class="navbar-item"><span id="site-brand" v-on:click="forcedUntoggle">{{ $themeLocaleConfig.brand }}</span></router-link>
          <div class="navbar-burger" v-bind:class="{ 'is-active': isActive }" data-target="main-navbar-menu" v-on:click="toggle">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active': isActive }" id="main-navbar-menu">
          <div class="navbar-end">
            <router-link :to="$localePath + 'blog/'" class="navbar-item"><div v-on:click="forcedUntoggle">{{ $themeLocaleConfig.blog }}</div></router-link>
            <router-link :to="$localePath + 'news/'" class="navbar-item"><div v-on:click="forcedUntoggle">{{ $themeLocaleConfig.news }}</div></router-link>
            <router-link :to="$localePath + 'projects/'" class="navbar-item"><div v-on:click="forcedUntoggle">{{ $themeLocaleConfig.projects }}</div></router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">{{ $themeLocaleConfig.selectText }}</div>
              <div class="navbar-dropdown">
                <router-link to="/" class="navbar-item"><div v-on:click="forcedUntoggle">English</div></router-link>
                <router-link to="/zh/" class="navbar-item"><div v-on:click="forcedUntoggle">简体中文</div></router-link>
              </div>
            </div>
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
