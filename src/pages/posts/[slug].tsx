import { useEffect } from "react"
import styled from "@emotion/styled"
import mediumZoom from "medium-zoom"

import Layout from "@/components/Layout"
import Header from "@/components/Header"
import PostTitle from "@/components/PostTitle"
import { getPosts, renderMarkdown } from "@/utils"
import config from "@/configs"

import type { ParsedUrlQuery } from "querystring"
import type { GetStaticProps, GetStaticPaths } from "next"
import type { PostMetadata } from "@/utils"

const Abstract = styled.div`
  margin-bottom: 32px;
  color: ${config.colors.secondary};
  font-size: 14px;

  text-align: justify;
  overflow-wrap: break-word;
  word-break: break-all;
  hyphens: auto;

  & p {
    margin: 0;
  }
`

interface PostProps extends PostMetadata {
  transpiledMarkdown: string
}

interface PostUrlParams extends ParsedUrlQuery {
  slug: string
}

export default function Post(props: PostProps): JSX.Element {
  useEffect(() => {
    mediumZoom("img")
  }, [])

  return (
    <Layout title={props.title}>
      <Header />
      <PostTitle created={props.created} updated={props.updated}>
        <div dangerouslySetInnerHTML={{ __html: props.transpiledTitle }} />
      </PostTitle>
      {props.abstract && (
        <Abstract
          dangerouslySetInnerHTML={{ __html: props.transpiledAbstract }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: props.transpiledMarkdown }} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<PostProps, PostUrlParams> = (
  context
) => {
  const posts = getPosts()
  const targetPost = posts.find(({ slug }) => slug === context.params.slug)
  const transpiledMarkdown = renderMarkdown(targetPost.markdown)

  return {
    props: {
      ...targetPost,
      transpiledMarkdown,
    },
  }
}

export const getStaticPaths: GetStaticPaths<PostUrlParams> = () => {
  const posts = getPosts()
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}
