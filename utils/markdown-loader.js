const hljs = require('highlight.js')
const mdKatex = require('@iktakahiro/markdown-it-katex')
const md = require('markdown-it')({
  html: true,
  xhtmlOut: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class='hljs'><div><code class='hljs-lang'>${lang}</code></div><code>${
          hljs.highlight(lang, str, true).value
        }</code></pre>`
      } catch (_) {}
    }
    return `<pre class='hljs'><code>${md.utils.escapeHtml(str)}</code></pre>`
  }
}).use(mdKatex)

module.exports = function(markdown) {
  this.cacheable()
  const imports = `
  import { 
    Tag, Desc
  } from "../components/utils";
  `
  return `${imports}
    const content = () => (<>${md.render(markdown)}</>);
    export default content;`
}
