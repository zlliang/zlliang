import type { Plugin } from "vite"

const ID = "virtual:zlliang-theme/logo"
const RESOLVED_ID = "\0" + ID

export function virtualLogoPlugin(logoImportPath: string): Plugin {
  return {
    name: "zlliang-theme:virtual-logo",
    enforce: "pre",
    resolveId(id) {
      return id === ID ? RESOLVED_ID : null
    },
    load(id) {
      if (id !== RESOLVED_ID) return null
      return `import logo from ${JSON.stringify(logoImportPath)}\nexport default logo`
    },
  }
}
