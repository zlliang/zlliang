import styled from "@emotion/styled"

import config from "@/configs"

const FooterText = styled.footer`
  margin-top: 96px;
  margin-bottom: 48px;
  text-align: center;
  color: ${config.colors.secondary};
  font-size: 12px;
`

export default function Footer() {
  return <FooterText>2015–2021 © 梁子龙</FooterText>
}
