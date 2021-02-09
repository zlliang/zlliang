import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { mediaQuery } from '../utils/constants'

const MarkdownContainer = styled.div`
  img {
    border-radius: 8px;
    max-width: 100%;
  }
  ${mediaQuery.phone} {
    img {
      border-radius: 12px;
    }
  }
  p,
  ul,
  li,
  blockquote {
    text-align: ${({ inChinese }) => (inChinese ? 'justify' : 'inherit')};
    line-height: ${({ inChinese }) => (inChinese ? '1.9em' : 'inherit')};
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
