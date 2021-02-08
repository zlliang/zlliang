module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md/,
      use: [options.defaultLoaders.babel, 'markdown-loader']
    })
    config.resolveLoader.modules.push('utils')
    return config
  },
  pageExtensions: ['md', 'js'],
  reactStrictMode: true
}
