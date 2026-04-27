import { resolveJournalConfig, type ThemeJournalConfig } from "./config"

import type { ThemePreset } from "../../config"

const ROUTES: Array<{ pattern: string; entrypoint: string }> = [
  { pattern: "/", entrypoint: "./routes/index.astro" },
  { pattern: "/404", entrypoint: "./routes/404.astro" },
  { pattern: "/image", entrypoint: "./routes/image.astro" },
  { pattern: "/search", entrypoint: "./routes/search.astro" },
  { pattern: "/notes", entrypoint: "./routes/notes/index.astro" },
  { pattern: "/notes/[...slug]", entrypoint: "./routes/notes/[...slug].astro" },
  { pattern: "/notes/[year]", entrypoint: "./routes/notes/[year]/index.astro" },
  { pattern: "/notes/[year]/[month]", entrypoint: "./routes/notes/[year]/[month]/index.astro" },
  { pattern: "/notes/[year]/[month]/[day]", entrypoint: "./routes/notes/[year]/[month]/[day].astro" },
  { pattern: "/posts", entrypoint: "./routes/posts/index.astro" },
  { pattern: "/posts/[...slug]", entrypoint: "./routes/posts/[...slug].astro" },
  { pattern: "/posts/series", entrypoint: "./routes/posts/series/index.astro" },
  { pattern: "/posts/series/[series]", entrypoint: "./routes/posts/series/[series].astro" },
]

export const journalPreset: ThemePreset<ThemeJournalConfig> = {
  name: "journal",
  resolveConfig: resolveJournalConfig,
  apply({ astro }) {
    astro.addMiddleware({
      entrypoint: new URL("./middleware/redirects.ts", import.meta.url),
      order: "pre",
    })

    for (const { pattern, entrypoint } of ROUTES) {
      astro.injectRoute({
        pattern,
        entrypoint: new URL(entrypoint, import.meta.url),
      })
    }
  },
}

export type { ThemeJournalConfig }
