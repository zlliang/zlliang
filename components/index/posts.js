import Link from "next/link";
import dayjs from "dayjs";

import { color } from "../../utils/config";
import posts from "../../utils/registry";

export default function Posts() {
  return (
    <>
      <h3>文章 / Posts</h3>
      <ul id="posts">
        {posts ? (
          <li>暂无</li>
        ) : (
          posts.map((p) => (
            <li key={p.pid}>
              <Link href={`/${p.pid}`}>
                <a>{p.title}</a>
              </Link>{" "}
              {p.inChinese && <span className="inChinese">(in Chinese)</span>}
              <span className="date">
                {dayjs(p.created).format("MMM DD, YYYY")}
              </span>
            </li>
          ))
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
      `}</style>
    </>
  );
}
