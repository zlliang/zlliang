<template>
  <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title">{{ $page.title }}</h1>
          <div class="line-spread" v-if="$page.frontmatter.spread"><Content/></div>
          <div v-else><Content/></div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.line-spread {
  line-height: 2em;
}
</style>
