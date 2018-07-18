<template>
  <div class="pdf-container">
    <canvas v-bind:id="file" class="pdf-canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: ['file'],
  mounted: function() {
    var filePath = this.file

    var desiredWidth = 2000
    pdfjsLib.getDocument(filePath).then(function(pdf) {

      pdf.getPage(1).then(function(page) {

        var rawViewport = page.getViewport(1)
        var scale = desiredWidth / rawViewport.width
        var viewport = page.getViewport(scale)

        var canvas = document.getElementById(filePath)
        var context = canvas.getContext('2d')

        canvas.height = viewport.height
        canvas.width = viewport.width
        
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        }

        page.render(renderContext)
      })
    })
  }
}
</script>

<style scoped>
.pdf-container {
  max-width: 100%;
}
.pdf-canvas {
  max-width: 100%;
}
</style>
