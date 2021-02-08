import styled from '@emotion/styled'

import { mediaQuery, imageHost, color } from '../../utils/config'

const BioContainer = styled.div`
  margin-top: 72px;
  margin-bottom: 72px;
  font-size: 12px;
  ${mediaQuery.desktop} {
    display: flex;
    justify-content: space-between;
  }
`

const BioItem = styled.div`
  ${mediaQuery.desktop} {
    width: 340px;
  }
`

const BioImage = styled.img`
  border-radius: 24px;
  ${mediaQuery.desktop} {
    width: 340px;
  }
  ${mediaQuery.phone} {
    width: 100%;
  }
`

const BioDescFudan = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: -60px;
  top: -60px;
  right: 20px;
  width: 75%;
  padding: 12px 16px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 8px rgba(0, 10, 30, 0.08);
  @media (prefers-color-scheme: dark) {
    background-color: ${color.gray1};
  }
`

const BioDescRCS = styled.div`
  position: relative;

  margin: 0 auto;
  margin-top: -30px;
  /* margin-left: 32px; */
  top: 30px;
  left: 20px;
  width: 75%;
  padding: 12px 16px;
  padding-bottom: 12px;
  text-align: right;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 10, 30, 0.2);
  @media (prefers-color-scheme: dark) {
    background-color: ${color.gray1};
  }
`

export default function Bio() {
  return (
    <BioContainer>
      <BioItem>
        <BioImage src={`${imageHost}/bio-fudan.jpg`} alt='bio-fudan' />
        <BioDescFudan>
          我是<a href='https://www.fudan.edu.cn'>复旦大学</a>
          <a href='http://math.fudan.edu.cn'>数学科学学院</a>
          计算数学系的研究生，主修矩阵计算
          <br />I am a graduate student in{' '}
          <a href='http://math.fudan.edu.cn/En'>
            School of Mathematical Sciences
          </a>
          , <a href='https://www.fudan.edu.cn/en/'>Fudan University</a>,{' '}
          Shanghai, China
        </BioDescFudan>
      </BioItem>
      <BioItem>
        <BioDescRCS>
          我是
          <a href='https://space.bilibili.com/21562856'>上海彩虹室内合唱团</a>
          的一名团员
          <br />I am member of{' '}
          <a href='https://www.youtube.com/channel/UCC3EcrXH6Wu1-iu8dqDwhgw'>
            Rainbow Chamber Singers
          </a>{' '}
          in Shanghai
        </BioDescRCS>
        <BioImage src={`${imageHost}/bio-rcs.jpg`} alt='bio-rcs' />
      </BioItem>
    </BioContainer>
  )
}
