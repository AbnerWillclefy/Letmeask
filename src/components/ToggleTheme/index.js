import { useState } from 'react'
import sunIcon from '../../assets/images/sun.png'
import moonIcon from '../../assets/images/moon.png'

import { Icon, Img } from './styles'

export default function ToggleTheme(props) {
  const [currentIcon, setCurrentIcon] = useState('moonIcon');

  function handleChangeIcon() {
    if(currentIcon === 'moonIcon') {
      setCurrentIcon('sunIcon')
    } else {
      setCurrentIcon('moonIcon')
    }
  }

  return (
    <Icon {...props}>
      <Img 
        src={currentIcon === 'moonIcon' ? moonIcon : sunIcon} 
        onClick={handleChangeIcon} 
        alt='theme icon'
        icon={currentIcon} />
    </Icon>
  )
}