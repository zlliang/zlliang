---
title: 利用 PDF.js 构建 PDF 的网页端渲染
date: 2018-07-18
abstract: PDF.js 利用 HTML5 的 Canvas 技术提供了一种不依赖于本地系统的 PDF 渲染方式。如果仅希望在网页中预览 PDF 文件的话，这种方式可能是最简便的。GitHub 仓库中 PDF 文件的预览就采用了这种方式。
pic: /images/pdfjs-tutorial-hero.png
---

在网页中显示 PDF 文件听起来是一件奇怪的事，但有时我们的确需要在网页中实时显示 PDF 内容。GitHub 便在 2015 年[支持了这一功能](https://blog.github.com/2015-03-17-pdf-viewing/)，其中的关键技术是 Mozilla 开源的 JavaScript 库 [PDF.js](http://mozilla.github.io/pdf.js/)。

PDF.js 利用 HTML5 的 canvas 技术提供了一种不依赖于本地系统的 PDF 客户端渲染方式。它的基本原理是将 PDF 页面渲染为固定大小的位图，而后加载在 canvas 元素中。如果读取的 PDF 文件与渲染它的网页处在同一个服务器上时，使用这个库可能是最方便的一种方式（这是由于 PDF.js 不支持跨域）。

我们首先看这篇文章最终想要得到的结果。这是利用 PDF.js 完成的一个 PDF 渲染组件，在桌面设备中可以正常渲染出页面；而出于性能和可用性考虑，我们屏蔽了智能手机的客户端渲染，并提供一个说明和下载链接。

<Pdf file="/pdfs/pdf-tutorial-sample.pdf"/>

接下来我们就一步一步实现这个结果。

## 引入 PDF.js

PDF.js 由 `pdf.js` 和 `pdf.worker.js` 两个子库组成。其中 `pdf.worker.js` 主要提供了一些在线编辑和打印等富文本操作的功能，我们在这里暂时用不到，关于它的具体实例可以见 Mozilla 官方给出的 [Demo](http://mozilla.github.io/pdf.js/web/viewer.html)。我们这里仅需要引入 `pdf.js` 即可实现与 GitHub 类似的渲染功能。

最简便的方法是利用 CDN 加载。在 HTML 文件的 `<head>` 标签里加载即可：
```html
<script       
src="https://cdn.bootcss.com/pdf.js/2.0.489/pdf.min.js"></script>
```
我这里使用了国内比较稳定的 [BootCDN](https://www.bootcdn.cn/)，如果在主要用户在国外，也可以使用 [cdnjs](https://cdnjs.com) 等服务。

如果使用 node 进行开发，也可以选择把库安装在本地项目中：
```bash
$ yarn add pdfjs-dist
```

## 基本用法

PDF.js 使用 JavaScript 的 [Promises](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 技术完成 PDF 的异步加载。我们先准备好 PDF 文件 `pdf-tutorial-sample.pdf`，然后尝试一下 PDF.js 是否可以正确得到文件的页数：
```js
pdfjsLib.getDocument('pdf-tutorial-sample.pdf').then(pdf => {
  console.log(pdf.numPages);
});

// 结果：1
```
看来它可以正确得到文件的页数。上面这个例子告诉我们，`pdfjsLib` 的 `getDocument` 方法可以接受 PDF 文件名，返回一个 Promise 对象，如果读取成功的话会将 `pdf` 对象传入回调函数。

我们接着对 `pdf` 对象进行操作。在这之前，我们先在 HTML 文件里创建一个 canvas 画布：
```html
<body>
  <canvas id="pdf-tutorial-canvas"></canvas>
</body>
```
这样我们就可以在 JS 里操作 DOM。我们先设定 PDF 渲染的缩放大小 `scale` 为 1，试着渲染一个页面：
```js
var canvas = document.getElementById('pdf-tutorial-canvas');
var scale = 1;
pdfjsLib.getDocument('pdf-tutorial-sample.pdf').then(pdf => {
  pdf.getPage(1).then(page => {  // 得到 PDF 文件的第一页
    var viewport = page.getViewport(scale);  // 根据 PDF 页面信息得到视图
    var context = canvas.getContext('2d');  // 指定 canvas 画布按 2D 方式渲染

    // 设定画布大小
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // 设定渲染参数
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };

    // 渲染页面
    page.render(renderContext)
  });
});
```
可以看到，`pdf` 对象的 `getPage` 方法可以得到读取页面并进行异步操作，将其渲染到 canvas 上。默认地，PDF.js 以 72 DPI 的分辨率渲染出了页面。
