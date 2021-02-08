import PropTypes from 'prop-types'
import Head from 'next/head'
import { Global as GlobalStyle, css } from '@emotion/react'
import styled from '@emotion/styled'

import Header from './Header'
import Footer from './Footer'

import { siteTitle, maxWidth, mediaQuery, color } from '../utils/constants'

const cssLinks = [
  'https://rsms.me/inter/inter.css',
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Raleway:ital,wght@0,700;1,800&display=swap'
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
    line-height: 1.7em;
    color: ${color.gray1};
    font-family: 'Inter', sans-serif;
  }
  @supports (font-variation-settings: normal) {
    html * {
      color: ${color.gray1};
      font-family: 'Inter var', sans-serif;
    }
  }
  pre,
  code,
  code * {
    font-size: 14px;
    line-height: 1.5em;
    font-family: 'IBM Plex Mono', 'Roboto Mono', 'Menlo', 'Consolas', monospace;
  }
  ${mediaQuery.phone} {
    p code {
      font-size: 13px;
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
    margin-top: 32px;
    margin-bottom: 16px;
    line-height: 1.2em;
    font-family: 'Raleway', 'Inter', 'system-ui', -apple-system, sans-serif;
    font-weight: 700;
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
  a {
    text-decoration: none;
    color: ${color.blue};
  }
  a:hover {
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

    a {
      color: ${color.darkModeBlue};
    }
    a:hover {
      color: ${color.darkModeLightBlue};
    }
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
    border-radius: 3px;
    padding: 0 4px;
    color: ${color.gray2};
  }
  pre code {
    padding: 0;
    border: none;
    color: ${color.gray1};
  }
  pre {
    position: relative;
    border: 1px solid ${color.gray5};
    border-radius: 8px;
    padding: 14px 20px;
    overflow-x: auto;
  }
  @media (prefers-color-scheme: dark) {
    code {
      border-color: ${color.gray5};
      color: ${color.gray5};
    }
    pre code {
      color: ${color.gray5};
    }
    pre {
      border: 1px solid ${color.gray2};
    }
    pre .hljs {
      background-color: ${color.gray1};
    }
    pre .hljs-comment {
      color: ${color.gray3};
    }
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
  @media (prefers-color-scheme: dark) {
    tag {
      border-color: ${color.gray4};
      color: ${color.gray4};
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
