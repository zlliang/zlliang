/** Use [ImageKit](https://imagekit.io/) to optimize images */
export function getOptimizedImageUrl(rawImageUrl?: string) {
  if (!rawImageUrl) return
  
  return `https://ik.imagekit.io/zlliang/tr:w-1024/${encodeURIComponent(rawImageUrl)}`
}
