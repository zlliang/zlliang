<template>
  <div class="tags has-addons">
    <span class="tag" v-bind:class="color ? color : 'is-light'" v-html="content"></span>
    <span class="tag" v-if="content2" v-bind:class="color2 ? color2 : 'is-dark'" v-html="content2"></span>
  </div>
</template>

<script>
export default {
  props: ['content', 'content2', 'color', 'color2']
}
</script>
