import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

import { color } from '../utils/variables'

interface TitleProps {
  title: string
  created: string
  updated?: string
  github?: string
  inChinese?: boolean
}

const Container = styled.div`
  margin-bottom: 32px;
`

const TitleContainer = styled.h1<TitleProps>`
  margin-top: 0;
  margin-bottom: 4px;
  font-style: ${p => (p.inChinese ? 'normal' : 'italic')};
  font-weight: 700;
`

const MetaContainer = styled.div`
  font-size: 0.8rem;
  color: ${color.gray3};
`

const Updated = styled.span``

const EditOnGithub = styled.a`
  cursor: pointer;
  color: ${color.gray3};
  :hover {
    color: ${color.gray4};
  }
`

const Title: FunctionComponent<TitleProps> = props => (
  <Container>
    <TitleContainer {...props}>{props.title}</TitleContainer>
    <MetaContainer>
      {props.created && (
        <Updated>
          {props.inChinese
            ? `创建于 ${dayjs(props.created).format('YYYY年MM月DD日')}`
            : `Created - ${dayjs(props.created).format('MMM DD, YYYY')}`}
        </Updated>
      )}
      {props.updated && (
        <Updated>
          {' '}
          ・{' '}
          {props.inChinese
            ? `更新于 ${dayjs(props.created).format('YYYY年MM月DD日')}`
            : `Updated - ${dayjs(props.created).format('MMM DD, YYYY')}`}
        </Updated>
      )}
      {props.github && (
        <>
          {' '}
          ・{' '}
          <EditOnGithub
            href={`https://github.com/zlliang/zlliang.com/tree/master/${
              props.github
            }`}
          >
            {props.inChinese ? `在 GihHub 上编辑` : `Edit on GitHub`}
          </EditOnGithub>
        </>
      )}
    </MetaContainer>
  </Container>
)

export default Title
