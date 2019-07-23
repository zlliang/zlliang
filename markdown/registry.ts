import { PostMeta, PostProps as Post } from '../components/post'

import EnterGraduateContent from './enter-graduate.md'
import RedesignMyWebsiteContent from './redesign-my-website.md'

const EnterGraduateMeta: PostMeta = {
  pid: 'enter-graduate',
  title: 'Enter Graduate',
  created: '2019-07-24', // TODO
  inChinese: true // TODO
}
export const EnterGraduate: Post = {
  meta: EnterGraduateMeta,
  content: EnterGraduateContent
}

const RedesignMyWebsiteMeta: PostMeta = {
  pid: 'redesign-my-website',
  title: 'Redesign My Website',
  created: '2019-07-24'
}
export const RedesignMyWebsite: Post = {
  meta: RedesignMyWebsiteMeta,
  content: RedesignMyWebsiteContent
}

export const posts: PostMeta[] = [EnterGraduateMeta, RedesignMyWebsiteMeta]
