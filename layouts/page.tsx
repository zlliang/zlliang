import { FunctionComponent } from 'react'
import Head from 'next/head'
import { Global as GlobalStyle, css } from '@emotion/core'
import styled from '@emotion/styled'

import { color } from '../utils/variables'

const globalCSS = css`
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

  html *::selection {
    background-color: ${color.cyan};
    color: black;
  }

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

  /* body {
    background-image: url('/static/images/background.svg');
    background-repeat: no-repeat;
  } */
  @media (max-width: 736px) {
    body {
      background-size: 117%;
    }
  }

  a {
    text-decoration: none;
    color: ${color.blue};
  }
  a:hover {
    text-decoration: underline;
    color: ${color.lightBlue};
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
        <link href='https://rsms.me/inter/inter.css' rel='stylesheet' />
        <title>
          {props.title ? `${props.title} | ${siteTitle}` : siteTitle}
        </title>
      </Head>
      <GlobalStyle styles={globalCSS} />
      <PageContainer>{props.children}</PageContainer>
    </>
  )
}

export default Page
