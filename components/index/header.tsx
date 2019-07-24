import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

import Avatar from './avatar'

import { mediaQuery, color } from '../../utils/variables'

const HeaderContainer = styled.header`
  text-align: end;
  ${mediaQuery.phone} {
    margin-top: 16px;
    margin-bottom: 48px;
  }
  ${mediaQuery.desktop} {
    margin-top: 32px;
    margin-bottom: 48px;
  }
`

const Nav = styled.nav`
  user-select: none;
`

const NavItem = styled.div`
  display: inline-block;
  line-height: 1.3em;
  ${mediaQuery.desktop} {
    padding: 7px 10px;
  }
  ${mediaQuery.phone} {
    padding: 8px 10px;
  }
  cursor: pointer;
  color: black;
  border-radius: 4px;
  :hover {
    color: white;
    background-color: black;
  }
  transition: all 100ms ease-in-out;
`

const HeroContainer = styled.header`
  margin-bottom: 64px;
  ${mediaQuery.phone} {
    margin-top: 48px;
    text-align: center;
  }
  ${mediaQuery.desktop} {
    display: flex;
    margin-top: 114px;
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
  color: black;
  font-weight: 800;
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
  <>
    <HeaderContainer>
      <Nav>
        <Link href='/'>
          <NavItem>Home</NavItem>
        </Link>
        <Link href='/about'>
          <NavItem>About me</NavItem>
        </Link>
      </Nav>
    </HeaderContainer>
    <HeroContainer>
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
    </HeroContainer>
  </>
)

export default Header
