import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const MarkdownContainer = styled.div`
  img {
    max-width: 100%;
  }
`

interface MarkdownProps {
  content: string
}

const Markdown: FunctionComponent<MarkdownProps> = ({ content }) => {
  return <MarkdownContainer dangerouslySetInnerHTML={{ __html: content }} />
}

export default Markdown
