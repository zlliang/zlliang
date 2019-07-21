import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import Avatar from './avatar'

const HeaderContainer = styled.header`
  /* border: 0.1px solid red;
  * {
    border: 0.1px solid blue;
  } */

  @media (max-width: 46rem) {
    margin-top: 4rem;
    text-align: center;
  }
  @media (min-width: 46rem) {
    display: flex;
    margin-top: 8rem;
  }
`

const TitleAndBioContainer = styled.div`
  @media (min-width: 46rem) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const TitleContainer = styled.div`
  @media (max-width: 46rem) {
    position: relative;
    top: -1.5rem;
  }
  @media (min-width: 46rem) {
    position: relative;
    left: -3rem;
    max-width: 21.5rem;
  }
`

const Title = styled.div`
  line-height: 1em;
  font-weight: 700;
  font-style: italic;
  -webkit-text-stroke: 6px white;
  paint-order: stroke fill;
  @media (max-width: 46rem) {
    font-size: 2rem;
    text-align: center;
  }
  @media (min-width: 46rem) {
    font-size: 3rem;
  }
`

const Subtitle = styled.div`
  line-height: 1em;
  color: #828282;
  @media (max-width: 46rem) {
    font-size: 1rem;
  }
  @media (min-width: 46rem) {
    text-align: end;
    font-size: 1.5rem;
  }
`

const Bio = styled.div`
  line-height: 1.2em; /* TODO */
  color: #4f4f4f;
  @media (max-width: 46rem) {
    text-align: left;
  }
  @media (min-width: 46rem) {
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
