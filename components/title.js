import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

import { color } from '../utils/config'

const Container = styled.div`
  margin-bottom: 32px;
`

const TitleContainer = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-family: 'Raleway', 'Inter', 'system-ui', -apple-system, sans-serif;
  font-weight: 700;
  line-height: 1.3em;
`

const MetadataContainer = styled.div`
  font-size: 0.8rem;
`

const Metadata = styled.span`
  color: ${color.gray3};
  @media (prefers-color-scheme: dark) {
    color: ${color.gray4};
  }
`

export default function Title(props) {
  return (
    <Container>
      <TitleContainer {...props}>{props.title}</TitleContainer>
      <MetadataContainer>
        {props.created && (
          <Metadata>
            {props.inChinese
              ? `创建于 ${dayjs(props.created).format('YYYY年MM月DD日')}`
              : `Created - ${dayjs(props.created).format('MMM DD, YYYY')}`}
          </Metadata>
        )}
        {props.updated && (
          <Metadata>
            {' '}
            ・{' '}
            {props.inChinese
              ? `更新于 ${dayjs(props.updated).format('YYYY年MM月DD日')}`
              : `Updated - ${dayjs(props.updated).format('MMM DD, YYYY')}`}
          </Metadata>
        )}
      </MetadataContainer>
    </Container>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
  inChinese: PropTypes.bool
}
