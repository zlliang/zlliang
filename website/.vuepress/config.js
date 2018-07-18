module.exports = {
  title: 'Zilong Liang',
  description: 'Personal website of Zilong Liang',
  markdown: {
    externalLinkSymbol: {
      icon: false
    },
    anchor: { permalink: false },
    config: function(md) {
      md.use(require('@iktakahiro/markdown-it-katex'), {
        macros: {
          '\\numset': '\\mathbb',
          '\\all': '\\forall \\,',
          '\\exi': '\\exists \\,',
          '\\me': '\\mathrm{e}',
          '\\mi': '\\mathrm{i}',
          '\\st': '\\, \\mathrm{s.t.} \\,',
          '\\diff': '\\mathop{}\\!\\mathrm{d}',
          '\\pdiff': '\\mathop{}\\!\\partial',
          '\\trans': '\\mathrm{T}',
          '\\poss': '\\mathrm{P}',
          '\\expec': '\\mathrm{E}'
        }
      })
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'TODO' }],
    ['link', { rel: 'mask-icon', href: 'TODO', color: '#ffffff' }],
    // ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/bulma/0.7.1/css/bulma.min.css'}],
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'}],
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/KaTeX/0.9.0/katex.min.css'}],
    ['link', { rel: 'stylesheet', href: 'https://fonts.proxy.ustclug.org/css?family=Roboto:400,400i,500,500i,700,700i|Roboto+Mono'}],
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/prism/9000.0.1/themes/prism.min.css'}]
  ],
}
