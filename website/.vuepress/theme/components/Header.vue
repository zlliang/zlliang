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
            <router-link :to="$localePath + 'news/'" class="navbar-item"><div v-on:click="forcedUntoggle">{{ $themeLocaleConfig.news }}</div></router-link>
            <router-link :to="$localePath + 'notes/'" class="navbar-item"><div v-on:click="forcedUntoggle">{{ $themeLocaleConfig.notes }}</div></router-link>
            <router-link :to="$localePath + 'blog/'" class="navbar-item"><div v-on:click="forcedUntoggle">{{ $themeLocaleConfig.blog }}</div></router-link>
            <router-link :to="$localePath + 'projects/'" class="navbar-item"><div v-on:click="forcedUntoggle">{{ $themeLocaleConfig.projects }}</div></router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">{{ $themeLocaleConfig.selectText }}</div>
              <div class="navbar-dropdown">
                <router-link :to="enPath" class="navbar-item"><div v-on:click="forcedUntoggle">English</div></router-link>
                <router-link :to="zhPath" class="navbar-item"><div v-on:click="forcedUntoggle">简体中文</div></router-link>
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
  computed: {
    // TODO
    enPath: function() {
      var path = this.$page.path
      if (path.indexOf('/zh/') == 0) {
        path = path.substring(3)
      }
      return path
    },
    zhPath: function() {
      var path = this.$page.path
      if (path.indexOf('/zh/') != 0) {
        path = '/zh' + path
      }
      return path
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

<style scoped>
@media screen and (max-width: 751px) {
  .navbar-brand {
    background-color: white;
  }
  .navbar-menu {
    max-height: 320px;
    overflow-y: scroll;
    transition: all 200ms cubic-bezier(0.4, 0, 0, 1);
    display: block;
    z-index: -5000;
    opacity: 0;
    width: 100%;
    transform: translate(0, -320px);
    position: absolute;
    top: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .navbar-menu.is-active {
    box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19);
    display: block;
    opacity: 1;
    transform: translate(0, 52px);
    position: absolute;
    top: 0px;
    width: 100%;
  }
}

</style>
