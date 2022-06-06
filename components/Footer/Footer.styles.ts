import styled from 'styled-components'

export const Footer__Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkgray};
  padding: 16px 0;
`

export const Footer__TextWrapper = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-family: 'VT323', monospace;
    color: ${({ theme }) => theme.colors.lightgray};
    font-size: 1rem;
  }
`
