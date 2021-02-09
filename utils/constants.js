import { lighten, darken } from 'polished'

export const siteTitle = 'Zilong LIANG'

export const maxWidth = 736

export const mediaQuery = {
  phone: `@media (max-width: ${maxWidth}px)`,
  desktop: `@media (min-width: ${maxWidth + 1}px)`
}

export const color = {
  gray1: '#1F2532',
  gray2: '#4B5362',
  gray3: '#727A88',
  gray4: '#A6AAB5',
  gray5: '#DCDFE5',
  gray6: '#F3F4F7',

  lightGray: 'rgba(0, 10, 60, 0.04)',
  lightGrayHover: 'rgba(0, 10, 60, 0.08)',

  red: '#EB5757',
  orange: '#F2994A',
  yellow: '#F2C94C',
  green: '#27AE60',
  blue: darken(0.15, '#2F80ED'),
  lightBlue: '#2F80ED',
  cyan: lighten(0.25, '#56CCF2'),
  purple: '#9B51E0',

  darkModeBlue: '#A0C4F3',
  darkModeLightBlue: lighten(0.1, '#A0C4F3'),

  darkModeLightGray: 'rgba(200, 230, 255, 0.06)',
  darkModeLightGrayHover: 'rgba(200, 230, 255, 0.1)'
}

export const imageHost = '/images'
