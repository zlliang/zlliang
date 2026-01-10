import { t } from "@/utils/i18n"

import type { Locale } from "@/utils/i18n"

export function getTitle(lang: Locale, title: string | undefined) {
  const siteTitle = t(lang, "site.title")
  return title ? `${title} - ${siteTitle}` : siteTitle
}
