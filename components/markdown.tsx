import { FunctionComponent, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import mediumZoom from 'medium-zoom'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

import { mediaQuery } from '../utils/variables'

const MarkdownContainer = styled.div`
  img {
    max-width: 100%;
  }
`

interface MarkdownProps {
  file: string
}

const Markdown: FunctionComponent<MarkdownProps> = ({ file }) => {
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
  })

  const ref = useRef(null)
  useEffect(() => {
    import(`../markdown/${file}.md`).then(res => {
      // @ts-ignore
      ref.current.innerHTML = md.render(res.default)
      mediumZoom('img:not(.nozoom)')
    })
  })
  return <MarkdownContainer ref={ref} />
}

export default Markdown
