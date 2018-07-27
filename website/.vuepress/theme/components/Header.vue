<template>
  <header>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item"><span id="site-brand" @click="forcedUntoggle">{{ $themeLocaleConfig.brand }}</span></router-link>
          <div class="navbar-burger" :class="{ 'is-active': isActive }" data-target="main-navbar-menu" @click="toggle">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': isActive }" id="main-navbar-menu">
          <div class="navbar-end">
            <router-link to="/news/" class="navbar-item"><div @click="forcedUntoggle">{{ $themeLocaleConfig.news }}</div></router-link>
            <router-link to="/notes/" class="navbar-item"><div @click="forcedUntoggle">{{ $themeLocaleConfig.notes }}</div></router-link>
            <router-link to="/blog/" class="navbar-item"><div @click="forcedUntoggle">{{ $themeLocaleConfig.blog }}</div></router-link>
            <router-link to="/projects/" class="navbar-item"><div @click="forcedUntoggle">{{ $themeLocaleConfig.projects }}</div></router-link>
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
    };
  },
  methods: {
    toggle: function() {
      this.isActive = !this.isActive;
    },
    forcedUntoggle: function() {
      this.isActive = false;
    }
  }
}
</script>

<style scoped>
#site-brand {
  font-weight: 700;
}
@media screen and (max-width: 751px) {
  .navbar-brand {
    background-color: white;
  }
  .navbar-menu {
    max-height: 320px;
    overflow-y: scroll;
    transition: all 200ms cubic-bezier(0.4, 0, 0, 1);
    display: block;
    z-index: -10;
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
