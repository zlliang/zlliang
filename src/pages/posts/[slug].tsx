import { useEffect } from "react"
import mediumZoom from "medium-zoom"

import Layout from "@/components/Layout"
import Header from "@/components/Header"
import PostTitle from "@/components/PostTitle"
import { getPosts, renderMarkdown } from "@/utils"

import type { ParsedUrlQuery } from "querystring"
import type { GetStaticProps, GetStaticPaths } from "next"
import type { PostMetadata } from "@/utils"

interface PostProps extends PostMetadata {
  transpiled: string
}

interface PostUrlParams extends ParsedUrlQuery {
  slug: string
}

export default function Post(props: PostProps): JSX.Element {
  useEffect(() => {
    mediumZoom("img")
  }, [])

  return (
    <Layout>
      <Header />
      <PostTitle created={props.created} updated={props.updated}>
        {props.title}
      </PostTitle>
      <div>
        <div dangerouslySetInnerHTML={{ __html: props.transpiled }} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<PostProps, PostUrlParams> = async (
  context
) => {
  const posts = getPosts()
  const targetPost = posts.find(({ slug }) => slug === context.params.slug)
  const transpiled = await renderMarkdown(targetPost.markdown)

  return {
    props: { ...targetPost, transpiled },
  }
}

export const getStaticPaths: GetStaticPaths<PostUrlParams> = () => {
  const posts = getPosts()
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}
