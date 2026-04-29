import type { Plugin } from "vite"

const ID = "virtual:zlliang-theme/config"
const RESOLVED_ID = "\0" + ID

export function virtualConfigPlugin(serializableConfig: string): Plugin {
  return {
    name: "zlliang-theme:virtual-config",
    enforce: "pre",
    resolveId(id) {
      return id === ID ? RESOLVED_ID : null
    },
    load(id) {
      if (id !== RESOLVED_ID) return null
      return `export default ${serializableConfig}`
    },
  }
}
