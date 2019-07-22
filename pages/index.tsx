import { NextPage } from 'next'

import Page from '../layouts/page'
import Header from '../components/header'
import Footer from '../components/footer'

import Contact from '../components/contant'
import UsefulLinks from '../components/useful-links'
import Projects from '../components/projects'
import Gallery from '../components/gallery'

const Index: NextPage = () => {
  return (
    <Page>
      <Header />
      <Contact />
      <UsefulLinks />
      <Projects />
      <Gallery />
      <Footer />
    </Page>
  )
}

export default Index
