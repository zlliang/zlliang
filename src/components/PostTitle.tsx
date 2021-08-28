import styled from "@emotion/styled"
import { format } from "date-fns"

import config from "@/configs"

import type { ReactNode } from "react"

const Container = styled.div`
  margin-bottom: 32px;
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: 700;
  line-height: 1.3em;
`

const MetadataList = styled.div`
  font-size: 14px;
`

const Metadata = styled.span`
  color: ${config.colors.postAux};
`

interface PostTitleProps {
  created: number
  updated?: number
  children: ReactNode
}

export default function PostTitle(props: PostTitleProps): JSX.Element {
  return (
    <Container>
      <Title {...props}>{props.children}</Title>
      <MetadataList>
        <Metadata>创建于 {format(props.created, "yyyy-MM-dd")}</Metadata>
        {props.updated && (
          <Metadata> ・ 更新于 {format(props.updated, "yyyy-MM-dd")}</Metadata>
        )}
      </MetadataList>
    </Container>
  )
}
