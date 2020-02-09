import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { mediaQuery, imageHost } from '../../utils/variables'

export const avatarSizeDesktop = '176px'
export const avatarSizePhone = '160px'

const AvatarImg = styled.div`
  user-select: none;
  ${mediaQuery.phone} {
    display: inline-block;
    width: ${avatarSizePhone};
    height: ${avatarSizePhone};
  }
  ${mediaQuery.desktop} {
    width: ${avatarSizeDesktop};
    height: ${avatarSizeDesktop};
  }

  background-image: url(${imageHost}/avatar.jpg);
  background-size: 100%;

  border-radius: 50%;
`

const Avatar: FunctionComponent = () => <AvatarImg />

export default Avatar
