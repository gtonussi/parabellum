import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

import { Card, Footer, Leadspace, MaxWidth, Section, WhatsappButton } from '../components'
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
        <MaxWidth center padding>
          <S.ContactContainer>
            <div>
              <S.ContactContainer__TextWrapper>
                <h4>ASSESSORIA BÉLICA</h4>
                <h4>
                  <span style={{ fontWeight: '400' }}>SI VIS PACEM, PARA BELLUM</span>
                </h4>
                <a href="#">
                  <AiOutlineMail />
                  <h4>(11) 9 9999-9999</h4>
                </a>
                <a href="#">
                  <FaWhatsapp />
                  <h4>xxxxx@xxxxx.com.br</h4>
                </a>
              </S.ContactContainer__TextWrapper>

              <S.ContactContainer__ImageWrapper>
                <img src="./images/logo/mv-bellica-logo.png" alt="Logo MV Bellica" />
              </S.ContactContainer__ImageWrapper>
            </div>
          </S.ContactContainer>
        </MaxWidth>
      </Section>

      <Footer />
    </>
  )
}
