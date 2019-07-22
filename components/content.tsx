import styled from '@emotion/styled'

import { color } from '../utils/variables'

export const Section = styled.section`
  /* DEBUG */
  /* border: 0.1px solid red;
  * {
    border: 0.1px solid blue;
  } */
  margin: 32px 0;
  ul {
    padding-inline-start: 0;
    list-style-type: none;
    li {
      margin-block-start: 0.4rem;
      margin-block-end: 0.4rem;
    }
    ul {
      padding-inline-start: 1em;
    }
  }
`

export const SectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 1.2rem;
`

export const Tag = styled.span`
  padding: 0.1em 0.3em;
  font-size: 0.7em;
  color: ${color.gray3};
  border: 1px solid ${color.gray3};
  border-radius: 6px;
  margin-inline-start: 0.4em;
`
