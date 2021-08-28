import Link from "next/link"
import styled from "@emotion/styled"
import { format } from "date-fns"

import config from "@/configs"

import type { PostMetadata } from "@/utils"

const Container = styled.div`
  cursor: pointer;

  &:not(:first-of-type) {
    margin-top: 24px;
  }

  &:hover .title {
    border-bottom: 2px solid ${config.colors.linkHoverBorder};
    color: ${config.colors.linkHover};
  }
`

const Title = styled.div`
  margin-bottom: 4px;
`

const TitleText = styled.span`
  padding-bottom: 4px;
  border-color: transparent;
  color: ${config.colors.link};
  transition: border-color 0.15s, color 0.15s;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  font-family: "Raleway", "Inter", system-ui, -apple-system,
    "BlinkMacSystemFont", "Segoe UI", "Roboto", "Ubuntu", "Helvetica", "Arial",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";

  & p {
    display: inline;
    margin: 0;
  }

  & code {
    font-size: 0.95em;
  }
`

const Metadata = styled.span`
  margin-left: 16px;
  color: ${config.colors.postMetadata};
  font-size: 14px;
`

const Abstract = styled.div`
  line-height: 1.7;

  & p {
    margin: 0;
  }
`

interface PostItemProps {
  post: PostMetadata
}

export default function PostItem(props: PostItemProps): JSX.Element {
  return (
    <Link href={`/posts/${props.post.slug}`} passHref>
      <Container>
        <Title>
          <TitleText
            className="title"
            dangerouslySetInnerHTML={{ __html: props.post.transpiledTitle }}
          />
          <Metadata>{format(props.post.created, "yyyy-MM-dd")}</Metadata>
        </Title>
        {props.post.abstract && (
          <Abstract
            dangerouslySetInnerHTML={{ __html: props.post.transpiledAbstract }}
          />
        )}
      </Container>
    </Link>
  )
}
