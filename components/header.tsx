import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { mediaQuery, color } from '../utils/variables'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  ${mediaQuery.phone} {
    margin-top: 16px;
    margin-bottom: 64px;
  }
  ${mediaQuery.desktop} {
    margin-top: 32px;
    margin-bottom: 64px;
  }
  border-radius: 4px;
  background-color: black;
  color: white;
`

const Title = styled.div`
  margin: 0;
  padding: 8px 10px;
  color: black;
  line-height: 1em;
  font-weight: 800;
  font-style: italic;
  font-size: 18px;
  -webkit-text-stroke: 3px white;
  paint-order: stroke fill;
  cursor: default;
  user-select: none;
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
  color: white;
  :hover {
    /* background-color: ${color.gray2}; */
    border-bottom: 3px solid ${color.gray5};
    ${mediaQuery.desktop} {
    padding-bottom: 4px;
    }
    ${mediaQuery.phone} {
      padding-bottom: 5px;
    }
  }
  transition: all 100ms ease-in-out;
  :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Title>ZILONG LIANG</Title>
    <Nav>
      <Link href='/'>
        <NavItem>
          <FontAwesomeIcon icon={faArrowLeft} /> Home
        </NavItem>
      </Link>
      <Link href='/about'>
        <NavItem>About me</NavItem>
      </Link>
    </Nav>
  </HeaderContainer>
)

export default Header
