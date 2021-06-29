import Illustration from '../../assets/images/illustration.svg'

import { Link } from 'react-router-dom'

import Button from '../../components/Button'
import Logo from '../../components/Logo'

import { Aside,
         Container,
         Form,
         Main,
          } from './styles.js'

import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { database } from '../../services/firebase'
import history from '../../services/history'

export default function SignIn() {
  const { user } = useContext(AuthContext);
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event) {
    event.preventDefault();

    if(newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.replace(`/admin/rooms/${firebaseRoom.key}`)
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
          <h1>Crie uma nova sala</h1>
          <Form onSubmit={handleCreateRoom}>
            <input 
                  type='text' 
                  placeholder='Digite o código da sala'
                  onChange={event => setNewRoom(event.target.value)}
                  value={newRoom}/>
            <Button type="submit">Criar sala</Button>
          </Form>
          <p>Quer entrar em uma sala já existente? <Link to='/'>Clique Aqui</Link></p>
        </div>
      </Main>
    </Container>
  )
}