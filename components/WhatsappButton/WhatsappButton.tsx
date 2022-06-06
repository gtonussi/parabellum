import { useMediaQuery } from 'react-responsive'
import { ImWhatsapp } from 'react-icons/im'
import { RiWhatsappFill } from 'react-icons/ri'

import { Button } from '../Button'

import * as S from './WhatsappButton.styles'

export const WhatsappButton = () => {
  const is400 = useMediaQuery({
    query: '(min-width: 400px)',
  })

  return (
    <S.WhatsappButton__Container>
      <Button size={is400 ? 'xlarge' : 'large'} variation="whatsapp">
        ENTRE EM {!is400 && <br />} CONTATO AGORA!
        <span style={{ paddingRight: is400 ? '40px' : '28px' }}></span>
      </Button>
      <S.WhatsappButton__IconsWrapper>
        <ImWhatsapp />
        <RiWhatsappFill />
      </S.WhatsappButton__IconsWrapper>
    </S.WhatsappButton__Container>
  )
}
