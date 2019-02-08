export const size = {
  phone: 575,
  tablet: 768,
  desktop: 991
}

export const media = {
  phone: `@media all and (max-width: ${size.phone}px)`,
  tablet: `@media all and (max-width: ${size.tablet}px)`,
  desktop: `@media all and (max-width: ${size.desktop}px)`,
}

export const color = {
  black: 'black'
}

export default { size, media, color }
