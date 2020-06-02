import { Global as GlobalStyle, css } from "@emotion/core";

import Page from "../components/layout";
import Header from "../components/index/header";
import Bio from "../components/index/bio";
import Socials from "../components/index/socials";
import Posts from "../components/index/posts";

import Markdown from "../components/markdown";
import { content } from "./_index.md";
import { mediaQuery, imageHost } from "../utils/config";

const globalCSS = css`
  /* Background */
  body {
    background-image: url("${imageHost}/background.svg");
    background-repeat: no-repeat;
  }
  ${mediaQuery.phone} {
    body {
      background-size: 120%;
    }
  }
`;

export default function Index() {
  return (
    <Page isIndex>
      <GlobalStyle styles={globalCSS} />
      <Header />
      <Bio />
      <Socials />
      <Posts />
      <Markdown content={content} />
    </Page>
  );
}
