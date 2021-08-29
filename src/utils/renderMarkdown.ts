import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeHighlight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"
import haskell from "highlight.js/lib/languages/haskell"

export function renderMarkdown(markdown: string): string {
  const processor = remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight, { languages: { haskell } })
    .use(rehypeStringify)

  const result = processor.processSync(markdown)
  return result.toString()
}
