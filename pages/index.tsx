import { NextPage } from 'next'

import Page from '../layouts/page-global'
import Header from '../components/index/header'

import Contact from '../components/index/contact'
import UsefulLinks from '../components/index/useful-links'
import Projects from '../components/index/projects'
import Gallery from '../components/index/gallery'

const Index: NextPage = () => {
  return (
    <Page>
      <Header />
      <Contact />
      <Projects />
      <UsefulLinks />
      <Gallery />
    </Page>
  )
}

export default Index
