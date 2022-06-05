import * as S from './Separator.styles'
import * as T from './Separator.types'

export const Separator: React.FC<T.SeparatorProps> = ({ height }) => {
  return <S.Separator__Container height={height} />
}
