// Next plugins
const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')

// MDX plugins
const slug = require('rehype-slug')

module.exports = withCSS(
  withMDX({
    options: { hastPlugins: [slug] }
  })({
    pageExtensions: ['mdx']
  })
)
