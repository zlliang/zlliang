import { shades } from "../styles"

import type { PrimaryColor } from "../styles"
import type { Plugin } from "vite"

/**
 * Marker placed inside `main.css`. The Vite plugin replaces it with a
 * generated `@theme` block that aliases `--color-primary-*` to the chosen
 * Tailwind palette.
 */
const PRIMARY_COLOR_MARKER = "/* @zlliang-theme-primary */"

export function virtualPrimaryColorPlugin(primaryColor: PrimaryColor): Plugin {
  const themeBlock = buildPrimaryColorThemeBlock(primaryColor)

  return {
    name: "zlliang-theme:primary-color",
    enforce: "pre",
    transform(code, id) {
      if (!isCssId(id) || !code.includes(PRIMARY_COLOR_MARKER)) return null
      return code.replace(PRIMARY_COLOR_MARKER, themeBlock)
    },
  }
}

function isCssId(id: string): boolean {
  const [path] = id.split("?", 1)
  return path.endsWith(".css")
}

function buildPrimaryColorThemeBlock(primaryColor: PrimaryColor): string {
  const declarations = shades
    .map((shade) => `  --color-primary-${shade}: var(--color-${primaryColor}-${shade});`)
    .join("\n")

  return `@theme {\n${declarations}\n}\n`
}
