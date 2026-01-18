export interface Visit {
  date: string
  link?: string
}

export interface Place {
  name: string
  nameZh?: string
  lat: number
  lng: number
  visits: Visit[]
}

export const places: Place[] = [
  { name: "Switzerland", nameZh: "瑞士", lat: 46.8182, lng: 8.2275, visits: [{ date: "Oct 2025", link: "https://baidu.com" }] },
]
