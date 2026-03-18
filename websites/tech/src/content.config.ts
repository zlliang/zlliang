import { defineCollection, reference } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

import { slugs as typeSlugs } from "@/utils/types"

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/notes" }),
  schema: z.object({
    no: z.number(),
    title: z.string().min(1).optional(),
    created: z.coerce.date(),
    type: z.enum(typeSlugs).default("regular"),
    post: reference("posts").optional(),
    draft: z.boolean().default(false),
  }),
})

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/posts" }),
  schema: z.object({
    title: z.string().min(1),
    created: z.coerce.date(),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
})

export const collections = {
  notes,
  posts,
}
