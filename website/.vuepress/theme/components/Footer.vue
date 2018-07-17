<template>
  <footer class="section">
    <hr>
    <div class="container">
      <div class="columns">
        <div class="column has-text-left">
          Site updated: {{ siteUpdated }}
        </div>
        <div class="column has-text-right is-hidden-mobile">
          <p>
            Made with <i class="fa fa-heart"></i> by <strong><a href="<%- url_for('/') %>" class="has-text-dark">Zilong Liang.</a></strong>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data: function() {
    return {
      siteUpdated: dayjs().format('MMM DD, YYYY')
    }
  }
}
</script>
