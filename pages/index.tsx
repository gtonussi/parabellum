import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { Card, Leadspace, MaxWidth, WhatsappButton } from '../components'
import { cards } from '../contents/cards'

import * as S from '../styles/pages/home'

export default function Home() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <Leadspace />

      <S.Section bgColor="military_05">
        <MaxWidth center padding>
          <S.CardsContainer data-aos="fade-up" data-aos-offset="50">
            {cards.map((card) => (
              <Card key={card.title} copy={card.copy} icon={<card.icon />} title={card.title} />
            ))}
          </S.CardsContainer>
        </MaxWidth>
      </S.Section>

      <S.Section bgColor="military_01">
        <MaxWidth center padding>
          <S.WhatsAppContainer>
            <h4>
              Somos uma assessoria especializada na realização de trâmites legais para concessão da
              posse e porte de arma de fogo, transferências, apostilamentos, renovação de registro,
              emissão de CR de Atirador, Caçador e Colecionador.
            </h4>
            <h2>QUER SABER MAIS?</h2>
            <S.WhatsappButtonWrapper>
              <WhatsappButton />
            </S.WhatsappButtonWrapper>
          </S.WhatsAppContainer>
        </MaxWidth>
      </S.Section>
    </>
  )
}
