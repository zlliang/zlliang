import { type ContentData } from 'vitepress'

export interface FrontMatter {
  emoji?: string
  title?: string
  summary?: string
  created?: Date
  path?: string
  hidden?: boolean
}

export interface Post extends ContentData {
  frontmatter: FrontMatter
}
