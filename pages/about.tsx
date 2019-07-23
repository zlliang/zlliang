import { NextPage } from 'next'

import Page from '../layouts/page'
import Title from '../components/post/title'
import Markdown from '../components/markdown'

import content from '../markdown/about.md'

const meta = {
  title: 'About Me',
  updated: '2019-07-23',
  github: 'markdown/about.md'
}

const About: NextPage = () => (
  <Page>
    <Title meta={meta} />
    <Markdown content={content} />
  </Page>
)

export default About
