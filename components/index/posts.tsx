import { FunctionComponent } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'

import { Section, SectionTitle } from './content'
import { color } from '../../utils/variables'

import posts from '../../markdown/registry'

const Posts: FunctionComponent = () => (
  <Section>
    <SectionTitle>Posts</SectionTitle>
    <ul id='posts'>
      {posts.map(p => (
        <li key={p.pid}>
          <Link href={`/post/${p.pid}`}>
            <a>{p.title}</a>
          </Link>
          <span className='date'>
            {dayjs(p.created).format('MMM DD, YYYY')}
          </span>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .date {
        margin-inline-start: 0.8rem;
        font-size: 0.9em;
        color: ${color.gray3};
      }
    `}</style>
  </Section>
)

export default Posts
