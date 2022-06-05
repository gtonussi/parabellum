import * as S from './MaxWidth.styles'
import * as T from './MaxWidth.types'

export const MaxWidth: React.FC<T.MaxWidthProps> = ({ children, noPadding = false }) => {
  return <S.MaxWidth__Container>{children}</S.MaxWidth__Container>
}
