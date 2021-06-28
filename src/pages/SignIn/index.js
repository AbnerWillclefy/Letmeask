import Illustration from '../../assets/images/illustration.svg'
import Logo from '../../assets/images/logo.svg'
import google from '../../assets/images/google-icon.svg'

import { useContext, useState } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

import history from '../../services/history'
import { database } from '../../services/firebase'

import Button from '../../components/Button'

import { Aside,
         Container,
         Form,
         GoogleButton,
         Main,
         Separator } from './styles.js'

export default function SignIn() {
  const { user, signInWithGoogle } = useContext(AuthContext);

  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle()
    } else {
      history.push('rooms/new/')
    }
  }

  async function handleJoinRoom(event) {
    event.preventDefault();

    if(roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()) {
      alert('Room does not exists.')
      return;
    }

    if(roomRef.val().endedAt) {
      alert('Room already closed')
      return;
    }

    history.push(`rooms/${roomCode}`);
  }

  return (
    <Container>
      <Aside>
          <img src={Illustration} alt='Imagem de perguntas e respostas'/>
          <strong>Toda pergunta tem uma resposta</strong>
          <p>Aprenda e compartilhe conhecimento com outras pessoas</p>  
      </Aside>
      <Main>
        <div>
          <img src={Logo} alt='logo' />
          <GoogleButton onClick={() => handleCreateRoom()}>
            <img src={google} alt='google icon'/>
            <span>Crie sua sala com o Google</span>
          </GoogleButton>
          <Separator>
            ou entre em uma sala
          </Separator>
          <Form onSubmit={handleJoinRoom}>
            <input 
                  type='text' 
                  placeholder='Digite o código da sala'
                  onChange={event => setRoomCode(event.target.value)}
                  value={roomCode}
            />
            <Button>Entrar na sala</Button>
          </Form>
        </div>
      </Main>
    </Container>
  )
}