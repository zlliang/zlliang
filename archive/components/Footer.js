import styled from '@emotion/styled'

import { color } from '../utils/constants'

const FooterContainer = styled.footer`
  margin-top: 96px;
  margin-bottom: 48px;
  font-size: 12px;
  color: ${color.gray3};
  @media (prefers-color-scheme: dark) {
    & {
      color: ${color.gray4};
    }
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      2015–2021 © Zilong Liang <br />
      <a href='https://creativecommons.org/licenses/by/4.0/'>CC-BY-4.0</a>{' '}
      Licensed
    </FooterContainer>
  )
}
