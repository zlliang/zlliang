import PropTypes from 'prop-types'
import Link from 'next/link'
import dayjs from 'dayjs'

import { color } from '../../utils/config'

export default function Posts({ allPosts }) {
  return (
    <>
      <h3>文章 / Posts</h3>
      <ul id='posts'>
        {allPosts.length > 0 ? (
          allPosts.map((p) => (
            <li key={p.name}>
              <Link href={`/post/${p.name}`}>
                <a>{p.title}</a>
              </Link>{' '}
              {p.inChinese && <span className='inChinese'>(中文)</span>}
              <span className='date'>
                {dayjs(p.created).format('MMM DD, YYYY')}
              </span>
            </li>
          ))
        ) : (
          <li>暂无</li>
        )}
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
        @media (prefers-color-scheme: dark) {
          .inChinese {
            color: ${color.gray4};
          }
          .date {
            color: ${color.gray4};
          }
        }
      `}</style>
    </>
  )
}

Posts.propTypes = {
  allPosts: PropTypes.array.isRequired
}
