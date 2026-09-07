import { getEntry, render } from "astro:content"

/** Renders a fragment */
export async function renderFragment(slug: string) {
  const entry = await getEntry("fragments", slug)!
  const { Content } = await render(entry)

  return Content
}
