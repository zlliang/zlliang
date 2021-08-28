import PostItem from "./PostItem"

import type { PostMetadata } from "@/utils"

interface PostListProps {
  posts: PostMetadata[]
}

export default function PostList(props: PostListProps): JSX.Element {
  return (
    <div>
      {props.posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  )
}
