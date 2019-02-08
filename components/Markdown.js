import React from 'react'
import styled from '@emotion/styled'

import Layout from './layout/Layout'

const MarkdownContainer = styled.div`
  h1 {
    font-size: 1.4rem;
    font-weight: 600;
  }
`

export default function MarkdownGenerator(meta) {
  return function Markdown(props) {
    return (
      <Layout {...meta}>
        <MarkdownContainer>
          {props.children}
        </MarkdownContainer>
      </Layout>
    )
  }
}
