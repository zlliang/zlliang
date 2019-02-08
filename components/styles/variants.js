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
  black: '#25292E',
  grey: '#717C88',
  link: '#467DBE',
  linkHover: '#1A3A5F'
}

export default { size, media, color }
