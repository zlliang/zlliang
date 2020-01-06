import { FunctionComponent, ComponentType } from 'react'

import Page from './page'
import Title from '../components/title'
import Markdown from '../components/markdown'

export interface PostMeta {
  pid: string
  title: string
  created: string
  updated?: string
  inChinese?: boolean
  github?: string
}

export interface PostProps {
  meta: PostMeta
  content: string
}

const PostContainr: FunctionComponent<PostProps> = ({ meta, content }) => {
  return (
    <Page>
      <Title {...meta} />
      <Markdown content={content} inChinese={meta.inChinese} />
    </Page>
  )
}

export default PostContainr
