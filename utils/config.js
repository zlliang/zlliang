import { lighten, darken } from 'polished'

export const siteTitle = 'Zilong LIANG'

export const maxWidth = 736

export const mediaQuery = {
  phone: `@media (max-width: ${maxWidth}px)`,
  desktop: `@media (min-width: ${maxWidth + 1}px)`
}

export const color = {
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#828282',
  gray4: '#BDBDBD',
  gray5: '#E0E0E0',
  gray6: '#F2F2F2',

  red: '#EB5757',
  orange: '#F2994A',
  yellow: '#F2C94C',
  green: '#27AE60',
  blue: darken(0.15, '#2F80ED'),
  lightBlue: '#2F80ED',
  cyan: lighten(0.25, '#56CCF2'),
  purple: '#9B51E0'
}

export const imageHost = '/images'
