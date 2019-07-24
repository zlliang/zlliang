import { NextPage } from 'next'

import Page from '../layouts/page'
import Title from '../components/title'
import Markdown from '../components/markdown'

import Content from '../markdown/about.md'

const meta = {
  title: 'About Me',
  created: '2019-07-23',
  github: 'markdown/about.md'
}

const About: NextPage = () => (
  <Page>
    <Title {...meta} />
    <Markdown Content={Content} />
  </Page>
)

export default About
