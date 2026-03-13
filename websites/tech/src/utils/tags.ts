interface Tag {
  slug: string
  display: string
  description: string
}

export const registry = [
  { slug: "ai", display: "AI", description: "LLMs, AI products, model releases, and broader shifts in the AI field" },
  { slug: "ai-agents", display: "AI agents", description: "Coding agents, agent harnesses, AI-assisted programming workflows, and agent design patterns" },
  { slug: "astro", display: "Astro", description: "Astro-specific framework news, upgrades, and website work" },
  { slug: "blogging", display: "blogging", description: "Public blogging practice, link-blogging, personal site building, content architecture, and publishing workflow implementation" },
  { slug: "career", display: "career", description: "Career reflection, work habits, software craft, and how AI changes programming work" },
  { slug: "demo", display: "demo", description: "Demo notes only" },
  { slug: "programming", display: "programming", description: "Programming languages, runtimes, APIs, and implementation-oriented technical topics" },
  { slug: "tools", display: "tools", description: "Editors, CLIs, libraries, and general developer tools" },
  { slug: "writing", display: "writing", description: "Writing craft, note-taking, style, and the work of explaining ideas clearly" },
] as const satisfies readonly Tag[]

export const tagSlugs = registry.map((tag) => tag.slug)
