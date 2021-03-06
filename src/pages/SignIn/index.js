import Illustration from '../../assets/images/illustration.svg'
import google from '../../assets/images/google-icon.svg'

import { useContext, useState } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

import history from '../../services/history'
import { database } from '../../services/firebase'

import Button from '../../components/Button'
import Logo from '../../components/Logo'

import { Aside,
         Container,
         Form,
         GoogleButton,
         Main,
         Separator } from './styles.js'
import { Link } from 'react-router-dom'

export default function SignIn() {
  const { user, signInWithGoogle } = useContext(AuthContext);

  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle()
    } 
    
    history.push('rooms/new/')
    
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
          <Logo />
          {!user && 
            <>
            <GoogleButton onClick={() => handleCreateRoom()}>
              <img src={google} alt='google icon'/>
              <span>Crie sua sala com o Google</span>
            </GoogleButton>
            <Separator>
              ou entre em uma sala
            </Separator>
            </>
          }
          {user && <h1>Entre em uma sala</h1>}
          <Form onSubmit={handleJoinRoom}>
            <input 
                  type='text' 
                  placeholder='Digite o c??digo da sala'
                  onChange={event => setRoomCode(event.target.value)}
                  value={roomCode}
            />
            <Button>Entrar na sala</Button>
          </Form>
          {user && <p>Quer criar uma nova sala? <Link to='/rooms/new'>Clique Aqui</Link></p>}
        </div>
      </Main>
    </Container>
  )
}