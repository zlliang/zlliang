import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Page from '../../layouts/page'
import Title from '../../components/title'
import Markdown from '../../components/markdown'

import posts from '../../markdown/registry'

export interface Post {
  pid: string
  title: string
  content: string
  created: string
  updated?: string
  github?: string
}

const notFound: Post = {
  pid: 'not-found',
  title: 'Post Not Found',
  content: 'You maybe come the future?!',
  created: ''
}

const Post: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query
  const { content, ...meta } = posts.find(p => p.pid == pid) || notFound
  return (
    <Page>
      <Title {...meta} />
      <Markdown content={content} />
    </Page>
  )
}

export default Post
