import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"

const fragments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/fragments" }),
})

export const collections = {
  fragments,
}
