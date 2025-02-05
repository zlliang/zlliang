/** Use [ImageKit](https://imagekit.io/) to optimize external images */
export function getOptimizedImageUrl(rawImageUrl?: string) {
  if (!rawImageUrl) return
  
  return `https://ik.imagekit.io/zlliang/tr:w-1280,h-1280,c-at_max/${encodeURIComponent(rawImageUrl)}`
}
