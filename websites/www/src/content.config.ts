import { defineCollection, z } from "astro:content"
import { glob, file } from "astro/loaders"

import { locales } from "@/utils/i18n"

const fragments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/fragments" }),
})

const places = defineCollection({
  loader: file("./content/places/places.json"),
  schema: z.object({
    name: z.record(z.enum(locales), z.string()),
    flag: z.string(),
    lat: z.number(),
    lng: z.number(),
    visits: z.array(
      z.object({
        date: z.coerce.date(),
        link: z.string().optional(),
      })
    ),
  }),
})

export const collections = {
  fragments,
  places,
}
