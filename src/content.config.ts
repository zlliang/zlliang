import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    created: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
})

export const collections = {
  posts,
}
