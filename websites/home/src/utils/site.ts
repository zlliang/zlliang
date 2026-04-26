import { locales, t } from "@/utils/i18n"

import type { Locale } from "@/utils/i18n"

/** Builds the props for `@zlliang/theme`'s `Layout` for a given locale. */
export function getLayoutProps(lang: Locale, pageTitle?: string) {
  const siteTitle = t(lang, "site.title")
  return {
    title: pageTitle,
    lang,
    siteTitle,
    homeHref: `/${lang}/`,
    footerAuthor: siteTitle,
    footerBuiltWithPrefix: t(lang, "ui.footer.builtWithPrefix"),
    footerBuiltWithSuffix: t(lang, "ui.footer.builtWithSuffix"),
    hreflangs: locales.map((code) => ({ code, href: `/${code}/` })),
  }
}
