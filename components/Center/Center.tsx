import { ReactNode } from 'react'

import * as S from './Center.styles'

type CenterProps = {
  children?: ReactNode
}

export const Center: React.FC<CenterProps> = ({ children }) => {
  return <S.Center__Container>{children}</S.Center__Container>
}
