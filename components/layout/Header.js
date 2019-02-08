import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

// import { media } from '../styles/variants'

const HeaderContainer = styled.header``

const NavItem = styled.div`
  padding: 1em 0;
  display: inline-block;
  /* line-height: 2.5rem; */
  font-size: 1.2rem;
`

const Title = styled.div`
  font-weight: 600;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    color: #164a9b;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <NavItem><Link href="/"><Title>Zilong Liang</Title></Link></NavItem>
    </HeaderContainer>
  )
}
