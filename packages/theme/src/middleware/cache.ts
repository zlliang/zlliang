import { defineMiddleware } from "astro:middleware"

/** Default cache policies for SSR responses. See [Vercel docs](https://vercel.com/docs/headers/cache-control-headers). */
function getDefaultCacheControl(status: number) {
  if (status >= 200 && status < 300) return "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400"
  if (status === 301 || status === 308) return "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800"
  if (status === 404) return "public, max-age=0, s-maxage=60"
  if (status === 410) return "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400"

  return "no-store"
}

/** Add a default cache policy unless the page has already set one. */
export const cache = defineMiddleware(async (_, next) => {
  if (import.meta.env.DEV) return next()

  const response = await next()
  if (!response.headers.has("Cache-Control")) {
    response.headers.set("Cache-Control", getDefaultCacheControl(response.status))
  }

  return response
})

export const onRequest = cache
