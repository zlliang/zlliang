const remark = require('remark')
const gfm = require('remark-gfm')
const highlight = require('remark-highlight.js')
const hint = require('remark-hint')
const html = require('remark-html')
const matter = require('gray-matter')

module.exports = function (markdown) {
  this.cacheable()
  const cwd = process.cwd()
  const { data, content } = matter(markdown)
  const parsedContent = remark()
    .use(gfm)
    .use(highlight)
    .use(hint)
    .use(html)
    .processSync(content)
    .toString()
    .replace(/`/g, '\\`') // Escape the special character "`"
    .replace(/{/g, '\\{') // Escape the special character "{"
  return `
    import PostContainer from '${require.resolve(`${cwd}/components/Post.js`)}'
    export const content = \`${parsedContent}\`
    export const metadata = JSON.parse(\`${JSON.stringify(data)}\`)
    const Post = () => <PostContainer {...{metadata, content}} />
    export default Post
  `
}
