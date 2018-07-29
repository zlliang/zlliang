<template>
  <div class="pdf-container">
    <div class="pdf-tools has-text-right-tablet">
      <a :href="file" class="pdf-download-button pdf-tools-span is-hidden-tablet">{{ $themeLocaleConfig.download }}</a>
      <span class="pdf-tools-span has-text-light" v-html="fileName"></span>
      <a :href="file" class="pdf-download-button pdf-tools-span is-hidden-mobile">{{ $themeLocaleConfig.download }}</a>
    </div>
    <div class="pdf-pages" :id="file + 'pages'"></div>
    <p class="is-hidden-tablet pdf-instruction" v-html="localeInstruction"></p>
  </div>
</template>

<script>
export default {
  props: ['file'],
  computed: {
    fileName: function() {
      var index = this.file.lastIndexOf('/')
      return this.file.substring(index + 1)
    },
    localeInstruction: function() {
      return "PDF 预览在手机上不可用。您可以直接<a href=" + this.file + ">下载</a>该文件."
    }
  },
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
  margin-right: 1em;
}
.pdf-tools-span:last-child {
  margin-right: 0;
}
.pdf-download-button {
  border-radius: 5px;
  background-color: #eee;
  padding: 0.25em 0.45em;
  font-size: 0.9em;
  color: #2d2d2d;
}
.pdf-download-button:hover {
  background-color: #d3d3d3;
  color: #2d2d2d;
}
.pdf-container {
  box-shadow: 0 6px 20px -4px rgba(0, 0, 0, .20);
  /* box-shadow: 0px 10px 50px 10px #eee; */
  border-radius: 15px;
  max-width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
}
.pdf-pages {
  max-width: 100%;
}
.pdf-canvas {
  max-width: 100%;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
}
.pdf-canvas:first-child {
  border-top: 0;
}
.pdf-canvas:last-child {
  margin-bottom: 10px;
  border-bottom: 0;
}
.pdf-instruction {
  padding: 1em;
}
</style>
