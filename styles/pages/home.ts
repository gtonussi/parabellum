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
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 48px 0;
  width: 100%;

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 40%;
    width: 100%;

    @media (min-width: 660px) {
      flex-direction: row;
    }
  }

  @media (min-width: 1024px) {
    padding: 64px 0;
  }
`

export const ContactContainer__TextWrapper = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.text_01};
    font-size: 1rem;
    font-weight: 200;
    margin: 0;
  }

  > a {
    align-items: center;
    display: flex;
    text-decoration: none;

    > h4 {
      transition: all 0.2s ease-in-out;

      &:hover {
        text-decoration: underline;
      }
    }

    > svg {
      color: ${({ theme }) => theme.colors.text_01};
      height: auto;
      margin-right: 0.25rem;
      width: 16px;
    }
  }

  h4 + h4 {
    margin-top: 0.25rem;
  }

  h4 + a {
    margin-top: 1.25rem;
  }

  a + a {
    margin-top: 0.5rem;
  }
`

export const ContactContainer__ImageWrapper = styled.div`
  margin-top: 32px;

  @media (min-width: 660px) {
    margin-top: 0;
  }

  img {
    height: auto;
    width: 180px;
  }
`
