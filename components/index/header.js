import styled from '@emotion/styled'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWeibo } from '@fortawesome/free-brands-svg-icons'

import { Nav } from '../header'
import Avatar from './avatar'
import { mediaQuery, color } from '../../utils/config'

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

const TitleAndContactContainer = styled.div`
  ${mediaQuery.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const TitleContainer = styled.div`
  position: relative;
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
  ${mediaQuery.phone} {
    font-size: 32px;
    text-align: center;
  }
  ${mediaQuery.desktop} {
    font-size: 48px;
  }
`

const TitleAux = styled.h1`
  margin: 0;
  line-height: 1em;
  color: black;
  font-weight: 800;
  font-style: italic;
  ${mediaQuery.phone} {
    position: relative;
    top: -1em;
    margin-bottom: -1em;
    font-size: 32px;
    text-align: center;
  }
  ${mediaQuery.desktop} {
    position: absolute;
    top: 0;
    font-size: 48px;
  }
`

const Subtitle = styled.h2`
  margin: 0;
  line-height: 1em;
  font-weight: 500;
  color: ${color.gray3};
  ${mediaQuery.phone} {
    margin-top: 2px;
    font-size: 16px;
  }
  ${mediaQuery.desktop} {
    margin-top: 4px;
    margin-right: 3px; /* Visual alignment */
    text-align: end;
    font-size: 24px;
  }
`

const ContactContainer = styled.div`
  color: ${color.gray2};
  ${mediaQuery.phone} {
    text-align: center;
  }
  ${mediaQuery.desktop} {
    position: relative;
    left: 4.8rem;
    width: 29.9rem;
  }
`

const ContactTag = styled.a`
  transition: background-color 100ms ease-in-out;
  color: black;
  padding: 6px 8px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 4px;
  :hover {
    color: black;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
  :not(:last-child) {
    margin-inline-end: 16px;
  }
`

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <Link href="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/about">
            <NavItem>About me</NavItem>
          </Link>
        </Nav>
      </HeaderContainer>
      <HeroContainer>
        <Avatar />
        <TitleAndContactContainer>
          <TitleContainer>
            <Title>ZILONG LIANG</Title>
            <TitleAux>ZILONG LIANG</TitleAux>
            <Subtitle>你好呀～我是梁子龙</Subtitle>
          </TitleContainer>
          <ContactContainer>
            <ContactTag href="mailto:zlliang96@outlook.com">
              <FontAwesomeIcon icon={faEnvelope} /> 邮件 Mail
            </ContactTag>
            <ContactTag href="https://weibo.com/mblquincy">
              <FontAwesomeIcon icon={faWeibo} /> 微博 Weibo
            </ContactTag>
          </ContactContainer>
        </TitleAndContactContainer>
      </HeroContainer>
    </>
  )
}
