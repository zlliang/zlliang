import { Client } from '@notionhq/client'

/** Create a Notion client */
export function createNotionClient() {
  const notion = new Client({
    auth: import.meta.env.NOTION_KEY
  })

  return notion
}
