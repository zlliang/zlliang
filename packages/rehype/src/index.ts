import { visit } from "unist-util-visit"

import type { Root, Element } from "hast"

export { rehypeHeadingIds } from "@astrojs/markdown-remark"
export { default as rehypeAutolinkHeadings } from "rehype-autolink-headings"
export { default as rehypeExternalLinks } from "rehype-external-links"

/** Prefix footnote IDs with the file path to avoid collisions when multiple notes render on one page. */
export function rehypeFootnotePrefixes() {
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

/** Retrieve the `alt` property of the `img` element and append a caption element after it. */
export function rehypeImageCaptions() {
  return (tree: Root) => {
    visit(tree, "element", (node, _, parent) => {
      if (parent && node.tagName === "img" && node.properties.alt) {
        parent.children.push({
          type: "element",
          tagName: "span",
          properties: { class: "caption" },
          children: [{ type: "text", value: node.properties.alt as string }],
        })
      }
    })
  }
}

/** Add a copy button to fenced code blocks rendered as `pre > code`. */
export function rehypeCodeCopy() {
  const script = String.raw`if (!globalThis.__codeCopy) {
    globalThis.__codeCopy = true
    document.addEventListener("click", async (event) => {
      const button = event.target instanceof Element ? event.target.closest(".code-copy-button") : null
      if (!(button instanceof HTMLButtonElement)) return

      const code = button.parentElement?.querySelector("pre code")
      const text = code?.textContent?.replace(/\n$/, "")
      if (!text) return

      await navigator.clipboard.writeText(text).catch(() => {})
      if (!button.isConnected) return

      button.classList.add("copied")
      window.setTimeout(() => button.classList.remove("copied"), 2000)
    })
  }`

  return (tree: Root) => {
    let hasCodeBlock = false

    visit(tree, "element", (node: Element, index, parent) => {
      if (!parent || typeof index !== "number" || node.tagName !== "pre") return
      if (!node.children.some((child) => child.type === "element" && child.tagName === "code")) return

      hasCodeBlock = true
      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: { class: "code-copy" },
        children: [
          {
            type: "element",
            tagName: "button",
            properties: { type: "button", class: "code-copy-button", "aria-label": "Copy" },
            children: [
              { type: "element", tagName: "span", properties: { class: "code-copy-icon code-copy-copy", "aria-hidden": "true" }, children: [] },
              { type: "element", tagName: "span", properties: { class: "code-copy-icon code-copy-check", "aria-hidden": "true" }, children: [] },
            ]
          },
          node,
        ],
      }
    })

    if (!hasCodeBlock) return

    tree.children.unshift({
      type: "element",
      tagName: "script",
      properties: {},
      children: [{ type: "text", value: script }],
    })
  }
}
