import { locales, t } from "@/utils/i18n"

import type { Locale } from "@/utils/i18n"

/** Builds the props for `@zlliang/theme`'s `Layout` for a given locale. */
export function getLayoutProps(locale: Locale, pageTitle?: string) {
  const siteTitle = t(locale, "site.title")
  return {
    title: pageTitle,
    locale,
    siteTitle,
    homeHref: `/${locale}/`,
    footerAuthor: siteTitle,
    alternateLocales: locales.map((code) => ({ code, href: `/${code}/` })),
  }
}
