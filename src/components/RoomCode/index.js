import copyImg from '../../assets/images/copy.svg'
import { Code } from './styles'

export default function RoomCode(props) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return(
    <Code onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt='Copy icon'/>
      </div>
      <span>Sala: {props.code}</span>
    </Code>
  )
}