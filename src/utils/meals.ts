import { Client } from '@notionhq/client'
import { groupBy } from 'lodash-es'
import { getOptimizedImageUrl } from '@/utils/image'

/** Get the database of my everyday meals from Notion, grouped by dates */
export async function getMeals() {
  const notion = new Client({
    auth: import.meta.env.NOTION_KEY
  })
  
  const { results = [] } = await notion.databases.query({
    database_id: import.meta.env.NOTION_MEALS_DATABASE_ID,
    sorts: [{ property: '类型', direction: 'ascending' }]
  })

  const list = results.map(({ properties }: any) => ({
    name: properties['餐食'].title[0]?.text.content as string | undefined,
    date: (properties['日期'].date?.start as string | undefined) ? new Date(properties['日期'].date.start) : undefined,
    type: properties['类型'].select?.name as string | undefined,
    source: properties['来源'].select?.name as string | undefined,
    image: getOptimizedImageUrl(properties['照片'].files[0]?.file.url as string | undefined),
    price: properties['价格'].number as number | undefined,
    description: properties['备注'].rich_text[0]?.text.content as string | undefined,
  }))

  const groups = Object.entries(groupBy(list, (item) => item.date?.valueOf() || 0))
    .map(([dateStr, meals]) => ({ date: new Date(Number(dateStr)), meals }))
    .toSorted((a, b) => b.date.valueOf() - a.date.valueOf())

  return groups
}
