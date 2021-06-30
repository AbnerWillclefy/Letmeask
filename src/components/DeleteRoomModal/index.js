import { useState } from 'react';
import Modal from 'react-modal'
import { ModalContainer } from './styles'
import { database } from '../../services/firebase'

import Button from '../Button'

Modal.setAppElement('#root');

export default function DeleteRoomModal({roomId}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function toggleModalIsOpen() {
    setIsOpenModal(!isOpenModal)
  }

  async function handleDeleteRoom() {
    await database
      .ref(`rooms/${roomId}`)
      .remove();

    toggleModalIsOpen();
  }

  return (
    <>
      <Button 
        isOutlined
        onClick={toggleModalIsOpen}>
              Encerrar Sala
            </Button>
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

            <h2>Encerrar sala</h2>
            <p>Tem certeza que você deseja encerrar esta sala?</p>
            <div>
              <button onClick={() => setIsOpenModal(false)}>Cancelar</button>
              <button 
                className='red' 
                onClick={handleDeleteRoom}>Sim, encerrar</button>
            </div>
          </ModalContainer>
      </Modal>
    </>
  );
}