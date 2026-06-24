import { fileURLToPath } from "node:url"

import { defineMdastPlugin, defineHastPlugin } from "satteri"

/** Support titles for fenced code blocks. */
export const codeTitles = defineMdastPlugin({
  name: "code-titles",
  code(node, ctx) {
    const rawLang = node.lang ?? ""
    const colon = rawLang.indexOf(":")
    if (colon <= 0) return

    const lang = rawLang.slice(0, colon)
    const title = rawLang.slice(colon + 1)
    ctx.setProperty(node, "lang", lang)
    ctx.insertBefore(node, {
      type: "html",
      value: `<div class="satteri-code-title">${title}</div>`,
    })
  },
})

/**
 * Prefix footnote IDs and backref hrefs with the document slug so multiple notes rendered on one
 * page can't collide.
 */
export const footnotePrefixes = defineHastPlugin({
  name: "footnote-prefixes",
  element: {
    filter: ["a", "li"],
    visit(node, ctx) {
      const filePath = ctx.fileURL ? fileURLToPath(ctx.fileURL) : ""
      const slug = filePath.replace(/^.*\/content\//, "").replace(/\.mdx?$/, "").replace(/\//g, "-")
      if (!slug) return

      const id = node.properties?.id
      if (typeof id === "string" && id.startsWith("user-content-fn")) {
        ctx.setProperty(node, "id", `${slug}-${id}`)
      }

      const href = node.properties?.href
      if (typeof href === "string" && href.startsWith("#user-content-fn")) {
        ctx.setProperty(node, "href", `#${slug}-${href.slice(1)}`)
      }
    },
  },
})

/**
 * Append the image `alt` text as a caption after the image, matching the
 * previous rehype plugin's push-to-end-of-parent behavior.
 */
export const imageCaptions = defineHastPlugin({
  name: "image-captions",
  element: {
    filter: ["img"],
    visit(node, ctx) {
      const alt = node.properties?.alt
      if (typeof alt !== "string" || !alt) return

      const parent = ctx.parent(node)
      if (!parent) return

      ctx.appendChild(parent, {
        type: "element",
        tagName: "span",
        properties: { class: "caption" },
        children: [{ type: "text", value: alt }],
      })
    },
  },
})

/**
 * Wrap standalone images in a link to the dedicated image viewer page. Images already inside a link
 * are left alone.
 */
export const imageLinks = defineHastPlugin({
  name: "image-links",
  element: {
    filter: ["img"],
    visit(node, ctx) {
      const parent = ctx.parent(node)
      if (parent?.type === "element" && parent.tagName === "a") return

      ctx.wrapNode(node, {
        type: "element",
        tagName: "a",
        properties: { class: "image-link", href: "#" },
        children: [],
      })
    },
  },
})

/** Add a copy button around Shiki-highlighted code blocks. */
export const codeCopy = defineHastPlugin({
  name: "code-copy",
  raw(node) {
    const value = node.value
    if (typeof value !== "string" || !value.startsWith("<pre") || !value.includes("astro-code")) return

    const button =
      `<button type="button" class="code-copy-button" aria-label="Copy">` +
      `<span class="code-copy-icon code-copy-copy" aria-hidden="true"></span>` +
      `<span class="code-copy-icon code-copy-check" aria-hidden="true"></span>` +
      `</button>`

    return { type: "raw", value: `<div class="code-copy">${button}${value}</div>` }
  },
})
