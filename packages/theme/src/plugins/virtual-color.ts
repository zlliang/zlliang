import type { Plugin } from "vite"
import colors from "tailwindcss/colors"

/**
 * Marker placed inside `main.css`. The Vite plugin replaces it with a generated `@theme` block that
 * aliases `--color-primary-*` to the chosen Tailwind palette.
 */
const COLOR_MARKER = "/* @zlliang-theme-color */"

export function virtualColorPlugin(color: keyof typeof colors): Plugin {
  const block = buildColorBlock(color)

  return {
    name: "zlliang-theme:color",
    enforce: "pre",
    transform(code, id) {
      if (!isCss(id) || !code.includes(COLOR_MARKER)) return null
      return code.replace(COLOR_MARKER, block)
    },
  }
}

function isCss(id: string): boolean {
  const [path] = id.split("?", 1)
  return path.endsWith(".css")
}

function buildColorBlock(color: keyof typeof colors): string {
  if (typeof colors[color] === "string") {
    return ""
  }

  const declarations = Object.keys(colors[color])
    .map((shade) => `  --color-primary-${shade}: var(--color-${color}-${shade});`)
    .join("\n")

  return `@theme {\n${declarations}\n}\n`
}
