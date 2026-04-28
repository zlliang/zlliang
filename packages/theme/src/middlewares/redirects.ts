import { defineMiddleware, sequence } from "astro:middleware"

// Mar 22, 2026: Renamed categories to types, removed tags, migrated pagination to query params.
const redirectsBefore20260322 = defineMiddleware(async (context, next) => {
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

  return next()
})

// Apr 25, 2026: Eliminated note types; all type pages now redirect to /notes.
const redirectsBefore20260425 = defineMiddleware((context, next) => {
  const { pathname, search } = context.url

  if (pathname === "/notes/types" || pathname.startsWith("/notes/types/")) {
    return context.redirect(`/notes${search}`, 308)
  }

  return next()
})

// Apr 26, 2026: Moved the search route from /notes/search to /search.
const redirectsBefore20260426 = defineMiddleware((context, next) => {
  const { pathname, search } = context.url

  if (pathname === "/notes/search") {
    return context.redirect(`/search${search}`, 308)
  }

  return next()
})

export const redirects = sequence(
  redirectsBefore20260322,
  redirectsBefore20260425,
  redirectsBefore20260426,
)
