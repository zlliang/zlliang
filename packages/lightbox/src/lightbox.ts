// Self-initializing lightbox module.
// Import once in Layout.astro and it auto-activates on all pages.

const STYLE_ID = "lb-styles"
const MIN_IMAGE_SIZE = 64
const IMAGE_EXTENSIONS = /\.(png|jpe?g|webp|gif|avif|svg|tiff?|bmp)(\?.*)?$/i

interface GalleryItem {
  src: string
  alt: string
  caption: string
}

let root: HTMLDivElement | null = null
let backdrop: HTMLDivElement
let imgEl: HTMLImageElement
let captionEl: HTMLElement
let counterEl: HTMLElement
let prevBtn: HTMLButtonElement
let nextBtn: HTMLButtonElement

let gallery: GalleryItem[] = []
let currentIndex = 0
let isOpen = false
let savedScrollY = 0
let savedFocusEl: Element | null = null

// --- Styles ---

function injectStyles() {
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement("style")
  style.id = STYLE_ID
  style.textContent = `
    main img:not([data-no-lightbox]) {
      cursor: zoom-in;
    }

    .lb-root {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    .lb-root[data-open] {
      opacity: 1;
    }

    .lb-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.92);
    }
    @media (prefers-color-scheme: dark) {
      .lb-backdrop {
        background: rgba(10, 10, 10, 0.92);
      }
    }

    .lb-dialog {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: calc(100dvw - 2rem);
      max-height: calc(100dvh - 2rem);
      padding-bottom: 3rem;
      outline: none;
    }

    .lb-figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 0;
    }

    .lb-img {
      max-width: calc(100dvw - 2rem);
      max-height: calc(100dvh - 6rem);
      object-fit: contain;
      user-select: none;
      -webkit-user-select: none;
      transition: opacity 0.15s ease;
    }

    .lb-caption {
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: #737373;
    }
    .lb-caption:empty {
      display: none;
    }

    .lb-footer {
      position: fixed;
      bottom: 1.25rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 1rem;
      z-index: 1;
    }

    .lb-counter {
      font-size: 0.75rem;
      color: #a3a3a3;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
    }

    .lb-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.75rem;
      height: 1.75rem;
      border: none;
      border-radius: 9999px;
      background: rgba(0, 0, 0, 0.06);
      color: #525252;
      cursor: pointer;
      outline: none;
    }
    .lb-nav:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    .lb-nav:focus-visible {
      box-shadow: 0 0 0 2px var(--lb-accent, #3b82f6);
    }
    @media (prefers-color-scheme: dark) {
      .lb-nav {
        background: rgba(255, 255, 255, 0.08);
        color: #d4d4d4;
      }
      .lb-nav:hover {
        background: rgba(255, 255, 255, 0.14);
      }
    }
    .lb-nav[hidden] {
      visibility: hidden;
    }
    .lb-nav svg {
      width: 1rem;
      height: 1rem;
      stroke: currentColor;
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .lb-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.75rem;
      height: 1.75rem;
      border: none;
      border-radius: 9999px;
      background: rgba(0, 0, 0, 0.06);
      color: #525252;
      cursor: pointer;
      outline: none;
    }
    .lb-close:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    .lb-close:focus-visible {
      box-shadow: 0 0 0 2px var(--lb-accent, #3b82f6);
    }
    @media (prefers-color-scheme: dark) {
      .lb-close {
        background: rgba(255, 255, 255, 0.08);
        color: #d4d4d4;
      }
      .lb-close:hover {
        background: rgba(255, 255, 255, 0.14);
      }
    }
    .lb-close svg {
      width: 1.125rem;
      height: 1.125rem;
      stroke: currentColor;
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    @media (prefers-reduced-motion: reduce) {
      .lb-root,
      .lb-img {
        transition: none;
      }
    }
  `
  document.head.appendChild(style)
}

// --- SVG icons ---

const chevronLeftSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"/></svg>`
const chevronRightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"/></svg>`
const closeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE --><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>`

// --- DOM creation ---

function createOverlay() {
  if (root) return

  root = document.createElement("div")
  root.className = "lb-root"
  root.hidden = true

  backdrop = document.createElement("div")
  backdrop.className = "lb-backdrop"
  backdrop.addEventListener("click", close)

  const closeBtn = document.createElement("button")
  closeBtn.className = "lb-close"
  closeBtn.type = "button"
  closeBtn.setAttribute("aria-label", "Close")
  closeBtn.innerHTML = closeSvg
  closeBtn.addEventListener("click", close)

  const dialog = document.createElement("div")
  dialog.className = "lb-dialog"
  dialog.setAttribute("role", "dialog")
  dialog.setAttribute("aria-modal", "true")
  dialog.setAttribute("aria-label", "Image viewer")
  dialog.tabIndex = -1

  const figure = document.createElement("figure")
  figure.className = "lb-figure"

  imgEl = document.createElement("img")
  imgEl.className = "lb-img"

  captionEl = document.createElement("figcaption")
  captionEl.className = "lb-caption"

  // Footer: prev + counter + next
  const footer = document.createElement("div")
  footer.className = "lb-footer"

  prevBtn = document.createElement("button")
  prevBtn.className = "lb-nav lb-prev"
  prevBtn.type = "button"
  prevBtn.setAttribute("aria-label", "Previous image")
  prevBtn.innerHTML = chevronLeftSvg
  prevBtn.addEventListener("click", prev)

  counterEl = document.createElement("div")
  counterEl.className = "lb-counter"
  counterEl.setAttribute("aria-live", "polite")

  nextBtn = document.createElement("button")
  nextBtn.className = "lb-nav lb-next"
  nextBtn.type = "button"
  nextBtn.setAttribute("aria-label", "Next image")
  nextBtn.innerHTML = chevronRightSvg
  nextBtn.addEventListener("click", next)

  footer.append(prevBtn, counterEl, nextBtn)
  figure.append(imgEl, captionEl)
  dialog.append(figure)
  root.append(backdrop, closeBtn, dialog, footer)
  document.body.appendChild(root)
}

// --- Gallery ---

function buildGallery(main: HTMLElement): GalleryItem[] {
  const imgs = main.querySelectorAll<HTMLImageElement>("img:not([data-no-lightbox])")
  const items: GalleryItem[] = []

  for (const img of imgs) {
    // Skip tiny images (icons, decorative)
    if (img.naturalWidth > 0 && img.naturalWidth < MIN_IMAGE_SIZE && img.naturalHeight < MIN_IMAGE_SIZE) {
      continue
    }

    // Determine best source
    let src = img.currentSrc || img.src
    const parentLink = img.closest("a[href]") as HTMLAnchorElement | null
    if (parentLink && IMAGE_EXTENSIONS.test(parentLink.href)) {
      src = parentLink.href
    }

    // Caption: prefer rehype caption sibling, fall back to alt
    let caption = ""
    const nextSibling = img.nextElementSibling
    if (nextSibling?.matches("span.caption")) {
      caption = nextSibling.textContent?.trim() ?? ""
    }
    if (!caption) {
      caption = img.alt ?? ""
    }

    items.push({ src, alt: img.alt ?? "", caption })
  }

  return items
}

function findImageIndex(main: HTMLElement, clickedImg: HTMLImageElement): number {
  const imgs = main.querySelectorAll<HTMLImageElement>("img:not([data-no-lightbox])")
  let index = 0
  for (const img of imgs) {
    if (img.naturalWidth > 0 && img.naturalWidth < MIN_IMAGE_SIZE && img.naturalHeight < MIN_IMAGE_SIZE) {
      continue
    }
    if (img === clickedImg) return index
    index++
  }
  return 0
}

// --- Navigation ---

function showAt(index: number) {
  if (gallery.length === 0) return

  currentIndex = ((index % gallery.length) + gallery.length) % gallery.length
  const item = gallery[currentIndex]

  imgEl.src = item.src
  imgEl.alt = item.alt
  captionEl.textContent = item.caption
  counterEl.textContent = gallery.length > 1 ? `${currentIndex + 1}\u2009/\u2009${gallery.length}` : ""

  // Update nav button visibility
  const single = gallery.length <= 1
  prevBtn.hidden = single
  nextBtn.hidden = single

  // Preload neighbors
  preloadNeighbors()
}

function next() {
  if (gallery.length <= 1) return
  showAt(currentIndex + 1)
}

function prev() {
  if (gallery.length <= 1) return
  showAt(currentIndex - 1)
}

function preloadNeighbors() {
  if (gallery.length <= 1) return
  const preload = (i: number) => {
    const idx = ((i % gallery.length) + gallery.length) % gallery.length
    const img = new Image()
    img.src = gallery[idx].src
  }
  preload(currentIndex - 1)
  preload(currentIndex + 1)
}

// --- Open / Close ---

function open(main: HTMLElement, clickedImg: HTMLImageElement) {
  createOverlay()

  gallery = buildGallery(main)
  if (gallery.length === 0) return

  const index = findImageIndex(main, clickedImg)

  // Detect accent color from site links
  const linkEl = main.querySelector("a") ?? document.querySelector("a")
  if (linkEl && root) {
    const accent = getComputedStyle(linkEl).color
    root.style.setProperty("--lb-accent", accent)
  }

  savedFocusEl = document.activeElement
  savedScrollY = window.scrollY
  document.body.style.position = "fixed"
  document.body.style.top = `-${savedScrollY}px`
  document.body.style.left = "0"
  document.body.style.right = "0"

  showAt(index)

  root!.hidden = false
  // Force reflow for transition
  root!.offsetHeight
  root!.dataset.open = ""

  isOpen = true
  window.addEventListener("keydown", onKeyDown)

  // Focus the dialog for keyboard accessibility
  root!.querySelector<HTMLElement>(".lb-dialog")?.focus()
}

function close() {
  if (!isOpen || !root) return
  isOpen = false

  delete root.dataset.open
  window.removeEventListener("keydown", onKeyDown)

  document.body.style.position = ""
  document.body.style.top = ""
  document.body.style.left = ""
  document.body.style.right = ""
  window.scrollTo(0, savedScrollY)

  const onEnd = () => {
    root!.hidden = true
    root!.removeEventListener("transitionend", onEnd)
  }
  root.addEventListener("transitionend", onEnd)

  // Fallback if transition doesn't fire
  setTimeout(() => {
    if (root && !root.hidden) root.hidden = true
  }, 300)

  // Restore focus
  if (savedFocusEl instanceof HTMLElement) {
    savedFocusEl.focus()
  }
}

// --- Keyboard ---

function onKeyDown(e: KeyboardEvent) {
  switch (e.key) {
    case "Escape":
      close()
      break
    case "ArrowLeft":
      prev()
      e.preventDefault()
      break
    case "ArrowRight":
      next()
      e.preventDefault()
      break
  }
}

// --- Init ---

function init() {
  const main = document.querySelector("main")
  if (!main) return
  if (main.dataset.lbBound) return
  main.dataset.lbBound = "true"

  injectStyles()

  main.addEventListener("click", (e) => {
    const img = (e.target as Element).closest?.("img:not([data-no-lightbox])") as HTMLImageElement | null
    if (!img) return

    // Skip tiny images
    if (img.naturalWidth > 0 && img.naturalWidth < MIN_IMAGE_SIZE && img.naturalHeight < MIN_IMAGE_SIZE) {
      return
    }

    // If inside a link pointing to a non-image resource, let it navigate
    const parentLink = img.closest("a[href]") as HTMLAnchorElement | null
    if (parentLink && !IMAGE_EXTENSIONS.test(parentLink.href)) return

    // Prevent link navigation for image links
    if (parentLink) e.preventDefault()

    open(main, img)
  })
}

// Auto-initialize
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}

// Support Astro view transitions
document.addEventListener("astro:page-load", init)
