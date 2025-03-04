import { Hono } from 'hono'
import { v4 as uuid } from 'uuid'
import { isEqual } from 'lodash-es'
import { siteURL, apiBasePath } from '@/utils/site'
import { createNotionClient } from '@/utils/notion'
import { createGithubClient } from '@/utils/github'

const app = new Hono().basePath(apiBasePath)

app.post('/isr-prerender', async (c) => {
  const bypassToken = c.req.header('x-prerender-revalidate') || ''
  const path = c.req.query('path') || '/'
  
  await fetch(`${siteURL}${path}`, { headers: { 'x-prerender-revalidate': bypassToken } })
  return c.text('200 OK', 200)
})

app.post('/notion-upload-images', async (c) => {
  const databaseId = c.req.query('databaseId')
  if (!databaseId) {
    return c.text('400 Bad Request', 400)
  }

  const notion = createNotionClient()
  const github = createGithubClient()

  async function getImageContent(url: string) {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    const uint8Array = new Uint8Array(arrayBuffer)
    const binaryString = uint8Array.reduce((data, byte) => data + String.fromCharCode(byte), '')

    return btoa(binaryString)
  }

  async function uploadImage(currentUrl: string) {
    const content = await getImageContent(currentUrl)
    const id = uuid()
    const path = `images/${id}.jpg`

    await github.request('PUT /repos/{owner}/{repo}/contents/{path}', {
      owner: 'zlliang',
      repo: 'image-hosting',
      path,
      content,
      committer: {
        name: 'Zilong Liang',
        email: 'zlliang96@outlook.com',
      },
      message: 'Auto commit'
    })

    return `http://cdn.jsdelivr.net/gh/zlliang/image-hosting/${path}`
  }

  async function handlePage(page: any, index: number, length: number) {
    const process = `${index+1}/${length}`
    console.log(`Handling ${process}`)

    const currentProperties: Record<string, any> = (page as any).properties
    const properties: Record<string, any> = {}
    for (const [key, value] of Object.entries(currentProperties)) {
      if (value.type !== 'files') {
        properties[key] = value
        continue
      }

      const currentFiles: any[] = value.files || []
      const files = await Promise.all(currentFiles.map(async (item) => {
        const name = (item.name as string).toLowerCase()
        if ((!name.endsWith('jpeg') && !name.endsWith('jpg')) || item.type !== 'file' || !item.file.url) {
          return item
        }

        const currentUrl = item.file.url
        console.log(`Uploading ${process}`)
        const url = await uploadImage(currentUrl)

        return {
          name,
          type: 'external',
          external: { url },
        }
      }))

      properties[key] = { ...value, files }
    }

    if (!isEqual(currentProperties, properties)) {
      console.log(`Rewriting ${process}`)
      await notion.pages.update({
        page_id: page.id,
        properties
      })
    }
  }

  const { results: data = [] } = await notion.databases.query({
    database_id: databaseId,
  })

  await Promise.all(data.map((page: any, index) => handlePage(page, index, data.length)))

  return c.text('200 OK', 200)
})

export default app
