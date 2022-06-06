import styled from 'styled-components'

export const WhatsappButton__Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const WhatsappButton__IconsWrapper = styled.div`
  z-index: 1;

  svg {
    height: 72px;
    width: auto;

    @media (min-width: 400px) {
      height: 88px;
    }

    &:nth-child(1) {
      color: ${({ theme }) => `${theme.colors.text_01}`};
      margin-left: -44px;
      transform: scale(0.85);

      @media (min-width: 400px) {
        margin-left: -56px;
      }
    }

    &:nth-child(2) {
      color: ${({ theme }) => `${theme.colors.whatsapp}`};
      margin-left: -72px;

      @media (min-width: 400px) {
        margin-left: -88px;
      }
    }
  }
`
