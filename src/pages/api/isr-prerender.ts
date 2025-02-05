import { siteURL } from '@/utils/site'

import type { APIRoute } from 'astro'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  const bypassToken = import.meta.env.ISR_BYPASS_TOKEN
  const path = request.headers.get('x-prerender-path') || '/'
  
  const response = await fetch(`${siteURL}${path}`, { headers: { 'x-prerender-revalidate': bypassToken } })
  return response
}
