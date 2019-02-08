import React from 'react'
import Link from 'next/link'

import Layout from '../components/layout/Layout'

export default function Hello() {
  return (
    <Layout>
      <Link href="/hello"><a>Making Sense of of React Hooks</a></Link>
    </Layout>
  )
}
