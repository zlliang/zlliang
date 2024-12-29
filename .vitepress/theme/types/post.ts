import type { ContentData } from 'vitepress'

export interface FrontMatter {
  emoji?: string
  title?: string
  path?: string
  summary?: string
  created?: Date
  hidden?: boolean
  featured?: boolean
  topicIndex?: boolean
}

export interface Post extends ContentData {
  frontmatter: FrontMatter
}
