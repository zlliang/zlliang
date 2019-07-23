import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

import { color } from '../../utils/variables'

const Container = styled.div`
  margin-bottom: 32px;
`
const TitleContainer = styled.h1`
  margin-top: 0;
  margin-bottom: 4px;
  font-style: italic;
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

interface TitleProps {
  meta: {
    title: string
    updated?: string
    github?: string
  }
}

const Title: FunctionComponent<TitleProps> = ({ meta }) => (
  <Container>
    <TitleContainer>{meta.title}</TitleContainer>
    <MetaContainer>
      {meta.updated && (
        <Updated>
          Updated - {dayjs(meta.updated).format('MMM DD, YYYY')}
        </Updated>
      )}{' '}
      ・{' '}
      {meta.github && (
        <EditOnGithub
          href={`https://github.com/zlliang/zlliang.com/tree/master/${
            meta.github
          }`}
        >
          Edit on GitHub
        </EditOnGithub>
      )}
    </MetaContainer>
  </Container>
)

export default Title
