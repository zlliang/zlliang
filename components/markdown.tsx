import { FunctionComponent, ComponentType } from 'react'
import styled from '@emotion/styled'

const MarkdownContainer = styled.div`
  img {
    max-width: 100%;
  }
`

interface MarkdownProps {
  Content: ComponentType
}

const Markdown: FunctionComponent<MarkdownProps> = ({ Content }) => {
  return (
    <MarkdownContainer>
      <Content />
    </MarkdownContainer>
  )
}

export default Markdown
