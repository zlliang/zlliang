import { FunctionComponent } from 'react'

import PageFramework from './framework'
import Header from '../components/header'

const Page: FunctionComponent = props => (
  <PageFramework>
    <Header />
    {props.children}
  </PageFramework>
)

export default Page
