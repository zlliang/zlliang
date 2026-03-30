import { defineCollection, reference } from "astro:content"
import { z } from "astro/zod"
import { glob, file } from "astro/loaders"

import { slugs as typeSlugs } from "@/utils/types"

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/notes" }),
  schema: z.object({
    no: z.number().int(),
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
    series: reference("series").optional(),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
})

const series = defineCollection({
  loader: file("content/posts/series.json"),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().optional(),
  }),
})

export const collections = {
  notes,
  posts,
  series,
}
