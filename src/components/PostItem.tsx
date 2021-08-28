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

const Title = styled.span`
  padding-bottom: 4px;
  border-color: transparent;
  color: ${config.colors.link};
  transition: border-color 0.15s, color 0.15s;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  font-family: "Raleway", "Inter", system-ui, -apple-system,
    "BlinkMacSystemFont", "Segoe UI", "Roboto", "Ubuntu", "Helvetica", "Arial",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
`

const Metadata = styled.span`
  margin-left: 16px;
  color: ${config.colors.postMetadata};
  font-size: 14px;
`

const Abstract = styled.div`
  line-height: 1.7;
`

interface PostItemProps {
  post: PostMetadata
}

export default function PostItem(props: PostItemProps): JSX.Element {
  return (
    <Link href={`/posts/${props.post.slug}`} passHref>
      <Container>
        <div>
          <Title className="title">{props.post.title}</Title>
          <Metadata>{format(props.post.created, "yyyy-MM-dd")}</Metadata>
        </div>
        {props.post.abstract && <Abstract>{props.post.abstract}</Abstract>}
      </Container>
    </Link>
  )
}
