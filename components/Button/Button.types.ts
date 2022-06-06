import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: ReactNode
  fullWidth?: boolean
  isLoading?: boolean
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  variation?: 'primary' | 'secondary' | 'whatsapp'
} & ButtonTypes
