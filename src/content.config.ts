import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"
import slugify from "slugify"

function formatTitle(type: "note" | "post", title?: string) {
  return type === "note" ? `Note${title ? `: ${title}` : ""}` : title
}

const entries = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    no: z.number(),
    type: z.enum(["note", "post"]),
    title: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    created: z.coerce.date(),
    tags: z.array(z.string().min(1)).optional()
      .transform(tags => tags?.map(tag => ({ display: tag, slug: slugify(tag, { lower: true }) }))),
    draft: z.boolean().default(false),
  }).transform(data => ({ ...data, title: formatTitle(data.type, data.title) })),
})

const fragments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fragments" }),
})

export const collections = {
  entries,
  fragments,
}
