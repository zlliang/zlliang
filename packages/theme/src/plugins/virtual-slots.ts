import fs from "node:fs"
import path from "node:path"

import type { Plugin } from "vite"

const ID = "virtual:zlliang-theme/slots"
const RESOLVED_ID = "\0" + ID

const SLOT_NAMES = ["HeaderEnd", "AsideStart", "AsideEnd"] as const

/**
 * Re-exports site-supplied Astro components from `<siteRoot>/src/theme/<Name>.astro` as named
 * exports of `virtual:zlliang-theme/slots`. Missing files are exported as `null` so theme
 * components can render defaults without dynamic imports.
 */
export function virtualSlotsPlugin(siteRoot: string): Plugin {
  return {
    name: "zlliang-theme:virtual-slots",
    enforce: "pre",
    resolveId(id) {
      return id === ID ? RESOLVED_ID : null
    },
    load(id) {
      if (id !== RESOLVED_ID) return null
      const lines = SLOT_NAMES.map((name) => {
        const filePath = path.join(siteRoot, "src", "theme", `${name}.astro`)
        return fs.existsSync(filePath)
          ? `export { default as ${name} } from ${JSON.stringify(filePath)}`
          : `export const ${name} = null`
      })
      return lines.join("\n") + "\n"
    },
  }
}
