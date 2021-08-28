import Head from "next/head"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"

import config from "@/configs"

import type { ReactNode } from "react"

const externalCssLinks = [
  "https://unpkg.com/sanitize.css",
  "https://unpkg.com/sanitize.css/assets.css",
  "https://unpkg.com/sanitize.css/reduce-motion.css",
  "https://unpkg.com/highlight.js/styles/github.css",
  "https://rsms.me/inter/inter.css",
]

const globalStyles = css`
  /* Browser behaviors */
  html {
    cursor: auto;
  }

  /* Typography */
  html {
    font-size: 15px;
    line-height: 2;
    font-feature-settings: "calt", "case";
    font-family: "Inter", system-ui, -apple-system, "BlinkMacSystemFont",
      "Segoe UI", "Roboto", "Ubuntu", "Helvetica", "Arial", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }
  @supports (font-variation-settings: normal) {
    html {
      font-family: "Inter var", sans-serif;
    }
  }

  code,
  kbd,
  pre,
  samp {
    font-size: 14px;
    line-height: 1.6;
    word-break: normal;
    font-family: ui-monospace, "SFMono-Regular", "SF Mono", "Menlo", "Consolas",
      "Roboto Mono", "Ubuntu Monospace", "Liberation Mono", monospace,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }

  /* Base colors */
  body {
    color: ${config.colors.text};
  }

  /* Content styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    & code {
      font-size: 0.95em;
    }
  }

  a {
    text-decoration: none;
    color: ${config.colors.link};
    border-color: transparent;
    transition: border-color 0.15s, color 0.15s;

    &:hover {
      border-bottom: 2px solid ${config.colors.linkHoverAux};
      color: ${config.colors.linkHover};
    }

    &:visited {
      color: ${config.colors.linkVisited};
    }

    &:visited:hover {
      border-bottom: 2px solid ${config.colors.linkVisitedHoverAux};
      color: ${config.colors.linkVisitedHover};
    }
  }

  pre code.hljs {
    border-radius: 6px;
    background-color: ${config.colors.codeBlockBackground};
  }
  pre ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  pre ::-webkit-scrollbar-thumb {
    background-color: ${config.colors.codeScroll};
    border: 4px solid ${config.colors.codeBlockBackground};
    border-radius: 8px;
  }
  pre ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  p img {
    display: block;
    margin: 0 auto;

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
`

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
`

interface LayoutProps {
  title?: string
  children: ReactNode
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <base target="_blank" />
        <link rel="preconnect" href="https://fonts.loli.net" />
        {externalCssLinks.map((link) => (
          <link key={link} href={link} rel="stylesheet" />
        ))}
        <title>
          {props.title
            ? `${props.title} | ${config.siteTitle}`
            : config.siteTitle}
        </title>
      </Head>
      <Global styles={globalStyles} />
      <Container>{props.children}</Container>
    </>
  )
}
