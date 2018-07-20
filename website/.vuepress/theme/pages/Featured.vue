<template>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">{{ title1[$lang] }}</p>
          <p class="subtitle">Top tile</p>
        </article>
      </div>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content lo</p>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>
</template>

<script>
var content = {
  title1: {
    'en-US': 'Hello',
    'zh-CN': '你好'
  }
}
export default {
  data: function() {
    return content
  }
}
</script>


<style scoped>
.is-child {
  box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19);
  transition: all 200ms;
}
.is-child:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);
  transition: all 200ms;
}
</style>
