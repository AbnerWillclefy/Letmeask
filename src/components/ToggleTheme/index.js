import sunIcon from '../../assets/images/sun.png'

import { Icon } from './styles'

export default function ToggleTheme(props) {
  return (
    <Icon {...props}>
      <img src={sunIcon} alt='theme icon'></img>
    </Icon>
  )
}