import PropTypes from 'prop-types'

import Page from './layout'
import Title from './title'
import Markdown from './markdown'

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
