import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    created: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
})

const fragments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fragments" }),
})

export const collections = {
  posts,
  fragments,
}
