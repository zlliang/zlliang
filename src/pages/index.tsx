import Link from "next/link"

import Layout from "@/components/Layout"
import { getPosts } from "@/utils"

import type { GetStaticProps } from "next"
import type { PostMetadata } from "@/utils"

interface HomeProps {
  posts: PostMetadata[]
}

export default function Home(props: HomeProps): JSX.Element {
  return (
    <Layout>
      {props.posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const posts = getPosts()
  return { props: { posts } }
}
