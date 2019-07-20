import { ReactNode, ReactElement } from 'react'
import Head from 'next/head'

import Heading from '../components/heading'

interface PageProps {
  title?: string
  children: ReactNode
}

const siteTitle = 'Zilong Liang'

function Page(props: PageProps): ReactElement {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <link href='https://unpkg.com/modern-normalize' rel='stylesheet' />
        <title>
          {props.title ? `${props.title} | ${siteTitle}` : siteTitle}
        </title>
      </Head>
      <div className='page-container'>
        <Heading />
        <div className='page'>{props.children}</div>
      </div>
      <style jsx>{`
        .page-container {
          max-width: 50rem;
          margin: 0 auto;
          padding: 0 1rem;
          color: #2c2c2c;
        }
      `}</style>
    </>
  )
}

export default Page
