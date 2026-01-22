import path from "node:path"

type Site = "www" | "tech" | "days"
export type ContentSite = "tech" | "days"

interface SiteConfig {
  contentRoot: string
}

const WORKSPACE_ROOT = path.join(import.meta.dirname, "..")

export function getSiteConfig(site: ContentSite): SiteConfig {
  return {
    contentRoot: path.join(WORKSPACE_ROOT, "websites", site, "content"),
  }
}

export function parseSiteArg(args: string[], usage: string): { site: Site, rest: string[] } {
  const [siteArg, ...rest] = args

  if (siteArg !== "www" && siteArg !== "tech" && siteArg !== "days") {
    console.error(usage)
    process.exit(1)
  }

  return { site: siteArg, rest }
}

export function parseContentSiteArg(args: string[], usage: string): { site: ContentSite, rest: string[] } {
  const [siteArg, ...rest] = args

  if (siteArg !== "tech" && siteArg !== "days") {
    console.error(usage)
    process.exit(1)
  }

  return { site: siteArg, rest }
}
