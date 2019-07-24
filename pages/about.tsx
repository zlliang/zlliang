import { NextPage } from 'next'

import PostContainer, { PostMeta } from '../components/post'

import { Content } from './helper/_about.md'

const meta: PostMeta = {
  pid: '_about',
  title: 'About Me',
  created: '2019-07-23',
  github: 'markdown/about.md'
}

const About: NextPage = () => <PostContainer meta={meta} Content={Content} />

export default About
