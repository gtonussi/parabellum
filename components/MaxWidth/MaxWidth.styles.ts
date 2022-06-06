import styled, { css } from 'styled-components'

import * as T from './MaxWidth.types'

export const MaxWidth__Container = styled.div<T.MaxWidthProps>`
  height: 100%;
  max-width: 1200px;
  width: 100%;

  ${({ padding }) =>
    padding &&
    css`
      padding: 0 16px;

      @media (min-width: 1024px) {
        padding: 0 32px;
      }
    `}

  ${({ center }) =>
    center &&
    css`
      margin: 0 auto;
    `}
`
