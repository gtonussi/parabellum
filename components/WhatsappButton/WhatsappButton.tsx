import { ImWhatsapp } from 'react-icons/im'
import { RiWhatsappFill } from 'react-icons/ri'

import { Button } from '../Button'
import { useWindowSize } from '../../hooks/useWindowSize'

import * as S from './WhatsappButton.styles'

export const WhatsappButton = () => {
  const { width } = useWindowSize()

  return (
    <S.WhatsappButton__Container>
      <Button size={width > 400 ? 'xlarge' : 'large'} variation="whatsapp">
        ENTRE EM {!(width > 400) && <br />} CONTATO AGORA!
        <span style={{ paddingRight: width > 400 ? '40px' : '28px' }}></span>
      </Button>
      <S.WhatsappButton__IconsWrapper>
        <ImWhatsapp />
        <RiWhatsappFill />
      </S.WhatsappButton__IconsWrapper>
    </S.WhatsappButton__Container>
  )
}
