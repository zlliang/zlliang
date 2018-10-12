<template>
<div class="featured-item-container" :id="id" :class="{ 'is-empty': empty }">
  <router-link class="featured-item" :to="link" v-if="internalLink">
    <p class="featured-item-title" v-html="empty ? 'E M P T Y' : title"></p>
    <p class="featured-item-content" v-html="content" v-if="!empty"></p>
  </router-link>
  <a class="featured-item" :href="link" v-else>
    <p class="featured-item-title" v-html="empty ? 'E M P T Y' : title"></p>
    <p class="featured-item-content" v-html="content" v-if="!empty"></p>
  </a>
</div>
</template>

<script>
export default {
  props: ['title', 'content', 'pic', 'empty', 'id', 'link', 'bgc', 'color'],
  computed: {
    internalLink: function() {
      if (!this.link) { return false; }
      else { return this.link[0] == '/' ? true : false; }
    }
  }
}
</script>

<style>
.featured-item {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 1em 1.2em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);;
  border: 2px solid rgba(0, 0, 0, 0.1);
  transition: all 300ms;
}
.featured-item:hover {
  /* box-shadow: 0 10px 20px -4px rgba(0, 0, 0, .30); */
  border: 2px solid rgba(58,143,183, 0.6);
}
/* .featured-item:active { */
  /* transition: all 250ms; */
  /* transform: scale(0.97); */
  /* transition: transform 100ms; */
/* } */
.featured-item-container.is-empty {
  display: none;
}
.featured-item-container a {
  display: block;
}
.featured-item-container.is-empty .featured-item-title {
  font-weight: 100;
  color: #bbb;
  font-size: 1.5em;
  margin: auto;
}
.featured-item .featured-item-title {
  font-weight: 500;
  font-size: 1.3em;
  margin-bottom: 0.5em;
}
.featured-item-content {
  color: #2d2d2d;
}

@media screen and (max-width: 751px) {
  .featured-item {
    margin-top: 30px;
  }
  .featured-item-container.is-empty {
    display: none;
  }
}
</style>
