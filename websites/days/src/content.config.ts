import { defineCollection, reference, z } from "astro:content"
import { glob } from "astro/loaders"

import { getTagDisplay } from "@/utils/tags"

export const categories = ["regular", "link", "collection", "quote", "til", "post"] as const

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/notes" }),
  schema: z.object({
    no: z.number(),
    title: z.string().min(1).optional(),
    created: z.coerce.date(),
    category: z.enum(categories).default("regular"),
    post: reference("posts").optional(),
    tags: z.array(z.string().min(1)).optional()
      .transform((tags) => tags
        ?.map((tag) => ({ display: getTagDisplay(tag), slug: tag }))
        .toSorted((a, b) => a.slug.localeCompare(b.slug))
      ),
    draft: z.boolean().default(false),
  }),
})

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/posts" }),
  schema: z.object({
    title: z.string().min(1),
    created: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
})

export const collections = {
  notes,
  posts,
}
