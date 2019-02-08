import React from 'react'
import styled from '@emotion/styled'

import { color } from './styles/variants'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const FindMeItem = styled.a`
  display: block;
  width: 130px;
  padding: 20px;
  text-decoration: none;

  transition: all 100ms ease-in-out;
  cursor: pointer;

  i {
    width: 100%;
    color: ${color.link};
    text-align: center;
    font-size: 30px;
    opacity: 0.5;
    transition: all 100ms ease-in-out;
  }

  div {
    margin-top: 10px;
    color: ${color.link};
    text-align: center;
    opacity: 0.5;
    transition: all 100ms ease-in-out;
  }
  
  &:hover {
    background-color: rgba(70, 125, 190, 0.1);
    i, div { opacity: 1; color: ${color.linkHover}; }
  }
`

export default function FindMe() {
  return (
    <Container>
      <FindMeItem href="mailto:zlliang15@fudan.edu.cn">
        <i className="far fa-envelope"></i>
        <div>Email</div>
      </FindMeItem>
      <FindMeItem href="https://twitter.com/zilongliang">
        <i className="fab fa-twitter"></i>
        <div>Twitter</div>
      </FindMeItem>
      <FindMeItem href="https://github.com/zlliang">
        <i className="fab fa-github"></i>
        <div>GitHub</div>
      </FindMeItem>
      <FindMeItem href="https://medium.com/@zilongliang">
        <i className="fab fa-medium"></i>
        <div>Medium</div>
      </FindMeItem>
      <FindMeItem href="https://beta.observablehq.com/@zlliang">
        <i className="far fa-dot-circle"></i>
        <div>Observable</div>
      </FindMeItem>
    </Container>
  )
}
