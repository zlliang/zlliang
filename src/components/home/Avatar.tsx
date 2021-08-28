import styled from "@emotion/styled"

import config from "@/configs"

const avatarSizePhone = "160px"
const avatarSizeDesktop = "176px"

const Avatar = styled.div`
  ${config.mq.phone} {
    display: inline-block;
    width: ${avatarSizePhone};
    height: ${avatarSizePhone};
  }
  ${config.mq.desktop} {
    width: ${avatarSizeDesktop};
    height: ${avatarSizeDesktop};
  }
  background-image: url("/images/avatar.jpg");
  background-size: 100%;
  border-radius: 50%;
  user-select: none;
`

export default Avatar
