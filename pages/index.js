import Page from "../components/layout";
import Header from "../components/index/header";
import Bio from "../components/index/bio";
import Posts from "../components/index/posts";

import Markdown from "../components/markdown";
import { content } from "./_index.md";

export default function Index() {
  return (
    <Page isIndex>
      <Header />
      <Bio />
      <Posts />
      <Markdown content={content} />
    </Page>
  );
}
