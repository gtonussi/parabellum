import * as S from './MaxWidth.styles'
import * as T from './MaxWidth.types'

export const MaxWidth: React.FC<T.MaxWidthProps> = ({
  children,
  center = false,
  padding = false,
}) => {
  return (
    <S.MaxWidth__Container center={center} padding={padding}>
      {children}
    </S.MaxWidth__Container>
  )
}
