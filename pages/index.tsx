import { NextPage } from 'next'

import Page from '../layouts/page'
import Header from '../components/header'
import Footer from '../components/footer'

import UsefulLinks from '../components/useful-links'

const Index: NextPage = () => {
  return (
    <Page>
      <Header />
      <UsefulLinks />
      <Footer />
    </Page>
  )
}

export default Index
