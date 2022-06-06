import { MaxWidth } from '../MaxWidth'
import * as S from './Footer.styles'

export const Footer = () => {
  return (
    <S.Footer__Container>
      <MaxWidth center padding>
        <S.Footer__TextWrapper>
          <p>criado e desenvolvido por catneell</p>
        </S.Footer__TextWrapper>
      </MaxWidth>
    </S.Footer__Container>
  )
}
