import { defineMiddleware } from "astro:middleware"

// Mar 22, 2026: Renamed categories to types, removed tags, migrated pagination to query params.
async function redirectsBefore20260322(context: Parameters<Parameters<typeof defineMiddleware>[0]>[0]) {
  const { pathname, search } = context.url

  const notesPaginationMatch = pathname.match(/^\/notes\/([1-9]\d{0,2})$/)
  if (notesPaginationMatch) {
    const page = Number(notesPaginationMatch[1])
    const target = page === 1 ? "/notes" : `/notes?page=${page}`

    return context.redirect(`${target}${search}`, 308)
  }

  const typesPaginationMatch = pathname.match(/^\/notes\/types\/([^/]+)\/([1-9]\d{0,2})$/)
  if (typesPaginationMatch) {
    const [, type, pageText] = typesPaginationMatch
    const page = Number(pageText)
    const target = page === 1 ? `/notes/types/${type}` : `/notes/types/${type}?page=${page}`

    return context.redirect(`${target}${search}`, 308)
  }

  const categoriesPaginationMatch = pathname.match(/^\/notes\/categories\/([^/]+)\/([1-9]\d{0,2})$/)
  if (categoriesPaginationMatch) {
    const [, type, pageText] = categoriesPaginationMatch
    const page = Number(pageText)
    const target = page === 1 ? `/notes/types/${type}` : `/notes/types/${type}?page=${page}`

    return context.redirect(`${target}${search}`, 308)
  }

  const categoriesMatch = pathname === "/notes/categories" || pathname.startsWith("/notes/categories/")
  if (categoriesMatch) {
    return context.redirect(`${pathname.replace("/notes/categories", "/notes/types")}${search}`, 308)
  }

  const tagsMatch = pathname === "/notes/tags" || pathname.startsWith("/notes/tags/")
  if (tagsMatch) {
    context.locals.error = {
      status: 410,
      statusText: "Gone",
    }

    const response = await context.rewrite("/404")
    const headers = new Headers(response.headers)

    return new Response(response.body, {
      status: 410,
      statusText: "Gone",
      headers,
    })
  }

  return null
}

// Apr 24, 2026: Consolidated note types (regular → daily, link/collection/quote → bookmark).
function redirectsBefore20260424(context: Parameters<Parameters<typeof defineMiddleware>[0]>[0]) {
  const renamedTypes: Record<string, string> = {
    regular: "daily",
    link: "bookmark",
    collection: "bookmark",
    quote: "bookmark",
  }

  const { pathname, search } = context.url

  const match = pathname.match(/^\/notes\/types\/([^/]+)\/?$/)
  if (match) {
    const [, rawType] = match
    const resolved = renamedTypes[rawType]
    if (resolved) {
      return context.redirect(`/notes/types/${resolved}${search}`, 308)
    }
  }

  return null
}

export const redirects = defineMiddleware(async (context, next) => {
  const before20260322 = await redirectsBefore20260322(context)
  if (before20260322) return before20260322

  const before20260424 = await redirectsBefore20260424(context)
  if (before20260424) return before20260424

  return next()
})
