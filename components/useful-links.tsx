import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Section = styled.section`
  /* DEBUG */
  /* border: 0.1px solid red;
  * {
    border: 0.1px solid blue;
  } */
  margin: 32px 0;
`

const SectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.2rem;
`

const List = styled.ul`
  padding-inline-start: 0;
  list-style-type: none;
  li {
    margin-block-start: 0.4rem;
    margin-block-end: 0.4rem;
  }
  ul {
    padding-inline-start: 1em;
  }
`

const UsefulLinks: FunctionComponent = () => (
  <Section>
    <SectionTitle>Useful Links</SectionTitle>
    <List>
      <li>Journals</li>
      <List>
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
      </List>
      <li>Blogs</li>
      <List>
        <li>
          <a href='https://overreacted.io'>Overreacted</a> - Personal blog by
          Dan Abramov
        </li>
        <li>
          <a href='http://lucumr.pocoo.org'>
            Armin Ronacher&apos;s Thoughts and Writings
          </a>
        </li>
        <li>
          <a href='https://boats.gitlab.io/blog/'>withoutboat&apos;s blog</a>
        </li>
      </List>
    </List>
  </Section>
)

export default UsefulLinks
