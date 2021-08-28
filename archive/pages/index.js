import PropTypes from 'prop-types'

import Page from '../components/Layout'
import Header from '../components/index/Header'
import Posts from '../components/index/Posts'
import Markdown from '../components/Markdown'
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
