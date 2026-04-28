import type { Plugin } from "vite"

const ID = "virtual:zlliang-theme/slots"
const RESOLVED_ID = "\0" + ID

export type SlotKey = "headerSuffix" | "asideSuffix"

export const SLOT_KEYS: readonly SlotKey[] = ["headerSuffix", "asideSuffix"]

/**
 * Re-exports site-supplied Astro components as named exports of `virtual:zlliang-theme/slots`.
 * Each entry is the absolute path to an `.astro` file. Missing keys are exported as `null` so
 * theme components can render defaults without dynamic imports.
 */
export function virtualSlotsPlugin(slots: Partial<Record<SlotKey, string>>): Plugin {
  return {
    name: "zlliang-theme:virtual-slots",
    enforce: "pre",
    resolveId(id) {
      return id === ID ? RESOLVED_ID : null
    },
    load(id) {
      if (id !== RESOLVED_ID) return null
      const lines = SLOT_KEYS.map((key) => {
        const path = slots[key]
        return path
          ? `export { default as ${key} } from ${JSON.stringify(path)}`
          : `export const ${key} = null`
      })
      return lines.join("\n") + "\n"
    },
  }
}
