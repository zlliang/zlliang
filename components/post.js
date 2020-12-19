import PropTypes from 'prop-types'

import Page from './layout'
import Title from './title'
import Markdown from './markdown'

export default function Post(props) {
  return (
    <Page>
      <Title {...props.metadata} />
      <Markdown content={props.content} inChinese={props.metadata.inChinese} />
    </Page>
  )
}

Post.propTypes = {
  metadata: PropTypes.shape({
    pid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    updated: PropTypes.string,
    inChinese: PropTypes.string,
    github: PropTypes.string
  }),
  content: PropTypes.string
}
