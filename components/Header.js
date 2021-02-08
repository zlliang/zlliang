import styled from '@emotion/styled'
import Link from 'next/link'

import { mediaQuery, color } from '../utils/constants'

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
  border-radius: 6px;
  background-color: ${color.gray1};
  color: white;
  @media (prefers-color-scheme: dark) {
    & {
      background-color: ${color.gray5};
      color: ${color.gray1};
    }
  }
`

const Title = styled.div`
  margin: 0;
  padding: 8px 10px;
  color: white;
  line-height: 1em;
  font-family: 'Raleway', 'Inter', sans-serif;
  font-weight: 800;
  font-style: italic;
  font-size: 18px;
  cursor: default;
  user-select: none;
  @media (prefers-color-scheme: dark) {
    & {
      color: ${color.gray1};
    }
  }
`

// Also used by './index/header.js'
export const Nav = styled.nav`
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
  @media (prefers-color-scheme: dark) {
    & {
      color: ${color.gray1};
      :hover {
        border-color: ${color.gray2};
      }
    }
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <Title>ZILONG LIANG</Title>
      <Nav>
        <Link href='/'>
          <NavItem>← Home</NavItem>
        </Link>
        <Link href='/about'>
          <NavItem>About me</NavItem>
        </Link>
      </Nav>
    </HeaderContainer>
  )
}
