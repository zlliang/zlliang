import { FunctionComponent, useEffect } from 'react'
import Head from 'next/head'
import { Global as GlobalStyle, css } from '@emotion/core'
import styled from '@emotion/styled'
import mediumZoom from 'medium-zoom'

import Footer from '../components/footer'
import { color } from '../utils/variables'

const globalCSS = css`
  /* DEBUG */
  /* * {
    border: 0.1px solid blue;
  } */

  /* Typography */
  html * {
    line-height: 1.3em;
    font-family: 'Inter', sans-serif;
  }
  @supports (font-variation-settings: normal) {
    html * {
      line-height: 1.3em;
      font-family: 'Inter var', sans-serif;
    }
  }
  pre,
  code,
  code * {
    font-size: 14px;
    font-family: 'IBM Plex Mono', monospace;
  }

  /* Font size */
  @media (max-width: 736px) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 737px) {
    html {
      font-size: 16px;
    }
  }

  /* Selection */
  html *::selection {
    background-color: ${color.cyan};
    color: black;
  }

  /* Background */
  /* body {
    background-image: url('/static/images/background.svg');
    background-repeat: no-repeat;
  }
  @media (max-width: 736px) {
    body {
      background-size: 117%;
    }
  } */

  /* Content style */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 16px;
    margin-bottom: 16px;
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
    padding-inline-start: 1.3em;
  }
  li {
    margin-block-start: 0.4rem;
    margin-block-end: 0.4rem;
  }

  code {
    border: 1px solid ${color.gray5};
    color: ${color.blue};
    padding: 0 4px;
    border-radius: 3px;
  }

  pre code {
    line-height: 1.1em;
    color: black;
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
  code.hljs-lang {
    content: attr(rel);
    position: relative;
    top: -12px;
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1em;
    color: ${color.gray2};
    background-color: ${color.gray5};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: default;
    user-select: none;
  }
`

const PageContainer = styled.div`
  max-width: 736px;
  margin: 0 auto;
  padding: 0 16px;
`

interface PageProps {
  title?: string
}

const siteTitle = 'Zilong Liang'

const Page: FunctionComponent<PageProps> = props => {
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

        <link href='/static/favicons/favicon.jpg' rel='icon' />
        <link
          href='/static/favicons/favicon-touch.jpg'
          rel='apple-touch-icon'
          sizes='180x180'
        />

        <link href='https://unpkg.com/modern-normalize' rel='stylesheet' />
        <link
          href='https://unpkg.com/highlight.js/styles/xcode.css'
          rel='stylesheet'
        />
        <link href='https://rsms.me/inter/inter.css' rel='stylesheet' />
        <link
          href='https://fonts.googleapis.com/css?family=IBM+Plex+Mono'
          rel='stylesheet'
        />
        <title>
          {props.title ? `${props.title} | ${siteTitle}` : siteTitle}
        </title>
      </Head>
      <GlobalStyle styles={globalCSS} />
      <PageContainer>
        {props.children}
        <Footer />
      </PageContainer>
    </>
  )
}

export default Page
