import { FunctionComponent } from 'react'

import { Section, SectionTitle, Tag } from './content'

const Projects: FunctionComponent = () => (
  <Section>
    <SectionTitle>Projects</SectionTitle>
    <ul id='projects'>
      <li>
        <a href='https://github.com/zlliang/latex-templates'>latex-templates</a>{' '}
        - My LaTeX templates <Tag>LaTeX</Tag>
      </li>
      <li>
        <a href='https://github.com/zlliang/beamer-fudan'>beamer-fudan</a> - An
        unofficial beamer theme for Fudan University <Tag>LaTeX</Tag>
      </li>
      <li>Archived</li>
      <ul id='archived'>
        <li>
          <a href='https://github.com/zlliang/jacobi-svd'>jacobi-svd</a> -
          Numerical experiments on Jacobi SVD algorithm <Tag>MATLAB</Tag>
        </li>
        <li>
          <a href='https://github.com/zlliang/essaysense'>essaysense</a> - An
          experiment on Automated Essay Scoring <Tag>Python</Tag>
          <Tag>TensorFlow</Tag>
        </li>
        <li>
          <a href='https://github.com/zlliang/gomoku'>gomoku</a> - Gomoku agent,
          as an exercise project in Artificial Intelligence <Tag>Python</Tag>
          <Tag>AI</Tag>
        </li>
      </ul>
    </ul>
  </Section>
)

export default Projects
