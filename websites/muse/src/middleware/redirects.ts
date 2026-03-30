import { defineMiddleware } from "astro:middleware"

// Normalize legacy note URLs into the current route scheme and return 410 for removed tags pages.
export const redirects = defineMiddleware(async (context, next) => {
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
