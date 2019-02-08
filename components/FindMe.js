import React from 'react'
import styled from '@emotion/styled'

import { color } from './styles/variants'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 16px;
`

const FindMeItem = styled.a`
  cursor: pointer;
  display: block;
  width: 130px;
  padding: 20px;
  text-decoration: none; 

  i {
    width: 100%;
    color: ${color.link};
    text-align: center;
    font-size: 30px;
    opacity: 0.5;
  }

  div {
    margin-top: 10px;
    color: ${color.link};
    text-align: center;
    opacity: 0.5;
  }
  
  &:hover {
    background-color: rgba(70, 125, 190, 0.1);
    i, div { opacity: 1; color: ${color.linkHover}; }
  }
`

export default function FindMe() {
  return (
    <Container>
      <FindMeItem href='mailto:zlliang15@fudan.edu.cn'>
        <i className='far fa-envelope'></i>
        <div>Email</div>
      </FindMeItem>
      <FindMeItem href='https://twitter.com/zilongliang' target='_blank'>
        <i className='fab fa-twitter'></i>
        <div>Twitter</div>
      </FindMeItem>
      <FindMeItem href='https://github.com/zlliang' target='_blank'>
        <i className='fab fa-github'></i>
        <div>GitHub</div>
      </FindMeItem>
      <FindMeItem href='https://medium.com/@zilongliang' target='_blank'>
        <i className='fab fa-medium'></i>
        <div>Medium</div>
      </FindMeItem>
      <FindMeItem href='https://beta.observablehq.com/@zlliang' target='_blank'>
        <i className='far fa-dot-circle'></i>
        <div>Observable</div>
      </FindMeItem>
    </Container>
  )
}
