import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Avatar from "@/components/home/Avatar"
import config from "@/configs"

const HeroContainer = styled.header`
  margin-bottom: 64px;

  ${config.mq.phone} {
    margin-top: 48px;
    text-align: center;
  }
  ${config.mq.desktop} {
    display: flex;
    margin-top: 108px;
  }
`

const HeroContent = styled.div`
  flex-grow: 1;

  ${config.mq.desktop} {
    display: flex;
    flex-direction: column;
  }
`

const Title = styled.div`
  width: fit-content;
  user-select: none;

  ${config.mq.phone} {
    margin: 0 auto;
    margin-bottom: -24px;
    transform: translateY(-24px);
  }
  ${config.mq.desktop} {
    margin-top: 8px;
    transform: translateX(-48px);
  }
`

const TitleText = styled.h1`
  margin: 0;
  line-height: 1.2;
  font-weight: 800;
  font-style: italic;
  z-index: 0;

  ${config.mq.phone} {
    font-size: 32px;
  }
  ${config.mq.desktop} {
    font-size: 48px;
  }

  &::after {
    content: "ZILONG LIANG";
    position: absolute;
    inset: 0;
    -webkit-text-stroke: 8px white;
    z-index: -1;
  }
`

const SubtitleText = styled.h2`
  margin: 0;
  line-height: 1;
  font-weight: 500;
  color: ${config.colors.siteSubtitle};

  ${config.mq.phone} {
    margin-top: 2px;
    font-size: 16px;
  }
  ${config.mq.desktop} {
    margin-top: 4px;
    font-size: 24px;
    text-align: right;
  }
`

const Biography = styled.div`
  align-self: flex-end;
  margin-top: 32px;

  ${config.mq.phone} {
    text-align: left;
  }
  ${config.mq.desktop} {
    width: 360px;
  }
`

const BioText = styled.div`
  color: ${config.colors.siteSubtitle};
  font-size: 14px;
  line-height: 1.6;
  text-align: justify;
`

const ContactList = styled.div`
  margin-top: 16px;

  ${config.mq.phone} {
    text-align: center;
  }
  ${config.mq.desktop} {
    text-align: right;
  }
`

const ContactTag = styled.a`
  padding: 4px;

  :not(:last-of-type) {
    margin-right: 16px;
  }

  svg + span {
    margin-left: 8px;
  }
`

export default function Hero() {
  return (
    <HeroContainer>
      <Avatar />
      <HeroContent>
        <Title>
          <TitleText>ZILONG LIANG</TitleText>
          <SubtitleText>你好呀～我是梁子龙</SubtitleText>
        </Title>
        <Biography>
          <BioText>{config.bio}</BioText>
          <ContactList>
            <ContactTag href="mailto:zlliang96@outlook.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>邮件 Email</span>
            </ContactTag>
            <ContactTag href="https://github.com/zlliang">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </ContactTag>
          </ContactList>
        </Biography>
      </HeroContent>
    </HeroContainer>
  )
}
