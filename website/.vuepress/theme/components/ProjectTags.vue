<template>
  <div class="field is-grouped is-grouped-multiline tags-container">
    <div v-for="tag in tags" class="control">
      <Tag :content="tag.content" :color="tag.color" :content2="tag.content2" :color2="tag.color2" :link="tag.link"/>
    </div>
  </div>
</template>

<script>
import Tag from './Tag.vue';
export default {
  components: { Tag },
  props: ['tags']
}
</script>

<style>
.content .tags-container {
  margin-bottom: 1em !important;
}
</style>
