import React from 'react'

import Layout from '../components/layout/Layout'
import FindMe from '../components/FindMe'
import { color } from '../components/styles/variants'

export default function Hello() {
  return (
    <Layout>
      <div style={{ textAlign: 'center', margin: '10vh 0 30px 0', color: color.linkHover }}>Find me at ...</div>
      <FindMe />
    </Layout>
  )
}
