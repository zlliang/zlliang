import PropTypes from 'prop-types'

import Page from './Layout'
import Title from './Title'
import Markdown from './Markdown'

export default function Post({ metadata, content }) {
  return (
    <Page>
      <Title {...metadata} />
      <Markdown content={content} inChinese={metadata.inChinese} />
    </Page>
  )
}

Post.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    updated: PropTypes.string,
    inChinese: PropTypes.bool
  }),
  content: PropTypes.string
}
