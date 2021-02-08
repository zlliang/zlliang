---
title: Here is the Thing
created: 2021-02-08
---

```rust
use std::borrow::Cow::{self, Borrowed, Owned};

use rustyline::completion::{Completer, FilenameCompleter, Pair};
use rustyline::config::OutputStreamType;
use rustyline::error::ReadlineError;
use rustyline::highlight::{Highlighter, MatchingBracketHighlighter};
use rustyline::hint::{Hinter, HistoryHinter};
use rustyline::validate::{self, MatchingBracketValidator, Validator};
use rustyline::{Cmd, CompletionType, Config, Context, EditMode, Editor, KeyEvent};
use rustyline_derive::Helper;

#[derive(Helper)]
struct MyHelper {
    completer: FilenameCompleter,
    highlighter: MatchingBracketHighlighter,
    validator: MatchingBracketValidator,
    hinter: HistoryHinter,
    colored_prompt: String,
}

impl Completer for MyHelper {
    type Candidate = Pair;

    fn complete(
        &self,
        line: &str,
        pos: usize,
        ctx: &Context<'_>,
    ) -> Result<(usize, Vec<Pair>), ReadlineError> {
        self.completer.complete(line, pos, ctx)
    }
}

impl Hinter for MyHelper {
    type Hint = String;

    fn hint(&self, line: &str, pos: usize, ctx: &Context<'_>) -> Option<String> {
        self.hinter.hint(line, pos, ctx)
    }
}

impl Highlighter for MyHelper {
    fn highlight_prompt<'b, 's: 'b, 'p: 'b>(
        &'s self,
        prompt: &'p str,
        default: bool,
    ) -> Cow<'b, str> {
        if default {
            Borrowed(&self.colored_prompt)
        } else {
            Borrowed(prompt)
        }
    }

    fn highlight_hint<'h>(&self, hint: &'h str) -> Cow<'h, str> {
        Owned("\x1b[1m".to_owned() + hint + "\x1b[m")
    }

    fn highlight<'l>(&self, line: &'l str, pos: usize) -> Cow<'l, str> {
        self.highlighter.highlight(line, pos)
    }

    fn highlight_char(&self, line: &str, pos: usize) -> bool {
        self.highlighter.highlight_char(line, pos)
    }
}

impl Validator for MyHelper {
    fn validate(
        &self,
        ctx: &mut validate::ValidationContext,
    ) -> rustyline::Result<validate::ValidationResult> {
        self.validator.validate(ctx)
    }

    fn validate_while_typing(&self) -> bool {
        self.validator.validate_while_typing()
    }
}

// To debug rustyline:
// RUST_LOG=rustyline=debug cargo run --example example 2> debug.log
fn main() -> rustyline::Result<()> {
    env_logger::init();
    let config = Config::builder()
        .history_ignore_space(true)
        .completion_type(CompletionType::List)
        .edit_mode(EditMode::Emacs)
        .output_stream(OutputStreamType::Stdout)
        .build();
    let h = MyHelper {
        completer: FilenameCompleter::new(),
        highlighter: MatchingBracketHighlighter::new(),
        hinter: HistoryHinter {},
        colored_prompt: "".to_owned(),
        validator: MatchingBracketValidator::new(),
    };
    let mut rl = Editor::with_config(config);
    rl.set_helper(Some(h));
    rl.bind_sequence(KeyEvent::alt('N'), Cmd::HistorySearchForward);
    rl.bind_sequence(KeyEvent::alt('P'), Cmd::HistorySearchBackward);
    if rl.load_history("history.txt").is_err() {
        println!("No previous history.");
    }
    let mut count = 1;
    loop {
        let p = format!("{}> ", count);
        rl.helper_mut().expect("No helper").colored_prompt = format!("\x1b[1;32m{}\x1b[0m", p);
        let readline = rl.readline(&p);
        match readline {
            Ok(line) => {
                rl.add_history_entry(line.as_str());
                println!("Line: {}", line);
            }
            Err(ReadlineError::Interrupted) => {
                println!("CTRL-C");
                break;
            }
            Err(ReadlineError::Eof) => {
                println!("CTRL-D");
                break;
            }
            Err(err) => {
                println!("Error: {:?}", err);
                break;
            }
        }
        count += 1;
    }
    rl.append_history("history.txt")
}
```

