import { groupBy } from 'lodash-es'
import { startOfMonth, endOfMonth, format } from 'date-fns'
import { createNotionClient } from '@/utils/notion'
import { Date } from '@/utils/date'

/** Get the database of my everyday meals of *the given month* from Notion, grouped by dates */
export async function getMeals(date: Date) {
  const notion = createNotionClient()
  
  const { results = [] } = await notion.databases.query({
    database_id: import.meta.env.NOTION_MEALS_DATABASE_ID,
    sorts: [{ property: '类型', direction: 'ascending' }],
    filter: {
      and: [
        { property: '日期', date: { on_or_after: format(startOfMonth(date), 'yyyy-MM-dd') } },
        { property: '日期', date: { on_or_before: format(endOfMonth(date), 'yyyy-MM-dd') } },
      ],
    },
  })

  const list = results.map(({ properties }: any) => ({
    name: properties['餐食'].title[0]?.text.content as string | undefined,
    date: (properties['日期'].date?.start as string | undefined) ? new Date(properties['日期'].date.start) : undefined,
    type: properties['类型'].select?.name as string | undefined,
    source: properties['来源'].select?.name as string | undefined,
    image: getOptimizedImageUrl((properties['照片'].files[0]?.file?.url || properties['照片'].files[0]?.external?.url) as string | undefined),
    price: properties['价格'].number as number | undefined,
    description: properties['备注'].rich_text[0]?.text.content as string | undefined,
  }))

  const groups = Object.entries(groupBy(list, (item) => item.date?.valueOf() || 0))
    .map(([dateStr, meals]) => ({ date: new Date(Number(dateStr)), meals }))
    .toSorted((a, b) => b.date.valueOf() - a.date.valueOf())

  return groups
}

/** Use [ImageKit](https://imagekit.io/) to optimize external images */
function getOptimizedImageUrl(rawImageUrl?: string) {
  if (!rawImageUrl) return
  
  return `https://ik.imagekit.io/zlliang/tr:w-1280,h-1280,c-at_max/${encodeURIComponent(rawImageUrl)}`
}
