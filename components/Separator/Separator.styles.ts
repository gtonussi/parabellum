import styled from 'styled-components'

import * as T from './Separator.types'

export const Separator__Container = styled.hr<T.SeparatorProps>`
  background-color: ${({ theme }) => theme.colors.military_02};
  border-color: ${({ theme }) => theme.colors.military_02};
  border-style: solid;
  border-width: ${({ height }) => (height ? height : '2px')};
`
