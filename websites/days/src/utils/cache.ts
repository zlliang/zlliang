/**
 * Shared cache policy for public SSR HTML pages on Vercel.
 *
 * `max-age=0` means browsers must revalidate before reuse.
 * `s-maxage=3600` allows shared caches such as the Vercel CDN to cache the response for 1 hour.
 * `stale-while-revalidate=86400` allows the CDN to keep serving a stale response for up to 1 day while revalidating in the background.
 *
 * Vercel docs: https://vercel.com/docs/headers/cache-control-headers
 */
export const SSR_CACHE_CONTROL = "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
