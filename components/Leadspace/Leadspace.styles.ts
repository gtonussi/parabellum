import styled from 'styled-components'

export const Leadspace__Container = styled.section`
  height: 80vh;
  width: 100vw;
`

export const Leadspace__BackgroundImage = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.military_02};
  background-image: url('./images/leadspace/landing-page-320.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 32px 0;
  width: 100%;

  @media (min-width: 420px) {
    background-image: url('./images/leadspace/landing-page-420.png');
  }

  @media (min-width: 660px) {
    background-image: url('./images/leadspace/landing-page-768.png');
    background-position: right;
    padding: 0 32px;
  }

  @media (min-width: 1024px) {
    background-image: url('./images/leadspace/landing-page-1440.png');
    background-position: right;
  }

  @media (min-width: 1600px) {
    background-image: url('./images/leadspace/landing-page-1920.png');
    background-position: right;
  }
`

export const Leadspace__Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 660px) {
    flex-direction: row-reverse;
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text_01};
    font-size: 2.5rem;
    font-weight: 200;
    margin: 0;
    text-align: center;
    max-width: 80%;

    @media (min-width: 660px) {
      max-width: 40%;
    }

    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
  }

  img {
    width: 240px;
    height: auto;

    @media (min-width: 1024px) {
      width: 480px;
      margin-left: 10vw;
    }
  }
`
