import styled from '@emotion/styled'
import Link from 'next/link'

const NavItem = styled.span`
  a {
    color: gray;
    :hover {
      color: black;
    }
    text-decoration: none;
  }
  :not(:last-child) {
    margin-right: 2em;
  }
`

export default function Navbar() {
  return (
    <nav>
      <NavItem>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </NavItem>
    </nav>
  )
}
