import { createContentLoader } from "vitepress"
import { transformPost, sortPost } from "./utils"

import type { ContentData } from "vitepress"

declare const data: ContentData[]
export { data }

export default createContentLoader("src/**/*.md", {
  transform: (rawData) => rawData
    .map(transformPost)
    .sort(sortPost),
})
