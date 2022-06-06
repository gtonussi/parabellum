import * as S from './Section.styles'
import * as T from './Section.types'

export const Section: React.FC<T.SectionProps> = ({ children, bgColor }) => {
  return <S.Section__Container bgColor={bgColor}>{children}</S.Section__Container>
}
