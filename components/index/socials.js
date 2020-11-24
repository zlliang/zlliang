import styled from "@emotion/styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWeibo } from "@fortawesome/free-brands-svg-icons";

const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-block-end: -8px;
`;

const SocialTag = styled.a`
  transition: background-color 100ms ease-in-out;
  color: black;
  padding: 4px 8px;
  margin-block-end: 8px;
  margin-inline-end: 8px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 4px;
  :hover {
    color: black;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default function Socials() {
  return (
    <>
      <h3>在其他平台找到我 / Find Me</h3>
      <SocialContainer>
        <SocialTag href="https://weibo.com/mblquincy">
          <FontAwesomeIcon icon={faWeibo} /> 微博 Weibo
        </SocialTag>
        <SocialTag href="https://github.com/zlliang">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </SocialTag>
        <SocialTag href="https://space.bilibili.com/30470407">
          <FontAwesomeIcon icon={faVideo} /> 哔哩哔哩
        </SocialTag>
      </SocialContainer>
    </>
  );
}
