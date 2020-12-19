const hljs = require('highlight.js')
const katex = require('katex')
const mdMetadata = require('markdown-it-meta')
const mdKatex = require('markdown-it-texmath').use(katex)
const md = require('markdown-it')({
  html: true,
  xhtmlOut: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class='hljs'><code>${
          hljs.highlight(lang, str, true).value
        }</code></pre>`
      } catch (_) {}
    }
    return `<pre class='hljs'><code>${md.utils.escapeHtml(str)}</code></pre>`
  }
})
  .use(mdMetadata)
  .use(mdKatex)

module.exports = function (markdown) {
  this.cacheable()
  const content = md.render(markdown)
  let metadata = md.meta
  metadata.github = metadata.github || `pages/${metadata.pid}.md`
  return `
    import PostContainer from "../components/post";
    export const content = \`${content}\`;
    export const metadata = JSON.parse(\`${JSON.stringify(metadata)}\`);
    const Post = () => <PostContainer {...{metadata, content}} />;
    export default Post
  `
}
