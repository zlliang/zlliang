import { FunctionComponent } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'

import { color } from '../../utils/variables'

import posts from '../../markdown/registry'

const Posts: FunctionComponent = () => (
  <>
    <h3>Posts</h3>
    <ul id='posts'>
      {posts.map(p => (
        <li key={p.pid}>
          <Link href={'/post/[pid]'} as={`/post/${p.pid}`}>
            <a>{p.title}</a>
          </Link>{' '}
          {p.inChinese && <span className='inChinese'>(in Chinese)</span>}
          <span className='date'>
            {dayjs(p.created).format('MMM DD, YYYY')}
          </span>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .inChinese {
        font-size: 0.9em;
        color: ${color.gray3};
      }
      .date {
        margin-inline-start: 0.8rem;
        font-size: 0.9em;
        color: ${color.gray3};
      }
    `}</style>
  </>
)

export default Posts
