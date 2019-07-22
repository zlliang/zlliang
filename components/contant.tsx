import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const ContactContainer = styled.div`
  margin: 64px 0;
  text-align: center;
`

const ContactTag = styled.a`
  transition: background-color 100ms ease-in-out;
  color: black;
  padding: 4px 8px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 4px;
  :hover {
    color: black;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
  :not(:last-child) {
    margin-inline-end: 16px;
  }
`

const Contact: FunctionComponent = () => (
  <ContactContainer>
    <ContactTag href='mailto:zlliang96@outlook.com'>
      <FontAwesomeIcon icon={faEnvelope} /> Mail
    </ContactTag>
    <ContactTag href='https://github.com/zlliang'>
      <FontAwesomeIcon icon={faGithub} /> GitHub
    </ContactTag>
    <ContactTag href='https://twitter.com/zlliang96'>
      <FontAwesomeIcon icon={faTwitter} /> Twitter
    </ContactTag>
  </ContactContainer>
)

export default Contact
