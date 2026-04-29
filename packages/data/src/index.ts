import type { ImageMetadata } from "astro"

import logoMesh from "../assets/logo-mesh.png"
import logoMuse from "../assets/logo-muse.png"

export type Site = "mesh" | "muse"

export const locales = ["en", "zh"] as const
export type Locale = (typeof locales)[number]

interface SiteTokens {
  title: string
  descriptionLines: string[]
  localeLabel: string
}

type SiteData = {
  href: string
  domain: string
  logo: ImageMetadata
} & Record<Locale, SiteTokens>

export const siteData: Record<Site, SiteData> = {
  mesh: {
    href: "https://mesh.zlliang.me",
    domain: "mesh.zlliang.me",
    logo: logoMesh,
    en: {
      title: "Mesh",
      descriptionLines: ["In this ever-changing world of technology, trying to see things a little more clearly."],
      localeLabel: "English",
    },
    zh: {
      title: "技术手记",
      descriptionLines: ["在这个每天都在变的技术世界里，", "看得更清楚一点。"],
      localeLabel: "英文",
    },
  },
  muse: {
    href: "https://muse.zlliang.me",
    domain: "muse.zlliang.me",
    logo: logoMuse,
    en: {
      title: "Muse",
      descriptionLines: ["Slowly writing down small things, passing thoughts, and the ones that linger a little longer."],
      localeLabel: "Chinese",
    },
    zh: {
      title: "随想手记",
      descriptionLines: ["慢慢记下一些小事和随想，还有那些", "停留更久的念头。"],
      localeLabel: "中文",
    },
  },
}

export const authorData = {
  en: {
    author: "Zilong Liang",
  },
  zh: {
    author: "梁子龙",
  },
} as const
