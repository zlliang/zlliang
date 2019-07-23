import { Post } from '../pages/post/[pid]'

// Import posts
import RedesignMyWebsite from './redesign-my-website.md'

// Register posts
const posts: Post[] = [
  {
    pid: 'redesign-my-website',
    title: 'Redesign My Website',
    content: RedesignMyWebsite,
    created: '2019-07-24'
  }
]

export default posts
