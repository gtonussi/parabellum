import styled from 'styled-components'

import * as T from './Section.types'

export const Section__Container = styled.section<T.SectionProps>`
  background-color: ${({ theme, bgColor }) => (bgColor ? theme.colors[bgColor] : 'transparent')};
`
