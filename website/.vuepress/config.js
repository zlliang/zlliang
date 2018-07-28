module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '梁子龙 Zilong Liang',
      description: '梁子龙的个人网站'
    }
  },

  themeConfig: {
    
    lastUpdated: true,
    locales: {
      '/': {
        brand: '梁子龙',
        news: '动态',
        notes: '笔记',
        blog: '博客',
        projects: '项目',
        selectText: '选择语言',
        aboutme: '关于我',
        featured: '精选',
        bio: '复旦大学数学科学学院 本科生',
        download: '下载',
        dateFormat: 'YYYY年M月D日',
        
        sidebar: 'auto',
      }
    }
  },

  ga: 'UA-122649115-1',

  markdown: {
    // anchor: { permalink: false },
    config: md => {
      md.use(require('@iktakahiro/markdown-it-katex'), {
        macros: {
          '\\numset': '\\mathbb', '\\all': '\\forall \\,', '\\exi': '\\exists \\,',
          '\\me': '\\mathrm{e}', '\\mi': '\\mathrm{i}', '\\st': '\\, \\mathrm{s.t.} \\,',
          '\\diff': '\\mathop{}\\!\\mathrm{d}', '\\pdiff': '\\mathop{}\\!\\partial',
          '\\trans': '\\mathrm{T}', '\\poss': '\\mathrm{P}', '\\expec': '\\mathrm{E}'
        }
      });
    }
  },

  head: [
    // Site metadata
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'TODO' }],
    ['link', { rel: 'mask-icon', href: 'TODO', color: '#ffffff' }],

    // Libraries
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'}],
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcss.com/KaTeX/0.9.0/katex.min.css'}],
    ['link', { rel: 'stylesheet', href: 'https://fonts.proxy.ustclug.org/css?family=Roboto:400,400i,500,500i,700,700i|Roboto+Mono'}],
    ['script', { src: 'https://cdn.bootcss.com/pdf.js/2.0.489/pdf.min.js' }],
  ],
}
