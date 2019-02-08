import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { media, color } from '../styles/variants'

const HeaderContainer = styled.header`
  margin-bottom: 40px;
`

const SiteTitle = styled.a`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 600;

  transition: all 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${color.linkHover};
  }
`

const Description = styled.span`
  font-size: 20px;
  color: ${color.grey};

  ${media.phone} {
    display: block;
    margin-top: 10px;
  }
`

const Nav = styled.div`
  margin-top: 60px;

  ${media.tablet} {
    margin-top: 40px;
  }
`

const NavItems = styled.a`
  color: ${({isActive}) => isActive ? color.black : color.link};
  transition: all 100ms ease-in-out;
  cursor: pointer;

  &:not(:first-of-type) {
    margin-left: 16px;
  }

  &:hover {
    color: ${color.linkHover};
  }
`

export default function Header(props) {
  const page = props.page
  return (
    <HeaderContainer>
      <Link href="/"><SiteTitle>Zilong Liang</SiteTitle></Link>
      <Description>{`I'm doing applied mathematics.`}</Description>
      <Nav>
        <Link href="/"><NavItems isActive={page == 'home'}>Home</NavItems></Link>
        <Link href="/blog"><NavItems isActive={page == 'blog'}>Blog</NavItems></Link>
        <Link href="/about"><NavItems isActive={page == 'about'}>About</NavItems></Link>
      </Nav>
    </HeaderContainer>
  )
}
