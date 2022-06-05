import styled, { css } from 'styled-components'

import * as T from './MaxWidth.types'

export const MaxWidth__Container = styled.div<T.MaxWidthProps>`
  max-width: 1200px;

  ${({ noPadding }) =>
    !noPadding &&
    css`
      padding: 0 16px;

      @media (min-width: 1024px) {
        padding: 0 32px;
      }
    `}
`
