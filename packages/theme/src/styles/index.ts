import colors from "tailwindcss/colors"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { ClassValue } from "clsx"

/** Compose classnames */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const shades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const

type PrimaryColorScale = Record<typeof shades[number], string>

export type PrimaryColor = {
  [Color in keyof typeof colors]: typeof colors[Color] extends PrimaryColorScale ? Color : never
}[keyof typeof colors]

function isPrimaryColorScale(value: unknown): value is PrimaryColorScale {
  if (!value || typeof value !== "object") return false

  const scale = value as Record<string, unknown>
  return shades.every((shade) => typeof scale[shade] === "string")
}

export const primaryColors = Object.keys(colors).filter((color): color is PrimaryColor => isPrimaryColorScale(colors[color as keyof typeof colors]))
