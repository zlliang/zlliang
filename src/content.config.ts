import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"
import slugify from "slugify"

const entries = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    no: z.number(),
    type: z.enum(["note", "post"]),
    title: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    created: z.coerce.date(),
    series: z.string().min(1).optional(),
    tags: z.array(z.string().min(1)).optional()
      .transform(tags => tags?.map(tag => ({ display: tag, slug: slugify(tag, { lower: true }) }))),
    draft: z.boolean().default(false),
  }),
})

const fragments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fragments" }),
})

export const collections = {
  entries,
  fragments,
}
