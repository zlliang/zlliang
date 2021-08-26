import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Global as GlobalStyle, css } from '@emotion/react'
import styled from '@emotion/styled'
import { lighten } from 'polished'
import mediumZoom from 'medium-zoom'

import Header from './Header'
import Footer from './Footer'

import { siteTitle, maxWidth, mediaQuery, color } from '../utils/constants'

const cssLinks = [
  '//rsms.me/inter/inter.css',
  '//fonts.loli.net/css2?family=JetBrains+Mono:wght@400;700&family=Raleway:ital,wght@0,700;1,800&display=swap'
]

const faviconLinks = [
  {
    href: '/favicons/favicon.png',
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
    line-height: 1.7em;
    color: ${color.gray1};
    font-family: 'Inter', sans-serif;
    font-feature-settings: 'calt', 'case';
  }
  @supports (font-variation-settings: normal) {
    html * {
      font-family: 'Inter var', sans-serif;
    }
  }
  pre,
  code,
  code * {
    font-size: 15px;
    line-height: 1.5em;
    font-family: 'JetBrains Mono', 'Roboto Mono', 'Menlo', 'Consolas', monospace;
  }
  ${mediaQuery.phone} {
    pre,
    code,
    code * {
      font-size: 14px;
    }
  }

  /* Background color */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: ${color.gray1};
    }
    html * {
      color: ${color.gray5};
    }
  }

  /* Font size */
  ${mediaQuery.phone} {
    html {
      font-size: 15px;
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
    color: ${color.gray1};
  }
  @media (prefers-color-scheme: dark) {
    html *::selection {
      background-color: ${color.gray2};
      color: ${color.gray6};
    }
  }

  /* Content style */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &,
    & * {
      margin-top: 48px;
      line-height: 1.2em;
      font-family: 'Raleway', 'Inter', 'system-ui', -apple-system, sans-serif;
      font-weight: 700;
    }
    & code {
      font-size: 0.95em;
      font-family: 'JetBrains Mono', 'Roboto Mono', 'Menlo', 'Consolas',
        monospace;
    }
  }
  hr {
    margin: 16px 0;
    border: none;
    height: 1.5px;
    background-color: ${color.gray5};
  }
  blockquote {
    font-style: italic;
    margin-left: 0;
    margin-right: 0;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border-left: 5px solid ${color.gray5};
  }
  blockquote * {
    color: ${color.gray3};
  }
  strong {
    font-weight: 600;
  }
  a,
  a code {
    text-decoration: none;
    color: ${color.blue};
  }
  a:hover,
  a:hover code {
    text-decoration: underline;
    color: ${color.lightBlue};
  }
  @media (prefers-color-scheme: dark) {
    hr {
      background-color: ${color.gray3};
    }
    blockquote {
      border-color: ${color.gray3};
    }
    blockquote * {
      color: ${color.gray4};
    }

    a,
    a code {
      color: ${color.darkModeBlue};
    }
    a:hover,
    a:hover code {
      color: ${color.darkModeLightBlue};
    }
  }

  ol,
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

  table {
    margin: 0 auto;
    border-collapse: collapse;
    tbody {
      tr {
        border-radius: 8px;
      }
      tr:nth-of-type(odd) {
        background-color: ${color.lightGray};
        td:first-of-type {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
        td:last-of-type {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
    }
    th {
      font-weight: 600;
    }
    th,
    td {
      padding: 0.4em 0.8em;
      vertical-align: top;
      &,
      & * {
        line-height: 1.5em;
      }
    }
  }
  @media (prefers-color-scheme: dark) {
    table > tbody {
      tr:nth-of-type(odd) {
        background-color: ${color.darkModeLightGray};
      }
    }
  }

  code {
    padding: 0.1em 0.4em;
    border-radius: 4px;
    background-color: ${color.lightGray};
    color: ${color.gray1};
  }
  pre code {
    display: block;
    padding: 0 20px;
    border-radius: 0;
    background: none;
    color: ${color.gray1};
  }
  pre {
    position: relative;
    border-radius: 8px;
    padding: 14px 0;
    background-color: ${color.lightGray};
    overflow-x: auto;
  }
  @media (prefers-color-scheme: dark) {
    code {
      background-color: ${color.darkModeLightGray};
      color: ${color.gray5};
    }
    pre code {
      background: none;
      color: ${color.gray5};
    }
    pre {
      background-color: ${color.darkModeLightGray};
    }
    pre .hljs-comment {
      color: ${color.gray3};
    }
  }

  /* Components for remark-hint */
  p.hint.tip {
    ::before {
      content: 'Note 📝';
      margin-right: 1em;
      font-weight: 600;
    }
    padding: 10px 18px;
    border-radius: 8px;
    background-color: rgba(10, 160, 255, 0.15);
    &,
    & * {
      color: rgb(0, 50, 110);
    }
    a,
    a code {
      text-decoration: none;
      color: ${color.blue};
    }
    a:hover,
    a:hover code {
      text-decoration: underline;
      color: ${color.lightBlue};
    }
  }
  p.hint.warn {
    ::before {
      content: 'Note 🤯';
      margin-right: 1em;
      font-weight: 600;
    }
    padding: 10px 18px;
    border-radius: 8px;
    background-color: rgba(255, 255, 0, 0.24);
    &,
    & * {
      color: rgb(100, 60, 0);
    }
    a,
    a code {
      text-decoration: none;
      color: ${color.blue};
    }
    a:hover,
    a:hover code {
      text-decoration: underline;
      color: ${color.lightBlue};
    }
  }
  p.hint.error {
    ::before {
      content: 'Note ⛔️';
      margin-right: 1em;
      font-weight: 600;
    }
    padding: 10px 18px;
    border-radius: 8px;
    background-color: rgba(255, 30, 50, 0.1);
    &,
    & * {
      color: rgb(150, 10, 30);
    }
    a,
    a code {
      text-decoration: none;
      color: ${color.blue};
    }
    a:hover,
    a:hover code {
      text-decoration: underline;
      color: ${color.lightBlue};
    }
  }
  @media (prefers-color-scheme: dark) {
    p.hint.tip {
      background-color: rgba(10, 160, 255, 0.18);
      &,
      & * {
        color: rgb(140, 210, 250);
      }
      a,
      a code {
        color: ${lighten('0.1', color.darkModeBlue)};
      }
      a:hover,
      a:hover code {
        color: ${lighten('0.1', color.darkModeLightBlue)};
      }
    }
    p.hint.warn {
      background-color: rgba(255, 255, 0, 0.15);
      &,
      & * {
        color: rgb(255, 200, 120);
      }
      a,
      a code {
        color: ${color.darkModeBlue};
      }
      a:hover,
      a:hover code {
        color: ${color.darkModeLightBlue};
      }
    }
    p.hint.error {
      background-color: rgba(255, 30, 50, 0.2);
      &,
      & * {
        color: rgb(255, 170, 190);
      }
      a,
      a code {
        color: ${color.darkModeBlue};
      }
      a:hover,
      a:hover code {
        color: ${color.darkModeLightBlue};
      }
    }
  }

  /* Customized components */
  tag {
    & + tag {
      margin-inline-start: 0.4em;
    }
    padding: 0.2em 0.5em;
    font-size: 0.7em;
    color: ${color.gray3};
    border-radius: 4px;
    background-color: ${color.lightGray};
  }
  span.desc {
    font-size: 0.9em;
    color: ${color.gray3};
  }
  @media (prefers-color-scheme: dark) {
    tag {
      color: ${color.gray4};
      background-color: ${color.darkModeLightGray};
    }
    span.desc {
      color: ${color.gray4};
    }
  }
`

const PageContainer = styled.div`
  max-width: ${maxWidth}px;
  margin: 0 auto;
  padding: 0 16px;
`

export default function Page(props) {
  useEffect(() => {
    mediumZoom('img', { background: color.gray1 })
  }, [])
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <base target='_blank' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
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
