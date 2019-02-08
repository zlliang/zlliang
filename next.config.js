// Next plugins
const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')

// MDX plugins
const slug = require('rehype-slug')
const highlight = require('rehype-highlight')

module.exports = withCSS(
  withMDX({
    options: { hastPlugins: [slug, highlight] }
  })({
    pageExtensions: ['js', 'jsx', 'mdx']
  })
)
