import { Client } from '@notionhq/client'
import { groupBy } from 'lodash-es'
import { format, getISODay } from 'date-fns'

const mealTypes = {
  '早餐': 0,
  '午餐': 1,
  '晚餐': 2,
  '零食': 3,
} as const

type MealType = keyof typeof mealTypes

const mealSource = {
  '自炊': 0,
  '食堂': 1,
  '餐馆': 2,
  '外卖': 3,
  '方便食品': 4,
} as const

type MealSource = keyof typeof mealSource

const weekDay: Record<number, string> = {
  1: '周一',
  2: '周二',
  3: '周三',
  4: '周四',
  5: '周五',
  6: '周六',
  7: '周日',
}

/** Get the database of my everyday meals from Notion, grouped by dates */
export async function getMeals() {
  const notion = new Client({
    auth: import.meta.env.PUBLIC_NOTION_KEY
  })
  
  const { results = [] } = await notion.databases.query({
    database_id: import.meta.env.PUBLIC_NOTION_MEALS_DATABASE_ID
  })

  const list = results.map(({ properties }: any) => ({
    name: properties['餐食'].title[0].text.content as string,
    date: new Date(properties['日期'].date.start as string),
    type: properties['类型'].select.name as MealType,
    source: properties['来源'].select?.name as MealSource | undefined,
    image: properties['照片'].files[0]?.file.url as string | undefined,
    price: properties['价格'].number as number | undefined,
    description: properties['备注'].rich_text[0]?.text.content as string | undefined,
  }))

  const groups = Object.entries(groupBy(list, (item) => item.date.valueOf()))
    .map(([dateStr, meals]) => ({ date: new Date(Number(dateStr)), meals: meals.toSorted((a, b) => mealTypes[a.type] - mealTypes[b.type]) }))
    .toSorted((a, b) => b.date.valueOf() - a.date.valueOf())

  return groups
}

/** Format the date as "2025 年 2 月 4 日 周二" */
export function formatDate(date: Date) {
  return `${format(date, 'yyyy 年 M 月 d 日')}<span class="i-lucide-dot"></span>${weekDay[getISODay(date)]}`
}
