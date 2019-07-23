import { FunctionComponent } from 'react'

import GeneralPage from './page-global'
import Header from '../components/header'

const Page: FunctionComponent = props => (
  <GeneralPage>
    <Header />
    {props.children}
  </GeneralPage>
)

export default Page
