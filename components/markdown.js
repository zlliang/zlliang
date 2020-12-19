import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const MarkdownContainer = styled.div`
  img {
    max-width: 100%;
  }
  p,
  ul,
  li,
  blockquote {
    line-height: ${(props) => (props.inChinese ? '1.8em' : 'inherit')};
  }
`

export default function Markdown(props) {
  return (
    <MarkdownContainer
      inChinese={props.inChinese}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  )
}

Markdown.propTypes = {
  inChinese: PropTypes.bool,
  content: PropTypes.string
}
