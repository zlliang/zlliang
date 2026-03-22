import { sequence } from "astro:middleware"

import { redirects } from "./redirects"
import { cache } from "./cache"

export const onRequest = sequence(
  redirects,
  cache,
)
