import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import 'sanitize.css'

import Header from './Header'
import { size, media, color } from '../styles/variants'

const PageContainer = styled.div`
  max-width: ${size.tablet-32}px;
  margin: 16px auto;
  color: ${color.black};

  ${media.tablet} {
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
`

export default function Layout(props) {
  const title = props.title ? `${props.title} | Zilong Liang` : 'Zilong Liang'
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{title}</title>
      </Head>
      {/* <Header /> */}
      <PageContainer>
        <Header />
        {props.children}
      </PageContainer>
    </>
  )
}
