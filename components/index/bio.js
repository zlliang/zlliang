import styled from "@emotion/styled";

import { mediaQuery, imageHost } from "../../utils/config";

const BioContainer = styled.div`
  margin-top: 72px;
  margin-bottom: 72px;
  font-size: 14px;
  ${mediaQuery.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;

const BioItem = styled.div`
  ${mediaQuery.desktop} {
    width: 340px;
  }
`;

const BioImage = styled.img`
  ${mediaQuery.desktop} {
    width: 340px;
  }
  ${mediaQuery.phone} {
    width: 100%;
  }
`;

const BioDescFudan = styled.div`
  position: relative;
  top: -60px;
  margin-bottom: -60px;
  margin-right: 32px;
  padding: 6px;
  background-color: white;
`;

const BioDescRCS = styled.div`
  position: relative;
  top: 40px;
  margin-top: -40px;
  margin-left: 32px;
  padding: 6px;
  padding-bottom: 12px;
  text-align: right;
  background-color: white;
`;

export default function Bio() {
  return (
    <BioContainer>
      <BioItem>
        <BioImage src={`${imageHost}/bio-fudan.jpg`} alt="bio-fudan" />
        <BioDescFudan>
          我是<a href="https://www.fudan.edu.cn">复旦大学</a>
          <a href="http://math.fudan.edu.cn">数学科学学院</a>
          计算数学系的研究生，主修矩阵计算
          <br />I am a graduate student in{" "}
          <a href="http://math.fudan.edu.cn/En">
            School of Mathematical Sciences
          </a>
          , <a href="https://www.fudan.edu.cn/en/">Fudan University</a>,{" "}
          Shanghai, China
        </BioDescFudan>
      </BioItem>
      <BioItem>
        <BioDescRCS>
          我是
          <a href="https://space.bilibili.com/21562856">上海彩虹室内合唱团</a>
          的一名团员
          <br />I am member of{" "}
          <a href="https://www.youtube.com/channel/UCC3EcrXH6Wu1-iu8dqDwhgw">
            Rainbow Chamber Singers
          </a>{" "}
          in Shanghai
        </BioDescRCS>
        <BioImage src={`${imageHost}/bio-rcs.jpg`} alt="bio-rcs" />
      </BioItem>
    </BioContainer>
  );
}
