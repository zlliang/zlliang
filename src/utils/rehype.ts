import { visit } from "unist-util-visit"

import type { Root, Element } from "hast"

/** Prefix footnote IDs with the file path to avoid collisions when multiple notes render on one page. */
export function rehypeFootnotePrefix() {
  return (tree: Root, file: { history: string[] }) => {
    const filePath = file.history[0] || ""
    const slug = filePath.replace(/^.*\/content\//, "").replace(/\.mdx?$/, "").replace(/\//g, "-")
    if (!slug) return

    visit(tree, "element", (node: Element) => {
      const id = node.properties?.id
      if (typeof id === "string" && id.startsWith("user-content-fn")) {
        node.properties.id = `${slug}-${id}`
      }

      const href = node.properties?.href
      if (typeof href === "string" && href.startsWith("#user-content-fn")) {
        node.properties.href = `#${slug}-${href.slice(1)}`
      }
    })
  }
}


/** Retrieve the `title` property of the `img` element and append a caption element after it. */
export function rehypeImageCaption() {
  return (tree: Root) => {
    visit(tree, "element", (node, _, parent) => {
      if (parent && node.tagName === "img" && node.properties.title) {
        parent.children.push({
          type: "element",
          tagName: "span",
          properties: { class: "caption" },
          children: [{ type: "text", value: node.properties.title as string }],
        })
      }
    })
  }
}
