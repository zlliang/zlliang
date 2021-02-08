import PropTypes from 'prop-types'

import Page from '../components/layout'
import Header from '../components/index/header'
import Posts from '../components/index/posts'
import Markdown from '../components/markdown'
import { content } from './_index.md'

import getPosts from '../utils/get-posts'

export default function Index({ allPosts }) {
  return (
    <Page isIndex>
      <Header />
      <Posts allPosts={allPosts} />
      <Markdown content={content} />
    </Page>
  )
}

export async function getStaticProps() {
  return { props: { allPosts: await getPosts() } }
}

Index.propTypes = {
  allPosts: PropTypes.array.isRequired
}
