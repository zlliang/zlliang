import { sequence } from "astro:middleware"

import { redirects } from "./redirects"
import { cache } from "./cache"

export {
  redirects,
  cache,
}

export const onRequest = sequence(
  cache,
  redirects,
)
