import React from 'react'
import styled from '@emotion/styled'

import Layout from './layout/Layout'

const MarkdownContainer = styled.div`
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
