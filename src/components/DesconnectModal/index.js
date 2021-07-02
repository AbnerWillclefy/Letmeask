import { useState } from 'react';
import Modal from 'react-modal'
import { ModalContainer, Container } from './styles'
import { auth } from '../../services/firebase'

import history from '../../services/history';
import Button from '../Button';

Modal.setAppElement('#root');

export default function DesconnectModal({ setUser }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function toggleModalIsOpen() {
    setIsOpenModal(!isOpenModal)
  }

  async function handleDesconnectUser() {
    await auth.signOut()
    setUser(null)
    history.replace('/')
  }

  return (
    <Container>
      <Button onClick={toggleModalIsOpen}>Desconectar</Button>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={toggleModalIsOpen}
        style = {{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          },
          content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: `${props => props.theme.background}`,
            borderRadius: '8px',
            outline: 'none',
            padding: '0'
          }
        }}

        contentLabel="Modal"
        ariaHideApp={false}>
   
          <ModalContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path stroke='#E73F5D' fill='#E73F5D' d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/>
            </svg>

            <h2>Desconectar</h2>
            <p>Tem certeza que você deseja se desconectar?</p>
            <div>
              <button onClick={() => setIsOpenModal(false)}>Cancelar</button>
              <button 
                className='red' 
                onClick={handleDesconnectUser}>Sim, desconectar</button>
            </div>
          </ModalContainer>
      </Modal>
    </Container>
  );
}