import { primaryColorShades } from "../config"

import type { PrimaryColor } from "../config"

/**
 * Marker placed inside `main.css`. The Vite plugin replaces it with a
 * generated `@theme` block that aliases `--color-primary-*` to the chosen
 * Tailwind palette.
 */
const PRIMARY_COLOR_MARKER = "/* @zlliang-theme-primary */"

/** Minimal Vite plugin shape, kept local to avoid a `vite` dependency. */
export interface ThemeVitePlugin {
  name: string
  enforce?: "pre" | "post"
  resolveId?(id: string): string | null
  load?(id: string): string | null
  transform?(code: string, id: string): string | null
}

export function primaryColorPlugin(primaryColor: PrimaryColor): ThemeVitePlugin {
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
  const declarations = primaryColorShades
    .map((shade) => `  --color-primary-${shade}: var(--color-${primaryColor}-${shade});`)
    .join("\n")

  return `@theme {\n${declarations}\n}\n`
}
