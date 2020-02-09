import styled from "@emotion/styled";

import { mediaQuery, imageHost } from "../../utils/config";

export const avatarSizeDesktop = "176px";
export const avatarSizePhone = "160px";

const Avatar = styled.div`
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
`;

export default Avatar;
