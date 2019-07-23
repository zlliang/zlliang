import { NextPage } from 'next'
import { Global as GlobalStyle, css } from '@emotion/core'

import Page from '../layouts/page-global'
import Header from '../components/index/header'

import Contact from '../components/index/contact'
import UsefulLinks from '../components/index/useful-links'
import Projects from '../components/index/projects'
import Gallery from '../components/index/gallery'

const globalCSS = css`
  /* Background */
  body {
    background-image: url('/static/images/background.svg');
    background-repeat: no-repeat;
  }
  @media (max-width: 736px) {
    body {
      background-size: 117%;
    }
  }
`

const Index: NextPage = () => {
  return (
    <Page>
      <GlobalStyle styles={globalCSS} />
      <Header />
      <Contact />
      <Projects />
      <UsefulLinks />
      <Gallery />
    </Page>
  )
}

export default Index
