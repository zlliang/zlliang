import { ComponentType } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import PostContainer, { PostMeta } from '../../components/post'
import posts from '../../markdown/registry'

const Loading = () => <p>Loading...</p>

const notFound: PostMeta & { Content: ComponentType } = {
  pid: 'not-found',
  title: 'Post Not Found',
  created: '',
  Content() {
    return <></>
  }
}

const Post: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query
  const meta = posts.find(p => p.pid == pid) || notFound
  let Content: ComponentType
  if (meta.pid != 'not-found') {
    Content = dynamic(() => import(`../../markdown/${pid}.md`), {
      loading: Loading
    })
  } else {
    Content = notFound.Content
  }

  return <PostContainer meta={meta} Content={Content} />
}

export default Post
