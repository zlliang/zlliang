import styled from "@emotion/styled";
import { mediaQuery, imageHost } from "../../utils/config";

const BioContainer = styled.div`
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
  z-index: -100;
  ${mediaQuery.desktop} {
    width: 330px;
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
  z-index: 100;
`;

const BioDescRCS = styled.div`
  position: relative;
  top: 60px;
  margin-top: -40px;
  margin-left: 32px;
  padding: 6px;
  padding-bottom: 12px;
  text-align: right;
  background-color: white;
  z-index: 100;
`;

export default function Bio() {
  return (
    <BioContainer>
      <BioItem>
        <BioImage src={`${imageHost}/bio-fudan.jpg`} alt="bio-fudan" />
        <BioDescFudan>
          我是<a href="https://www.fudan.edu.cn">复旦大学</a>
          <a href="http://math.fudan.edu.cn">数学科学学院</a>
          计算数学系的研究生，主修矩阵计算。
          <br />I am a graduate student in{" "}
          <a href="http://math.fudan.edu.cn/En">
            School of Mathematical Sciences
          </a>
          , <a href="https://www.fudan.edu.cn/en/">Fudan University</a>,{" "}
          Shanghai, China.
        </BioDescFudan>
      </BioItem>
      <BioItem>
        <BioDescRCS>
          我是
          <a href="https://baike.baidu.com/item/上海彩虹室内合唱团/19510057">
            上海彩虹室内合唱团
          </a>
          的一名男高音成员。
          <br />I am member of{" "}
          <a href="https://www.youtube.com/channel/UCC3EcrXH6Wu1-iu8dqDwhgw">
            Rainbow Chamber Singers
          </a>{" "}
          in Shanghai.
        </BioDescRCS>
        <BioImage src={`${imageHost}/bio-rcs.jpg`} alt="bio-rcs" />
      </BioItem>
    </BioContainer>
  );
}
