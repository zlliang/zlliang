import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    created: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    new: z.boolean().default(false),
  }),
})

const fragments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/fragments' }),
})

export const collections = {
  posts,
  fragments,
}
