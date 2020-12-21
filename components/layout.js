import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Global as GlobalStyle, css } from '@emotion/react'
import styled from '@emotion/styled'
import mediumZoom from 'medium-zoom'

import Header from './header'
import Footer from './footer'
import { siteTitle, maxWidth, mediaQuery, color } from '../utils/config'

const cssLinks = [
  'https://unpkg.com/modern-normalize',
  'https://unpkg.com/highlight.js/styles/xcode.css',
  'https://unpkg.com/katex/dist/katex.min.css',
  'https://rsms.me/inter/inter.css',
  'https://fonts.googleapis.com/css?family=IBM+Plex+Mono'
]

const faviconLinks = [
  {
    href: '/favicons/favicon.jpg',
    rel: 'icon'
  },
  {
    href: '/favicons/favicon-touch.jpg',
    rel: 'apple-touch-icon',
    sizes: '180x180'
  }
]

const globalCSS = css`
  /* DEBUG */
  /* * {
    border: 0.1px solid blue;
  } */

  /* Typography */
  html * {
    line-height: 1.6em;
    color: ${color.gray1};
    font-family: 'Inter', sans-serif;
  }
  @supports (font-variation-settings: normal) {
    html * {
      line-height: 1.6em;
      color: ${color.gray1};
      font-family: 'Inter var', sans-serif;
    }
  }
  pre,
  code,
  code * {
    font-size: 14px;
    line-height: 1.4em;
    font-family: 'IBM Plex Mono', 'Roboto Mono', 'Menlo', 'Consolas', monospace;
  }
  ${mediaQuery.phone} {
    p code {
      font-size: 13px;
    }
  }
  .katex,
  .katex * {
    font: normal 1.02em 'KaTeX_Main', 'Times New Roman', serif;
  }

  /* Font size */
  ${mediaQuery.phone} {
    html {
      font-size: 14px;
    }
  }
  ${mediaQuery.desktop} {
    html {
      font-size: 16px;
    }
  }

  /* Selection */
  html *::selection {
    background-color: ${color.cyan};
    color: black;
  }

  /* Content style */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 32px;
    margin-bottom: 16px;
    line-height: 1.2em;
    font-weight: 600;
  }
  hr {
    margin: 16px 0;
    border: none;
    height: 1.5px;
    background-color: ${color.gray5};
  }
  blockquote {
    font-style: italic;
    color: ${color.gray2};
    margin-left: 0;
    margin-right: 0;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border-left: 5px solid ${color.gray5};
  }
  strong {
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: ${color.blue};
  }
  a:hover {
    text-decoration: underline;
    color: ${color.lightBlue};
  }

  ul {
    padding-inline-start: 18px;
  }
  li {
    margin-block-start: 0.1rem;
    margin-block-end: 0.1rem;
  }

  input[type='checkbox'] {
    margin-right: 8px;
  }

  code {
    border: 1px solid ${color.gray5};
    color: ${color.gray2};
    padding: 0 4px;
    border-radius: 3px;
  }

  pre code {
    color: ${color.gray1};
    padding: 0;
    border: none;
  }
  pre,
  pre.hljs {
    position: relative;
    border: 1px solid ${color.gray5};
    padding: 10px 16px;
    border-radius: 6px;
    overflow-x: auto;
  }

  .katex-display {
    padding: 10px 0;
    overflow-x: auto;
  }

  /* Customized components */
  tag {
    padding: 0.1em 0.3em;
    font-size: 0.7em;
    color: ${color.gray3};
    border: 1px solid ${color.gray3};
    border-radius: 3px;
    margin-inline-start: 0.4em;
  }
  span.desc {
    font-size: 0.9em;
    color: ${color.gray3};
  }
`

const PageContainer = styled.div`
  max-width: ${maxWidth}px;
  margin: 0 auto;
  padding: 0 16px;
`

export default function Page(props) {
  useEffect(() => {
    mediumZoom('img:not(.nozoom)')
  })
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <base target='_blank' />
        {faviconLinks.map((favicon) => (
          <link key={favicon.rel} {...favicon} />
        ))}
        {cssLinks.map((link) => (
          <link key={link} rel='stylesheet' href={link} />
        ))}
        <title>
          {props.title ? `${props.title} | ${siteTitle}` : siteTitle}
        </title>
      </Head>
      <GlobalStyle styles={globalCSS} />
      <PageContainer>
        {props.isIndex || <Header />}
        {props.children}
        <Footer />
      </PageContainer>
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string,
  isIndex: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Page.defaultProps = {
  isIndex: false
}
