import { visit } from "unist-util-visit"
import { renderMermaid, THEMES } from "beautiful-mermaid"

import type { Root, Code, Html } from "mdast"

/** Render mermaid code blocks to SVG diagrams using `beautiful-mermaid`. */
export function remarkMermaid() {
  return async (tree: Root) => {
    const nodesToReplace: { node: Code; parent: Root; index: number }[] = []

    visit(tree, "code", (node: Code, index, parent) => {
      if (node.lang === "mermaid") {
        nodesToReplace.push({ node, parent: parent as Root, index: index as number })
      }
    })

    for (const { node, parent, index } of nodesToReplace) {
      const mermaidCode = node.value

      const lightSvg = await renderMermaid(mermaidCode)
      const darkSvg = await renderMermaid(mermaidCode)

      const htmlNode: Html = {
        type: "html",
        value: `<div class="mermaid-diagram"><div class="mermaid-light">${lightSvg}</div><div class="mermaid-dark">${darkSvg}</div></div>`,
      }

      parent.children.splice(index, 1, htmlNode)
    }
  }
}
