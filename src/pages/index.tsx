import Link from "next/link"

import Layout from "@/components/Layout"
import Header from "@/components/Header"
import Hero from "@/components/home/Hero"
import PostList from "@/components/PostList"
import { getPosts } from "@/utils"

import type { GetStaticProps } from "next"
import type { PostMetadata } from "@/utils"

interface HomeProps {
  posts: PostMetadata[]
}

export default function Home(props: HomeProps): JSX.Element {
  return (
    <Layout>
      <Header home />
      <Hero />
      <h3>文章 / Posts</h3>
      <PostList posts={props.posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const posts = getPosts()
  return { props: { posts } }
}
