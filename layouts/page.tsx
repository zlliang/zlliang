import { ReactNode, ReactElement } from 'react'
import Head from 'next/head'

interface PageProps {
  children: ReactNode
}

function Page(props: PageProps): ReactElement {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <link href='https://unpkg.com/modern-normalize' rel='stylesheet' />
        <title>Zilong Liang</title>
      </Head>
      <div className='page'>{props.children}</div>
    </>
  )
}

export default Page
