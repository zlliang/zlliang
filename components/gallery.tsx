import { FunctionComponent } from 'react'
import Image from 'react-medium-image-zoom'

import { Section, SectionTitle } from './content'

const Gallery: FunctionComponent = () => (
  <Section>
    <SectionTitle>Gallery</SectionTitle>
    {/* <Image
      image={{
        src: '/static/images/about.jpg',
        alt: 'about',
        style: { width: '100px' }
      }}
    /> */}
  </Section>
)

export default Gallery
