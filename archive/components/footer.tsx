import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { color } from '../utils/variables'

const FooterContainer = styled.footer`
  margin-top: 96px;
  margin-bottom: 48px;
  font-size: 12px;
  color: ${color.gray2};
`

const Footer: FunctionComponent = () => (
  <FooterContainer>
    2015–2019 © Zilong Liang ｜{' '}
    <a href='https://creativecommons.org/licenses/by/4.0/'>CC-BY-4.0</a>{' '}
    Licensed
  </FooterContainer>
)

export default Footer
