import * as S from './Card.styles'
import * as T from './Card.types'

export const Card: React.FC<T.CardProps> = ({ copy, icon, title }) => {
  return (
    <S.Card__Container>
      <div>
        <S.Card__IconWrapper>{icon}</S.Card__IconWrapper>
        <S.Card__TitleWrapper>
          <h3>{title}</h3>
        </S.Card__TitleWrapper>
      </div>
      <div>
        <S.Card__CopyWrapper>
          <h4>{copy}</h4>
        </S.Card__CopyWrapper>
      </div>
    </S.Card__Container>
  )
}
