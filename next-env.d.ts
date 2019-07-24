/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.md' {
  const content: React.ReactNode
  export default content
}
