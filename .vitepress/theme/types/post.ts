import type { ContentData } from 'vitepress'

export interface FrontMatter {
  title?: string
  path?: string
  summary?: string
  created?: Date
  updated?: Date
  hidden?: boolean
  featured?: boolean
  topicIndex?: boolean
}

export interface Post extends ContentData {
  frontmatter: FrontMatter
}
