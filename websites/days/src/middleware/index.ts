import { sequence } from "astro:middleware"

import { redirects } from "./redirects"

export const onRequest = sequence(
  redirects,
)
