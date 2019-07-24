/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.md' {
  export const content: string
  export const meta: PostMeta
  const Post: NextPage
  export default Post
}
