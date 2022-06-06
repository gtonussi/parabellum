import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { Card, Leadspace, MaxWidth, Section, WhatsappButton } from '../components'
import { cards } from '../contents/cards'

import * as S from '../styles/pages/home'

export default function Home() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <Leadspace />

      <Section bgColor="military_05">
        <MaxWidth center padding>
          <S.CardsContainer data-aos="fade-up" data-aos-offset="50">
            {cards.map((card) => (
              <Card key={card.title} copy={card.copy} icon={<card.icon />} title={card.title} />
            ))}
          </S.CardsContainer>
        </MaxWidth>
      </Section>

      <Section bgColor="military_01">
        <MaxWidth center padding>
          <S.WhatsAppContainer data-aos="fade-up" data-aos-offset="50">
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
      </Section>

      <Section bgColor="military_04">
        <MaxWidth>
          <S.ContactContainer>d</S.ContactContainer>
        </MaxWidth>
      </Section>
    </>
  )
}
