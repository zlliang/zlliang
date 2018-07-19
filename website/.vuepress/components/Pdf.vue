<template>
  <div class="pdf-container">
    <div class="pdf-tools">
      <a v-bind:href="file" class="pdf-download-button pdf-tools-span">Download</a>
      <span class="pdf-tools-span has-text-light" v-html="file"></span>
    </div>
    <canvas v-bind:id="file" class="pdf-canvas is-hidden-mobile"></canvas>
    <p class="is-hidden-tablet pdf-instruction">PDF Preview is not avaliable on mobile phones. Please <a v-bind:href="file">download</a> the file directly.</p>
  </div>
</template>

<script>
export default {
  props: ['file'],
  mounted: function() {
    var filePath = this.file
    var instruction = document.getElementById(filePath + 'ins')
    
    var desiredWidth = 2048
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
.pdf-tools {
  background-color: #222;
  border-radius: 15px 15px 0 0;
  padding: 0.5em 1em;
}
.pdf-tools-span {
  margin: 0 1em;
}
.pdf-tools-span:first-child {
  margin: 0;
}
.pdf-download-button {
  color: white;
}
.pdf-download-button:hover {
  color: #ddd;
  text-decoration: underline;
}
.pdf-container {
  /* border: 1px solid red; */
  box-shadow: 0px 10px 50px 10px #eee;
  border-radius: 15px;
  max-width: 100%;
}
.pdf-canvas {
  /* border: 1px dashed grey; */
  margin: 10px 0;
  max-width: 100%;
}
.pdf-instruction {
  padding: 1em;
}
</style>
