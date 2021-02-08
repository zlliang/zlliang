import { Global as GlobalStyle, css } from '@emotion/react'

import PropTypes from 'prop-types'
import Page from '../components/layout'
import Header from '../components/index/header'
import Bio from '../components/index/bio'
import Posts from '../components/index/posts'

import Markdown from '../components/markdown'
import { content } from './_index.md'

import { mediaQuery, imageHost } from '../utils/config'
import getPosts from '../utils/get-posts'

const globalCSS = css`
  /* Background */
  body {
    background-image: url('${imageHost}/background.svg');
    background-repeat: no-repeat;
  }
  ${mediaQuery.phone} {
    body {
      background-size: 120%;
    }
  }
`

export default function Index({ allPosts }) {
  return (
    <Page isIndex>
      <GlobalStyle styles={globalCSS} />
      <Header />
      <Bio />
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
