import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import 'sanitize.css'
import '../styles/global.css'

import Header from './Header'
import { size, media, color } from '../styles/variants'

const PageContainer = styled.div`
  max-width: ${size.tablet-80}px;
  margin: 0 auto;
  margin-top: 60px;
  color: ${color.black};

  ${media.tablet} {
    margin: 40px 40px 0 40px;
  }

  ${media.phone} {
    margin: 40px 20px 0 20px;
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
      <PageContainer>
        <Header page={props.page}/>
        {props.children}
      </PageContainer>
    </>
  )
}
