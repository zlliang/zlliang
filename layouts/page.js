import Head from 'next/head'

import Header from './utils/header'
import Navbar from './utils/navbar'

function Page(props) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <title>Zilong Liang</title>
        <link href='https://unpkg.com/sanitize.css' rel='stylesheet' />
        <link
          href='https://unpkg.com/sanitize.css/typography.css'
          rel='stylesheet'
        />
        <link
          href='https://unpkg.com/sanitize.css/forms.css'
          rel='stylesheet'
        />
      </Head>
      <div className='page'>
        <Header />
        <Navbar />
        {props.children}
      </div>
    </>
  )
}

export default Page
