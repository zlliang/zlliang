declare module "virtual:zlliang-theme/config" {
  import type { ResolvedThemeConfig } from "./config"

  const config: Omit<ResolvedThemeConfig, "logo">
  export default config
}

declare module "virtual:zlliang-theme/logo" {
  import type { ImageMetadata } from "astro"

  const logo: ImageMetadata
  export default logo
}

declare module "virtual:zlliang-theme/slots" {
  type Slot = import("astro/runtime/server/index.js").AstroComponentFactory | null

  export const Head: Slot
  export const HeaderEnd: Slot
  export const AsideStart: Slot
  export const AsideEnd: Slot
}
