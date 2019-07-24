import { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'

const MarkdownContainer = styled.div`
  img {
    max-width: 100%;
  }
`

interface MarkdownProps {
  content: ReactNode
}

const Markdown: FunctionComponent<MarkdownProps> = ({ content }) => {
  return <MarkdownContainer>{content}</MarkdownContainer>
}

export default Markdown
