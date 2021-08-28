import styled from "@emotion/styled"
import Link from "next/link"

import Nav from "@/components/Nav"
import config from "@/configs"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  height: 32px;

  ${config.mq.phone} {
    margin-top: 16px;
  }
  ${config.mq.desktop} {
    margin-top: 32px;
  }
`

const Title = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  font-style: italic;
  user-select: none;
  cursor: pointer;
`

interface HeaderProps {
  home?: boolean
}

export default function Header({ home = false }: HeaderProps) {
  return (
    <Container>
      {home ? (
        <div />
      ) : (
        <Link href="/" passHref>
          <Title>ZILONG LIANG</Title>
        </Link>
      )}
      <Nav>
        <Link href="/">{home ? "主页" : "← 主页"}</Link>
      </Nav>
    </Container>
  )
}
