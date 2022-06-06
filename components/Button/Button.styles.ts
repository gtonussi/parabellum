import styled, { css } from 'styled-components'

import * as T from './Button.types'

const modifiers = {
  primary: css`
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    border-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.text_01}`};

    &:hover {
      background-color: ${({ theme }) => `${theme.colors.secondary}`};
      color: ${({ theme }) => `${theme.colors.text_03}`};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => `${theme.colors.secondary}`};
    border-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.text_03}`};

    &:hover {
      background-color: ${({ theme }) => `${theme.colors.primary}`};
      color: ${({ theme }) => `${theme.colors.text_01}`};
    }
  `,
  whatsapp: css`
    background-color: ${({ theme }) => `${theme.colors.whatsapp}`};
    border-color: ${({ theme }) => `${theme.colors.whatsapp}`};
    color: ${({ theme }) => `${theme.colors.text_01}`};

    &:hover {
      background-color: ${({ theme }) => `${theme.colors.text_01}`};
      color: ${({ theme }) => `${theme.colors.whatsapp}`};
    }
  `,
  xsmall: css`
    height: 28px;
    padding: 4px 24px;
  `,
  small: css`
    height: 32px;
    padding: 4px 24px;
  `,
  medium: css`
    height: 40px;
    padding: 8px 24px;
  `,
  large: css`
    height: 48px;
    padding: 12px 24px;
    font-size: 18px;
  `,
  xlarge: css`
    height: 56px;
    padding: 16px 24px;
    font-size: 24px;
  `,
  fullWidth: css`
    width: 100%;
  `,
}

export const Button__Container = styled.button<T.ButtonProps>`
  align-items: center;
  border-radius: 10px;
  border: 2px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: all 0.2s ease-in-out;

  ${({ fullWidth, size, variation }) => css`
    ${!!fullWidth && modifiers.fullWidth};
    ${!!size && modifiers[size]};
    ${!!variation && modifiers[variation]};
  `}
`