```js
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Global as GlobalStyle, css } from '@emotion/react'
import styled from '@emotion/styled'

import Header from './header'
import Footer from './footer'

import { siteTitle, maxWidth, mediaQuery, color } from '../utils/config'

const cssLinks = [
  'https://rsms.me/inter/inter.css',
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Raleway:ital,wght@0,700;1,800&display=swap'
]

const faviconLinks = [
  {
    href: '/favicons/favicon.jpg',
    rel: 'icon'
  },
  {
    href: '/favicons/favicon-touch.jpg',
    rel: 'apple-touch-icon',
    sizes: '180x180'
  }
]

const globalCSS = css`
  /* DEBUG */
  /* * {
    border: 0.1px solid blue;
  } */

  /* Typography */
  html * {
    line-height: 1.6em;
    color: ${color.gray1};
    font-family: 'Inter', sans-serif;
  }
  @supports (font-variation-settings: normal) {
    html * {
      line-height: 1.6em;
      color: ${color.gray1};
      font-family: 'Inter var', sans-serif;
    }
  }
  pre,
  code,
  code * {
    font-size: 14px;
    line-height: 1.5em;
    font-family: 'IBM Plex Mono', 'Roboto Mono', 'Menlo', 'Consolas', monospace;
  }
  ${mediaQuery.phone} {
    p code {
      font-size: 13px;
    }
  }

  /* Background color */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: ${color.gray1};
    }
    html * {
      color: ${color.gray5};
    }
  }

  /* Font size */
  ${mediaQuery.phone} {
    html {
      font-size: 14px;
    }
  }
  ${mediaQuery.desktop} {
    html {
      font-size: 16px;
    }
  }

  /* Selection */
  html *::selection {
    background-color: ${color.cyan};
    color: ${color.gray1};
  }
  @media (prefers-color-scheme: dark) {
    html *::selection {
      background-color: ${color.gray2};
      color: ${color.gray6};
    }
  }

  /* Content style */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 32px;
    margin-bottom: 16px;
    line-height: 1.2em;
    font-family: 'Raleway', 'Inter', 'system-ui', -apple-system, sans-serif;
    font-weight: 700;
  }
  hr {
    margin: 16px 0;
    border: none;
    height: 1.5px;
    background-color: ${color.gray5};
  }
  blockquote {
    font-style: italic;
    margin-left: 0;
    margin-right: 0;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border-left: 5px solid ${color.gray5};
  }
  blockquote * {
    color: ${color.gray3};
  }
  strong {
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: ${color.blue};
  }
  a:hover {
    text-decoration: underline;
    color: ${color.lightBlue};
  }
  @media (prefers-color-scheme: dark) {
    hr {
      background-color: ${color.gray3};
    }
    blockquote {
      border-color: ${color.gray3};
    }
    blockquote * {
      color: ${color.gray4};
    }

    a {
      color: ${color.darkModeBlue};
    }
    a:hover {
      color: ${color.darkModeLightBlue};
    }
  }

  ul {
    padding-inline-start: 18px;
  }
  li {
    margin-block-start: 0.1rem;
    margin-block-end: 0.1rem;
  }

  input[type='checkbox'] {
    margin-right: 8px;
  }

  code {
    border: 1px solid ${color.gray5};
    border-radius: 3px;
    padding: 0 4px;
    color: ${color.gray2};
  }
  pre code {
    padding: 0;
    border: none;
    color: ${color.gray1};
  }
  pre {
    position: relative;
    border: 1px solid ${color.gray5};
    border-radius: 8px;
    padding: 14px 20px;
    overflow-x: auto;
  }
  @media (prefers-color-scheme: dark) {
    code {
      border-color: ${color.gray5};
      color: ${color.gray5};
    }
    pre code {
      color: ${color.gray5};
    }
    pre {
      border: 1px solid ${color.gray2};
    }
    pre .hljs {
      background-color: ${color.gray1};
    }
    pre .hljs-comment {
      color: ${color.gray3};
    }
  }

  /* Customized components */
  tag {
    padding: 0.1em 0.3em;
    font-size: 0.7em;
    color: ${color.gray3};
    border: 1px solid ${color.gray3};
    border-radius: 3px;
    margin-inline-start: 0.4em;
  }
  span.desc {
    font-size: 0.9em;
    color: ${color.gray3};
  }
  @media (prefers-color-scheme: dark) {
    tag {
      border-color: ${color.gray4};
      color: ${color.gray4};
    }
    span.desc {
      color: ${color.gray4};
    }
  }
`

const PageContainer = styled.div`
  max-width: ${maxWidth}px;
  margin: 0 auto;
  padding: 0 16px;
`

export default function Page(props) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <base target='_blank' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {faviconLinks.map((favicon) => (
          <link key={favicon.rel} {...favicon} />
        ))}
        {cssLinks.map((link) => (
          <link key={link} rel='stylesheet' href={link} />
        ))}
        <title>
          {props.title ? `${props.title} | ${siteTitle}` : siteTitle}
        </title>
      </Head>
      <GlobalStyle styles={globalCSS} />
      <PageContainer>
        {props.isIndex || <Header />}
        {props.children}
        <Footer />
      </PageContainer>
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string,
  isIndex: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Page.defaultProps = {
  isIndex: false
}
```
