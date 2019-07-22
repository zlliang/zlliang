import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export const avatarSizeDesktop = '11rem'
export const avatarSizePhone = '10rem'

const AvatarImg = styled.img`
  user-select: none;
  @media (max-width: 46rem) {
    width: ${avatarSizePhone};
    height: ${avatarSizePhone};
  }
  @media (min-width: 46rem) {
    width: ${avatarSizeDesktop};
    height: ${avatarSizeDesktop};
  }

  border-radius: 50%;
`

const Avatar: FunctionComponent = () => (
  <AvatarImg draggable={false} src='/static/images/avatar.jpg' alt='avatar' />
)

export default Avatar
