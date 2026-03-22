import { defineMiddleware } from "astro:middleware"

/**
 * Shared cache policy for public SSR HTML pages on Vercel.
 *
 * - `max-age=120` lets browsers reuse a response for 2 minutes before revalidating.
 * - `s-maxage=7200` lets shared caches such as the Vercel CDN cache the response for 2 hours.
 * - `stale-while-revalidate=86400` lets the CDN keep serving a stale response for up to 1 day
 * while it refreshes the page in the background.
 *
 * Vercel docs: https://vercel.com/docs/headers/cache-control-headers
 */
const CACHE_CONTROL = "public, max-age=120, s-maxage=7200, stale-while-revalidate=86400"

/** Add the shared cache policy to SSR responses. */
export const cache = defineMiddleware(async (_, next) => {
  const response = await next()
  response.headers.set("Cache-Control", CACHE_CONTROL)

  return response
})
