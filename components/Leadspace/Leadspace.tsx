import { MaxWidth } from '../MaxWidth'
import { Separator } from '../Separator'

import * as S from './Leadspace.styles'

export const Leadspace = () => {
  return (
    <S.Leadspace__Container>
      <S.Leadspace__BackgroundImage>
        <MaxWidth noPadding>
          <S.Leadspace__Content>
            <img src="./images/logo/mv-bellica-logo.png" alt="Logo MV Bellica" />
            <div>
              <h1>
                CHEGOU <span style={{ fontWeight: '400' }}>A HORA</span> DE OBTER O SEU DIREITO DE{' '}
                <span style={{ fontWeight: '700' }}>TER UMA ARMA</span>
              </h1>
              <Separator height="16px" />
            </div>
          </S.Leadspace__Content>
        </MaxWidth>
      </S.Leadspace__BackgroundImage>
    </S.Leadspace__Container>
  )
}
