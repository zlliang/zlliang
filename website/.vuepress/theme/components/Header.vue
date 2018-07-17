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

<script>
export default {
  mounted: function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }
}
</script>
