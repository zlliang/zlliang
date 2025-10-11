import type { Root } from 'hast'

import { visit } from 'unist-util-visit'

/** Retrieve the `title` property of the `img` element and append a caption element after it. */
export function rehypeImageCaption() {
  return (tree: Root) => {
    visit(tree, 'element', (node, index, parent) => {
      if (parent && node.tagName === 'img' && node.properties.title) {
        parent.children.push({
          type: 'element',
          tagName: 'span',
          properties: { class: 'caption' },
          children: [{ type: 'text', value: node.properties.title as string }],
        })
      }
    })
  }
}
