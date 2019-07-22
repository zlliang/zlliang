import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import Avatar from './avatar'

import { mediaQuery, color } from '../utils/variables'

const HeaderContainer = styled.header`
  /* DEBUG */
  /* border: 0.1px solid red;
  * {
    border: 0.1px solid blue;
  } */
  margin-bottom: 64px;
  ${mediaQuery.phone} {
    margin-top: 64px;
    text-align: center;
  }
  ${mediaQuery.desktop} {
    display: flex;
    margin-top: 128px;
  }
`

const TitleAndBioContainer = styled.div`
  ${mediaQuery.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const TitleContainer = styled.div`
  user-select: none;
  cursor: default;
  ${mediaQuery.phone} {
    position: relative;
    top: -24px;
  }
  ${mediaQuery.desktop} {
    position: relative;
    left: -48px;
    max-width: 21.5rem;
  }
`

const Title = styled.h1`
  margin: 0;
  line-height: 1em;
  font-weight: 700;
  font-style: italic;
  -webkit-text-stroke: 7px white;
  paint-order: stroke fill;
  ${mediaQuery.phone} {
    font-size: 32px;
    text-align: center;
  }
  ${mediaQuery.desktop} {
    font-size: 48px;
  }
`

const Subtitle = styled.h2`
  margin: 0;
  line-height: 1em;
  font-weight: 500;
  color: ${color.gray3};
  ${mediaQuery.phone} {
    font-size: 16px;
  }
  ${mediaQuery.desktop} {
    text-align: end;
    font-size: 24px;
  }
`

const Bio = styled.div`
  color: ${color.gray2};
  ${mediaQuery.phone} {
    text-align: left;
  }
  ${mediaQuery.desktop} {
    position: relative;
    left: 3.1rem;
    width: 29.9rem;
  }
`

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Avatar />
    <TitleAndBioContainer>
      <TitleContainer>
        <Title>ZILONG LIANG</Title>
        <Subtitle>Applied Mathematics.</Subtitle>
      </TitleContainer>
      <Bio>
        I am now a graduate student in School of Mathematical Sciences, Fudan
        University, Shanghai, China.
      </Bio>
    </TitleAndBioContainer>
  </HeaderContainer>
)

export default Header
