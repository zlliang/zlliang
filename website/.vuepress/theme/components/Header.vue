<template>
  <header>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item"><span id="site-brand">Z. LIANG</span></router-link>
          <div class="navbar-burger" data-target="main-navbar-menu">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="navbar-menu" id="main-navbar-menu">
          <div class="navbar-end">
            <router-link to="/blog/" class="navbar-item">Blog</router-link>
            <router-link to="/news/" class="navbar-item">News</router-link>
            <router-link to="/publications/" class="navbar-item">Publications</router-link>
            <router-link to="/projects" class="navbar-item">Projects</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
