import Head from "next/head"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"

import Footer from "@/components/Footer"
import config from "@/configs"

import type { ReactNode } from "react"

const externalCssLinks = [
  "https://unpkg.com/sanitize.css",
  "https://unpkg.com/sanitize.css/assets.css",
  "https://unpkg.com/sanitize.css/reduce-motion.css",
  "https://unpkg.com/highlight.js/styles/github.css",
  "https://rsms.me/inter/inter.css",
  "https://fonts.loli.net/css2?family=Raleway:ital,wght@0,700;1,800&display=swap",
]

const faviconLinks = [
  {
    href: "/images/favicon.png",
    rel: "icon",
  },
  {
    href: "/images/favicon-touch.jpg",
    rel: "apple-touch-icon",
    sizes: "180x180",
  },
]

const globalStyles = css`
  /* Browser behaviors */
  html {
    cursor: auto;
  }

  /* Typography */
  html {
    font-size: 15px;
    line-height: 1.9;
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
    line-height: 1.6;
    font-family: "Raleway", "Inter", system-ui, -apple-system,
      "BlinkMacSystemFont", "Segoe UI", "Roboto", "Ubuntu", "Helvetica", "Arial",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";

    & code {
      font-size: 0.95em;
    }
  }

  hr {
    height: 2px;
    border: none;
    background-color: ${config.colors.splitLine};
  }

  a {
    text-decoration: none;
    border-color: transparent;
    color: ${config.colors.link};
    transition: border-color 0.15s, color 0.15s;

    &:hover {
      border-bottom: 2px solid ${config.colors.linkHoverBorder};
      color: ${config.colors.linkHover};
    }
  }

  pre code.hljs {
    background-color: ${config.colors.codeBlockBackground};
  }

  p,
  p code,
  blockquote {
    text-align: justify;
    overflow-wrap: break-word;
    word-break: break-all;
    hyphens: auto;
  }

  p img {
    display: block;
    margin: 0 auto;

    &:not(:last-of-type) {
      margin-bottom: 1em;
    }
  }

  blockquote {
    font-style: italic;
    margin: 0;
    padding-left: 16px;
    border-left: 5px solid ${config.colors.splitLine};

    &,
    & * {
      color: ${config.colors.secondary};
    }

    & pre code {
      font-style: normal;
    }
  }

  strong {
    font-weight: 600;
  }

  input[type="checkbox"] {
    margin-right: 8px;
  }

  table {
    margin: 0 auto;
    tbody tr:nth-of-type(odd) {
      background-color: ${config.colors.codeBlockBackground};
    }
    th {
      font-weight: 600;
    }
    th,
    td {
      padding: 6px 12px;
      &,
      & * {
        line-height: 1.6;
      }
    }
  }
`

const Container = styled.div`
  max-width: ${config.maxWidth};
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
        {faviconLinks.map((favicon) => (
          <link key={favicon.rel} {...favicon} />
        ))}
        <title>
          {props.title
            ? `${props.title}｜${config.siteTitle}`
            : config.siteTitle}
        </title>
      </Head>
      <Global styles={globalStyles} />
      <Container>
        {props.children}
        <Footer />
      </Container>
    </>
  )
}