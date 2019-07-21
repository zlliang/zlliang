import { NextPage } from 'next'
import styled from '@emotion/styled'

const Temp = styled.span`
  font-size: 10rem;
  -webkit-text-stroke: 3px red;
`

import Page from '../layouts/page'
import Header from '../components/header'

const Index: NextPage = () => {
  return (
    <Page>
      <Header />
    </Page>
  )
}

export default Index
