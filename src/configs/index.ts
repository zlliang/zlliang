import { rgb, lighten, darken, transparentize } from "polished"

const baseColors = {
  // Colors are mainly from https://nipponcolors.com
  black: rgb(11, 16, 19),
  gray2: rgb(189, 192, 196),
  gray3: rgb(209, 212, 214),
  gray5: rgb(249, 250, 252),
  blue: rgb(0, 92, 175),
  purple: rgb(78, 79, 151),
}

const config = {
  siteTitle: "ZL",

  colors: {
    text: baseColors.black,

    link: baseColors.blue,
    linkHover: lighten(0.15, baseColors.blue),
    linkHoverAux: transparentize(0.5, lighten(0.15, baseColors.blue)),
    linkVisited: baseColors.purple,
    linkVisitedHover: lighten(0.15, baseColors.purple),
    linkVisitedHoverAux: transparentize(0.5, lighten(0.15, baseColors.purple)),

    codeBlockBackground: baseColors.gray5,
    codeScroll: baseColors.gray3,

    postAux: baseColors.gray2,
  },
}

export default config
