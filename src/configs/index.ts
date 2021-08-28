import { rgb, lighten, darken, transparentize } from "polished"

const baseColors = {
  // Colors are mainly from https://nipponcolors.com
  black: rgb(11, 16, 19),
  gray1: rgb(124, 125, 140),
  gray2: rgb(179, 182, 186),
  gray3: rgb(209, 212, 214),
  gray4: rgb(249, 250, 252),
  blue: rgb(0, 92, 175),
}

const maxWidth = 768

const config = {
  siteTitle: "梁子龙",
  bio: "正在用学习的心态接触一切感兴趣的事物。尝试精进前端技术、尝试写一些学习笔记、尝试读一点书、尝试写好数学专业的毕业论文。",

  maxWidth: `${maxWidth}px`,

  mq: {
    phone: `@media (max-width: ${maxWidth}px)`,
    desktop: `@media (min-width: ${maxWidth + 1}px)`,
  },

  colors: {
    text: baseColors.black,
    secondary: baseColors.gray1,

    link: baseColors.blue,
    linkHover: lighten(0.15, baseColors.blue),
    linkHoverBorder: transparentize(0.5, lighten(0.15, baseColors.blue)),

    codeBlockBackground: baseColors.gray4,

    siteSubtitle: baseColors.gray1,
    postMetadata: baseColors.gray2,
  },
}

export default config
