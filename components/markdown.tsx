import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
// @ts-ignore: This package does not provide type definitions
import mdKatex from '@iktakahiro/markdown-it-katex'

const md: MarkdownIt = new MarkdownIt({
  html: true,
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

const MarkdownContainer = styled.div`
  img {
    max-width: 100%;
  }
`

interface MarkdownProps {
  content: string
}

const Markdown: FunctionComponent<MarkdownProps> = ({ content }) => {
  content = md.render(content)
  return <MarkdownContainer dangerouslySetInnerHTML={{ __html: content }} />
}

export default Markdown
