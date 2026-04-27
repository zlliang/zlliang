import { defineMiddleware } from "astro:middleware"

type Context = Parameters<Parameters<typeof defineMiddleware>[0]>[0]

// Mar 22, 2026: Renamed categories to types, removed tags, migrated pagination to query params.
async function redirectsBefore20260322(context: Context) {
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

// Apr 25, 2026: Eliminated note types; all type pages now redirect to /notes.
function redirectsBefore20260425(context: Context) {
  const { pathname, search } = context.url

  if (pathname === "/notes/types" || pathname.startsWith("/notes/types/")) {
    return context.redirect(`/notes${search}`, 308)
  }

  return null
}

// Apr 26, 2026: Moved the search route from /notes/search to /search.
function redirectsBefore20260426(context: Context) {
  const { pathname, search } = context.url

  if (pathname === "/notes/search") {
    return context.redirect(`/search${search}`, 308)
  }

  return null
}

export const redirects = defineMiddleware(async (context, next) => {
  const before20260322 = await redirectsBefore20260322(context)
  if (before20260322) return before20260322

  const before20260425 = redirectsBefore20260425(context)
  if (before20260425) return before20260425

  const before20260426 = redirectsBefore20260426(context)
  if (before20260426) return before20260426

  return next()
})

export const onRequest = redirects
