import { visit } from "unist-util-visit"

import type { Root, Element } from "hast"

export { rehypeHeadingIds } from "@astrojs/markdown-remark"
export { default as rehypeAutolinkHeadings } from "rehype-autolink-headings"

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

/** Wrap standalone images in links to the dedicated image viewer page. */
export function rehypeImageLinks() {
  const script = String.raw`if (!globalThis.__imageLink) {
    globalThis.__imageLink = true
    document.addEventListener("click", (event) => {
      const link = event.target instanceof Element ? event.target.closest("a.image-link") : null
      if (!link) return
      event.preventDefault()

      const img = link.querySelector("img")
      if (!img || !img.src) return

      try {
        const imgUrl = new URL(img.src)
        if (imgUrl.origin !== window.location.origin) return

        const params = new URLSearchParams()
        params.set("src", imgUrl.pathname + imgUrl.search)
        const caption = img.alt
        if (caption) params.set("caption", caption)
        params.set("from", window.location.pathname + window.location.search)

        window.location.href = "/image?" + params.toString()
      } catch {}
    })
  }`

  return (tree: Root) => {
    let hasImage = false

    visit(tree, "element", (node: Element, index, parent) => {
      if (!parent || typeof index !== "number" || node.tagName !== "img") return
      if (parent.type === "element" && parent.tagName === "a") return

      hasImage = true
      parent.children[index] = {
        type: "element",
        tagName: "a",
        properties: { class: "image-link", href: "#" },
        children: [node],
      }
    })

    if (!hasImage) return

    tree.children.unshift({
      type: "element",
      tagName: "script",
      properties: {},
      children: [{ type: "text", value: script }],
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
