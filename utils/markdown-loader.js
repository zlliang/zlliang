const hljs = require('highlight.js')
const mdMeta = require('markdown-it-meta')
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
})
  .use(mdMeta)
  .use(mdKatex)

module.exports = function(markdown) {
  this.cacheable()
  const content = md.render(markdown)
  let meta = md.meta
  meta.github = meta.github || `pages/post/${meta.pid}.md`
  const imports = `
  import PostContainer from '../../components/post';
  import { 
    Tag, Desc
  } from "../../components/utils";
  `
  return `${imports}
    export const Content = () => (<>${content}</>);
    export const meta = JSON.parse('${JSON.stringify(meta)}');
    const Post = () => <PostContainer meta={meta} Content={Content} />;
    export default Post
  `
}
