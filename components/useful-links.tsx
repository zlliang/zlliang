import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { Section, SectionTitle } from './content'

const UsefulLinks: FunctionComponent = () => (
  <Section>
    <SectionTitle>Useful Links</SectionTitle>
    <ul id='useful-links'>
      <li>Journals</li>
      <ul id='journals'>
        <li>
          <a href='https://epubs.siam.org/loi/siread'>SIREV</a> - SIAM Review
        </li>
        <li>
          <a href='https://epubs.siam.org/journal/sjmael'>SIMAX</a> - SIAM
          Journal on Matrix Analysis and Applications
        </li>
        <li>
          <a href='https://epubs.siam.org/journal/sjoce3'>SISC</a> - SIAM
          Journal on Scientific Computing
        </li>
        <li>
          <a href='https://toms.acm.org'>ACM TOMS</a> - ACM Transactions on
          Mathematical Software
        </li>
        <li>
          <a href='https://csur.acm.org'>ACM CSUR</a> - ACM Computing Surveys
        </li>
        <li>
          <a href='https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9739'>
            IEEE Communications Surveys & Tutorials
          </a>
        </li>
      </ul>
      <li>Homepages of scientists</li>
      <ul id='homepages-of-scientists'>
        <li>
          <a href='https://web.cs.ucdavis.edu/~bai/'>Zhaojun Bai</a>
        </li>
        <li>
          <a href='http://www.maths.manchester.ac.uk/~higham/'>
            Nicholas J. Higham
          </a>
        </li>
        <li>
          <a href='https://crd-legacy.lbl.gov/~xiaoye/'>Xiaoye Sherry Li</a>
        </li>
        <li>
          <a href='http://www.cs.cornell.edu/cv/'>Charles F. Van Loan</a>
        </li>
      </ul>
      <li>Blogs</li>
      <ul id='blogs'>
        <li>
          <a href='https://overreacted.io'>Overreacted</a> - Personal blog by
          Dan Abramov
        </li>
        <li>
          <a href='http://lucumr.pocoo.org'>
            Armin Ronacher’s Thoughts and Writings
          </a>
        </li>
        <li>
          <a href='https://boats.gitlab.io/blog/'>withoutboat’s blog</a>
        </li>
        <li>
          <a href='https://castel.dev'>Gilles Castel</a>
        </li>
      </ul>
    </ul>
  </Section>
)

export default UsefulLinks
