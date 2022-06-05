import styled from 'styled-components'

export const Leadspace__Container = styled.section`
  height: 70vh;
  min-height: 480px;
  width: 100vw;
`

export const Leadspace__BackgroundImage = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.military_02};
  background-image: url('./images/leadspace/landing-page-320.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  @media (min-width: 420px) {
    background-image: url('./images/leadspace/landing-page-420.jpg');
  }

  @media (min-width: 660px) {
    background-image: url('./images/leadspace/landing-page-768.jpg');
    background-position: right;
  }

  @media (min-width: 1024px) {
    background-image: url('./images/leadspace/landing-page-1440.jpg');
    background-position: right;
  }

  @media (min-width: 1600px) {
    background-image: url('./images/leadspace/landing-page-1920.jpg');
    background-position: right;
  }
`

export const Leadspace__Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 32px 0;
  width: 100%;

  @media (min-width: 320px) {
    padding: 32px 16px;
  }

  @media (min-width: 660px) {
    flex-direction: row-reverse;
    padding: 0 32px;
  }

  > div {
    @media (min-width: 660px) {
      max-width: 50%;
    }

    h1 {
      color: ${({ theme }) => theme.colors.text_01};
      font-size: 2rem;
      font-weight: 200;
      margin: 4rem 0 2rem;
      max-width: 280px;
      text-align: center;

      @media (min-width: 660px) {
        font-size: 2.5rem;
        margin: 0 0 2rem;
        max-width: 25rem;
        text-align: left;
      }

      @media (min-width: 1024px) {
        font-size: 3.5rem;
      }
    }
  }

  img {
    width: 280px;
    height: auto;

    @media (min-width: 660px) {
      margin-left: 10vw;
    }

    @media (min-width: 1024px) {
      width: 480px;
    }
  }
`
