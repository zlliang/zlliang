<template>
<div class="featured-item-container" v-bind:id="id" v-bind:class="{ 'is-empty': empty }">
  <router-link class="featured-item" :to="toLocaleLink" v-if="internalLink" :style="'background-color:'+bgc+';color:'+color">
    <p class="featured-item-title" v-html="empty ? 'E M P T Y' : title"></p>
    <p class="featured-item-content" v-html="content" v-if="!empty"></p>
  </router-link>
  <a class="featured-item" :to="link" v-else :style="'background-color:'+bgc">
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
      if (!this.link) { return false }
      else { return this.link[0] == '/' ? true : false }
    },
    toLocaleLink: function() {
      return this.$lang == 'en-US' ? this.link : '/zh' + this.link
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
  /* border: 1px solid grey; */
  box-shadow: 0 2px 30px -4px rgba(0, 0, 0, .35);
  transition: all 150ms;
}
.featured-item:hover {
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .10), 0 1px 2px rgba(0, 0, 0, .3);
  transform: scale(0.995);
}
.featured-item:active {
  transform: scale(0.97);
  transition: transform 100ms;
}
.featured-item-container.is-empty {
  display: grid;
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

@media screen and (max-width: 751px) {
  .featured-item {
    margin-top: 30px;
  }
  .featured-item-container.is-empty {
    display: none;
  }
}
</style>
