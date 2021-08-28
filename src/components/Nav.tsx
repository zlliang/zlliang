import styled from "@emotion/styled"

const Nav = styled.nav`
  user-select: none;

  a {
    padding-bottom: 4px;

    &:not(:last-of-type) {
      margin-right: 24px;
    }
  }
`

export default Nav
