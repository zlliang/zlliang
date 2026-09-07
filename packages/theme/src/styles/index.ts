import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { ClassValue } from "clsx"

/** Composes classnames */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
