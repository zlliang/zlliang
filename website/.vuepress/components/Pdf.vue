<template>
  <div class="pdf-container">
    <div class="pdf-tools">
      <a v-bind:href="file" class="pdf-download-button pdf-tools-span">{{ $themeLocaleConfig.download }}</a>
      <span class="pdf-tools-span has-text-light" v-html="file"></span>
    </div>
    <div class="pdf-pages" v-bind:id="file + 'pages'"></div>
    <p class="is-hidden-tablet pdf-instruction">PDF Preview is not avaliable on mobile phones. Please <a v-bind:href="file">download</a> the file directly.</p>
  </div>
</template>

<script>
export default {
  props: ['file'],
  mounted: function() {
    var filePath = this.file
    var instruction = document.getElementById(filePath + 'ins')
    var pagesElement = document.getElementById(filePath + 'pages')
    
    pdfjsLib.getDocument(filePath).then(function(pdf) {
      var numPages = pdf.numPages
      for (var j = 1; j <= numPages; j++) {
        var canvas = document.createElement('canvas')
        canvas.id = filePath + 'page' + j
        canvas.className = 'pdf-canvas is-hidden-mobile'
        pagesElement.appendChild(canvas)
      }
      
      for (j = 1; j <= numPages; j++) {
        renderPDF(filePath, pdf, j)
      }
    })
  }
}
function renderPDF(filePath, pdf, j) {
  var desiredWidth = 2048
  pdf.getPage(j).then(function(page) {
    var rawViewport = page.getViewport(1)
    var scale = desiredWidth / rawViewport.width
    var viewport = page.getViewport(scale)

    var canvas = document.getElementById(filePath + 'page' + j)
    var context = canvas.getContext('2d')

    canvas.height = viewport.height
    canvas.width = viewport.width
    
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    }

    page.render(renderContext)
  })
}
</script>

<style>
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
.pdf-pages {
  max-width: 100%;
}
.pdf-canvas {
  /* border: 1px dashed grey; */
  max-width: 100%;
}
.pdf-canvas:last-child {
  margin-bottom: 10px;
}
.pdf-instruction {
  padding: 1em;
}
</style>
