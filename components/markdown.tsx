import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface MarkdownProps {
  inChinese?: boolean
  content: string
}

const MarkdownContainer = styled.div<{ inChinese: boolean | undefined }>`
  img {
    max-width: 100%;
  }
  p,
  ul,
  li,
  blockquote {
    line-height: ${props => (props.inChinese ? '1.8em' : 'inherit')};
  }
`

const Markdown: FunctionComponent<MarkdownProps> = props => {
  return (
    <MarkdownContainer
      inChinese={props.inChinese}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  )
}

export default Markdown
