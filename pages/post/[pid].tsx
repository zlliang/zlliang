import { NextPage } from 'next'
import PostContainer from '../../components/post'

import { PostMeta } from '../../components/post'
import posts from '../../markdown/registry'

interface PostProps {
  meta: PostMeta
  content: string
}

const notFound: PostMeta = {
  pid: 'not-found',
  title: 'Post Not Found',
  created: ''
}

const Post: NextPage<PostProps> = props => <PostContainer {...props} />

Post.getInitialProps = async ({ query }) => {
  const { pid } = query
  const meta = posts.find(p => p.pid == pid) || notFound
  let content: string
  if (meta.pid != 'not-found') {
    const res = await import(`../../markdown/${pid}.md`)
    content = res.default
  } else {
    content = ''
  }
  return { meta, content }
}

export default Post
