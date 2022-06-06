import styled from 'styled-components'

export const CardsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 48px 0;

  @media (min-width: 660px) {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    height: calc(300px + 96px);
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    padding: 64px 0;
    height: calc(300px + 128px);
  }

  article + article {
    margin-top: 1.5rem;

    @media (min-width: 660px) {
      margin-left: 2rem;
      margin-top: 0;
    }
  }
`

export const WhatsAppContainer = styled.div`
  padding: 48px 0;

  @media (min-width: 1024px) {
    padding: 64px 0;
  }

  h4 {
    color: ${({ theme }) => theme.colors.text_02};
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.text_02};
    font-size: 1.75rem;
    font-weight: 700;
    text-align: center;

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  h4 + h2 {
    margin-top: 32px;

    @media (min-width: 1024px) {
      margin-top: 48px;
    }
  }

  h2 + div {
    margin-top: 32px;

    @media (min-width: 1024px) {
      margin-top: 48px;
    }
  }
`

export const WhatsappButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ContactContainer = styled.div`
  padding: 48px 0;

  @media (min-width: 1024px) {
    padding: 64px 0;
  }
`
