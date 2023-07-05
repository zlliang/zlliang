/** See https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md */
/** See https://github.com/observablehq/plot/blob/main/docs/.vitepress/markdown-it-plot.ts */

import container from 'markdown-it-container'

export default function augment(md: any) {
  md.use(container, 'plot', {
    render: (tokens: any[], idx: number) => {
      if (tokens[idx].nesting === 1) {
        const token = tokens[idx + 1]

        if (token.type !== 'fence' || token.tag !== 'code')
          throw new Error('Expecting fenced code block')

        const content = token.content
          .replace(/\bMath\.random\b/g, 'd3.randomLcg(96)')
          .replace(/\bd3\.(random(?!Lcg)\w+)\b/g, 'd3.$1.source(d3.randomLcg(96))')
          .replace(/\bd3\.shuffle\b/g, 'd3.shuffler(d3.randomLcg(96))')
          .replace(/"red"/g, '"var(--vp-c-red)"')
          .replace(/"green"/g, '"var(--vp-c-green)"')
          .replace(/"blue"/g, '"var(--vp-c-blue)"')
          .replace(/"purple"/g, '"var(--vp-c-yellow)"')

        if (/^Plot\.plot\(/.test(content)) {
          const options = content.slice(9)
          const height = /height:\s*(?<number>\d+)/.exec(options)?.groups?.number ?? '400'

          return `
            <div style="width: 688px; max-width: 100%; height: ${height}px; aspect-ratio: 688 / ${height};">
              <ClientOnly>
                <Plot :get-options="(d3, Plot) => ${md.utils.escapeHtml(options)}" />
              </ClientOnly>
            </div>
          `
        }

        // TODO
        throw new Error('Expecting Plot.plot(...)')
      } else {
        return ''
      }
    },
  })
}
