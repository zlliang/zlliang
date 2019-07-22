import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Image from 'react-medium-image-zoom'

import { Section, SectionTitle } from './content'
import { mediaQuery } from '../utils/variables'

const GalleryContainer = styled.div`
  /* DEBUG */
  /* border: 0.1px solid red;
  * {
    border: 0.1px solid blue;
  } */
  display: flex;
  flex-wrap: wrap;
  margin: -4px;
  * {
    ${mediaQuery.phone} {
      height: 108px;
    }
    ${mediaQuery.desktop} {
      height: 176px;
    }
    margin: 4px;
    border-radius: 2px;
  }
`

const Gallery: FunctionComponent = () => (
  <Section>
    <SectionTitle>Gallery</SectionTitle>

    <GalleryContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <Image
          image={{
            src: `/static/images/gallery/pic-${i}.jpg`,
            alt: `pic-${i}`
          }}
          key={i}
        />
      ))}
    </GalleryContainer>
  </Section>
)

export default Gallery
