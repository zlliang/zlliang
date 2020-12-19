import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

import { color } from '../utils/config'

const Container = styled.div`
  margin-bottom: 32px;
`

const TitleContainer = styled.h1`
  margin-top: 0;
  margin-bottom: 4px;
  font-style: ${(p) => (p.inChinese ? 'normal' : 'italic')};
  font-weight: 700;
`

const MetadataContainer = styled.div`
  font-size: 0.8rem;
  color: ${color.gray3};
`

const Metadata = styled.span`
  color: ${color.gray3};
`

const EditOnGithub = styled.a`
  cursor: pointer;
  color: ${color.gray3};
  :hover {
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
        {props.github && (
          <>
            {' '}
            ・{' '}
            <EditOnGithub
              href={`https://github.com/zlliang/zlliang.com/tree/master/${props.github}`}>
              {props.inChinese ? `在 GihHub 上编辑` : `Edit on GitHub`}
            </EditOnGithub>
          </>
        )}
      </MetadataContainer>
    </Container>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
  github: PropTypes.string,
  inChinese: PropTypes.bool
}
