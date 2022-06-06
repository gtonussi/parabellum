import styled from 'styled-components'

export const Leadspace__Container = styled.section`
  height: 70vh;
  min-height: 480px;
  width: 100%;
`

export const Leadspace__BackgroundImage = styled.div`
  background-color: ${({ theme }) => theme.colors.military_02};
  background-image: url('./images/leadspace/landing-page-320.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
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
  }

  @media (min-width: 1600px) {
    background-image: url('./images/leadspace/landing-page-1920.jpg');
  }
`

export const Leadspace__Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 16px 0;
  width: 100%;

  @media (min-width: 660px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0;
  }
`

export const Leadspace__ImageWrapper = styled.div`
  img {
    width: 280px;
    height: auto;

    @media (min-width: 660px) {
      width: 320px;
    }

    @media (min-width: 1024px) {
      width: 480px;
    }
  }
`

export const Leadspace__TextWrapper = styled.div`
  margin: 4rem 0 0;

  @media (min-width: 660px) {
    margin: 0 2rem 0 0;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text_01};
    font-size: 2rem;
    font-weight: 200;
    margin: 0;
    max-width: 280px;
    text-align: center;

    @media (min-width: 660px) {
      font-size: 2.75rem;
      max-width: 480px;
      text-align: left;
    }

    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
  }

  hr {
    margin-top: 1.5rem;

    @media (min-width: 660px) {
      margin-top: 2rem;
    }
  }
`
