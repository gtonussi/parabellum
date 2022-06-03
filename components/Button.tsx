import * as S from './Button.styles'
import * as T from './Button.types'

const Button: React.FC<T.ButtonProps> = ({
  children,
  fullWidth,
  size = 'large',
  variation = 'primary',
}) => {
  return (
    <S.Button__Container fullWidth={fullWidth} size={size} variation={variation}>
      {children}
    </S.Button__Container>
  )
}

export default Button
