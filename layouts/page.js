import Head from './utils/head'
import Nav from './utils/nav'

function Page(props) {
  return (
    <div>
      <Head />
      <Nav />
      {props.children}
    </div>
  )
}

export default Page
