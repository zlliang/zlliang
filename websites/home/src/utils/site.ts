import { t } from "@/utils/i18n"

import type { Locale } from "@/utils/i18n"

/** Builds the localized page title from the optional page title. */
export function getTitle(lang: Locale, title: string | undefined) {
  const siteTitle = t(lang, "site.title")
  return title ? `${title} - ${siteTitle}` : siteTitle
}
