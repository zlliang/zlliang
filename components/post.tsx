import { FunctionComponent, ComponentType } from 'react'

import Page from '../layouts/page'
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
  Content: ComponentType
}

const PostContainr: FunctionComponent<PostProps> = ({ meta, Content }) => {
  return (
    <Page>
      <Title {...meta} />
      <Markdown Content={Content} />
    </Page>
  )
}

export default PostContainr
