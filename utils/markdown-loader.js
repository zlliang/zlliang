const remark = require('remark')
const html = require('remark-html')
const highlight = require('remark-highlight.js')
const matter = require('gray-matter')

module.exports = function (markdown) {
  this.cacheable()
  const cwd = process.cwd()
  const { data, content } = matter(markdown)
  const parsedContent = remark()
    .use(highlight)
    .use(html)
    .processSync(content)
    .toString()
  return `
    import PostContainer from '${require.resolve(`${cwd}/components/post.js`)}'
    export const content = \`${parsedContent}\`
    export const metadata = JSON.parse(\`${JSON.stringify(data)}\`)
    const Post = () => <PostContainer {...{metadata, content}} />
    export default Post
  `
}
