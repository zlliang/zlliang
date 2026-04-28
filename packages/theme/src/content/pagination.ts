export const NOTES_PER_PAGE = 20

interface PaginationUrls {
  current: string
  first?: string
  prev?: string
  next?: string
  last?: string
}

/** Describes the paginated result returned to list pages. */
export interface PaginationData<T> {
  data: T[]
  total: number
  current: number
  last: number
  url: PaginationUrls
}

/** Parses the page query parameter and falls back to the first page. */
export function parsePageParam(value: string | null) {
  const page = Number(value ?? "1")
  return Number.isInteger(page) && page > 0 ? page : 1
}

/** Slices items for the current page and builds navigation URLs. */
export function paginate<T>(items: T[], page: number, getPageUrl: (page: number) => string, pageSize = NOTES_PER_PAGE): PaginationData<T> {
  const total = items.length
  const last = Math.max(1, Math.ceil(total / pageSize))
  const current = Math.min(Math.max(1, page), last)
  const start = (current - 1) * pageSize
  const end = start + pageSize

  return {
    data: items.slice(start, end),
    total,
    current,
    last,
    url: {
      current: getPageUrl(current),
      first: current > 1 ? getPageUrl(1) : undefined,
      prev: current > 1 ? getPageUrl(current - 1) : undefined,
      next: current < last ? getPageUrl(current + 1) : undefined,
      last: current < last ? getPageUrl(last) : undefined,
    },
  }
}

/** Checks whether the current URL should redirect to the canonical page URL. */
export function shouldRedirectPagination(searchParams: URLSearchParams, page: number, pagination: Pick<PaginationData<unknown>, "current">) {
  return page !== pagination.current || (pagination.current === 1 && searchParams.has("page"))
}
