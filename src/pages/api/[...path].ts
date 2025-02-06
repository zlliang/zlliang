import app from '@/api'

import type { APIRoute } from 'astro'

export const prerender = false

export const ALL: APIRoute = (context) => app.fetch(context.request)
