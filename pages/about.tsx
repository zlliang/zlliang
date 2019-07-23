import { NextPage } from 'next'

import Page from '../layouts/page'
import Markdown from '../components/markdown'

const About: NextPage = () => (
  <Page>
    <Markdown file='about' />
  </Page>
)

export default About
