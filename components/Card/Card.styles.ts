import styled from 'styled-components'

export const Card__Container = styled.article`
  background-color: ${({ theme }) => theme.colors.military_06};
  box-shadow: ${({ theme }) => `8px 8px 24px ${theme.colors.text_03}`};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 300px;
  justify-content: space-between;
  padding: 24px 16px;
  width: 280px;

  @media (min-width: 660px) {
    // Height of cards will be defined by Container.
    min-height: 0;
  }
`

export const Card__IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    color: ${({ theme }) => theme.colors.text_02};
    height: 64px;
    width: auto;
  }
`

export const Card__TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;

  h3 {
    color: ${({ theme }) => theme.colors.text_02};
    margin: 0;
    font-size: 1.5rem;

    @media (min-width: 1024px) {
      font-size: 1.75rem;
    }
  }
`

export const Card__CopyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;

  h4 {
    color: ${({ theme }) => theme.colors.text_02};
    font-size: 1.25rem;
    font-weight: 300;
    text-align: center;
  }
`
