import { Hono } from 'hono'
import { siteURL, apiBasePath } from '@/utils/site'

const app = new Hono().basePath(apiBasePath)

app.post('/isr-prerender', async (c) => {
  const bypassToken = c.req.header('x-prerender-revalidate') || ''
  const path = c.req.query('path') || '/'
  
  await fetch(`${siteURL}${path}`, { headers: { 'x-prerender-revalidate': bypassToken } })
  return c.json({ message: 'Prerendered successfully' }, 200)
})

export default app
