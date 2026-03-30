import { format, getDaysInMonth, isSameMonth, isWithinInterval, startOfDay } from "date-fns"

import type { CollectionEntry } from "astro:content"

interface ArchiveRange {
  start: number
  end: number
}

/** Archive date boundaries and range helpers */
export class ArchiveBounds {
  readonly start: Date
  readonly end: Date

  constructor(start: Date, end: Date) {
    this.start = startOfDay(start)
    this.end = startOfDay(end)
  }

  /** Return the year range that has archive pages */
  getYearRange(): ArchiveRange {
    return {
      start: this.start.getFullYear(),
      end: this.end.getFullYear(),
    }
  }

  /** Return the month range that has archive pages in a year */
  getMonthRange(year: number): ArchiveRange | null {
    const yearRange = this.getYearRange()
    if (year < yearRange.start || year > yearRange.end) {
      return null
    }

    return {
      start: year === yearRange.start ? this.start.getMonth() + 1 : 1,
      end: year === yearRange.end ? this.end.getMonth() + 1 : 12,
    }
  }

  /** Return the day range that has archive pages in a month */
  getDayRange(year: number, month: number): ArchiveRange | null {
    const monthRange = this.getMonthRange(year)
    if (!monthRange || month < monthRange.start || month > monthRange.end) {
      return null
    }

    const targetMonth = new Date(year, month - 1, 1)
    const start = isSameMonth(this.start, targetMonth) ? this.start.getDate() : 1
    const end = isSameMonth(this.end, targetMonth) ? this.end.getDate() : getDaysInMonth(targetMonth)

    return { start, end }
  }

  /** Check whether a date is inside archive bounds */
  includes(date: Date): boolean {
    return isWithinInterval(startOfDay(date), { start: this.start, end: this.end })
  }
}

/** Return the first and last note day for archive navigation */
export function getArchiveBounds(notes: CollectionEntry<"notes">[]): ArchiveBounds | null {
  if (notes.length === 0) {
    return null
  }

  const created = notes.map((note) => note.data.created.valueOf())
  return new ArchiveBounds(new Date(Math.min(...created)), new Date())
}

/** Parse and validate a year route segment */
export function parseYear(value?: string) {
  if (!value || !/^\d{4}$/.test(value)) {
    return null
  }

  const year = Number(value)
  return Number.isInteger(year) ? year : null
}

/** Parse and validate a month route segment */
export function parseMonth(value?: string) {
  return parseInRange(value, 1, 12)
}

/** Parse and validate a day route segment */
export function parseDay(value: string | undefined, year: number, month: number) {
  return parseInRange(value, 1, getDaysInMonth(new Date(year, month - 1, 1)))
}

/** Build the notes year archive path */
export function getYearNotesPath(year: number) {
  return `/notes/${year}`
}

/** Build the notes month archive path */
export function getMonthNotesPath(year: number, month: number) {
  return `${getYearNotesPath(year)}/${pad(month)}`
}

/** Build the notes day archive path */
export function getDayNotesPath(date: Date): string
export function getDayNotesPath(year: number, month: number, day: number): string
export function getDayNotesPath(dateOrYear: Date | number, month?: number, day?: number) {
  if (dateOrYear instanceof Date) {
    return `/notes/${format(startOfDay(dateOrYear), "yyyy/MM/dd")}`
  }

  if (month === undefined || day === undefined) {
    throw new TypeError("getDayNotesPath(year, month, day) requires month and day")
  }

  return `${getMonthNotesPath(dateOrYear, month)}/${pad(day)}`
}

/** Pad numbers to 2-digit route segments */
export function pad(value: number) {
  return String(value).padStart(2, "0")
}

function parseInRange(value: string | undefined, min: number, max: number) {
  if (!value || !/^\d{1,2}$/.test(value)) {
    return null
  }

  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed >= min && parsed <= max ? parsed : null
}
