import { ButtonStyle } from './styles'

export default function Button({isOutlined, ...props}) {
  return (
    <ButtonStyle isOutlined={isOutlined} {...props}>
      {props.children}
    </ButtonStyle>
  )
}